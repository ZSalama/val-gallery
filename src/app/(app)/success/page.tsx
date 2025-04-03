export default async function Success() {
    return (
        <div className='min-h-screen flex items-center justify-center p-4'>
            <div className='bg-white p-8 rounded-lg shadow-lg max-w-lg w-full'>
                <title>Thanks for your order!</title>
                <h1 className='text-2xl font-bold text-gray-800 mb-4'>
                    Thanks for your order!
                </h1>
                <p className='text-gray-600'>
                    We appreciate your business. Every order is meaningful. Your
                    order might take some time to show up under order history.
                </p>
            </div>
        </div>
    )
}
