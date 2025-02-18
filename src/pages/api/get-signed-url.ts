// pages/api/get-signed-url.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

const s3Client = new S3Client({
    region: process.env.AWS_REGION!,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
})

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { key } = req.query
    if (!key || typeof key !== 'string') {
        return res.status(400).json({ error: 'Key parameter is required' })
    }

    try {
        const command = new GetObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME!,
            Key: key,
        })

        const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 })
        res.status(200).json({ url })
    } catch (error) {
        console.error('Error generating signed URL', error)
        res.status(500).json({ error: 'Error generating signed URL' })
    }
}
