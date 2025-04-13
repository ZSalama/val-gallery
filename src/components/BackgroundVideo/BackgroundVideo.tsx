export default function BackgroundVideo() {
    return (
        <video
            autoPlay
            muted
            loop
            playsInline
            className='fixed top-0 left-0 w-full h-full object-cover z-[-1]'
        >
            <source
                src='https://d2oeo8w8j25w98.cloudfront.net/Star_Background2.webm'
                type='video/webm'
            />
        </video>
    )
}
