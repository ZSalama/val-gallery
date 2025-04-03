export default async function Success() {
    return (
        <div className='min-h-screen flex items-center justify-center p-4'>
            <div className='bg-white p-8 rounded-lg shadow-lg max-w-md w-full'>
                <title>Your order was canceled</title>
                <h1 className='text-2xl font-bold text-gray-800 mb-4'>
                    Your order was canceled
                </h1>
                <p className='text-gray-600'>No hard feelings.</p>
            </div>
        </div>
    )
}
