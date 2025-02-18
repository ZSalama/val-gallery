// pages/api/list-images.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3'

const s3Client = new S3Client({
    region: process.env.AWS_REGION || 'us-east-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
})

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const bucketName = process.env.AWS_BUCKET_NAME
    if (!bucketName) {
        return res.status(500).json({ error: 'Bucket name not defined' })
    }

    try {
        let images: string[] = []
        let continuationToken: string | undefined = undefined

        do {
            const command: ListObjectsV2Command = new ListObjectsV2Command({
                Bucket: bucketName,
                ContinuationToken: continuationToken,
            })
            const response = await s3Client.send(command)

            // Extract keys (object names) and map to URLs
            const keys =
                response.Contents?.map((item) => item.Key).filter(Boolean) || []
            const urls = keys.map(
                (key) =>
                    `https://${bucketName}.s3.us-east-1.amazonaws.com/${key}`
            )
            images = images.concat(urls)

            continuationToken = response.NextContinuationToken
        } while (continuationToken)

        res.status(200).json({ images })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error fetching images' })
    }
}
