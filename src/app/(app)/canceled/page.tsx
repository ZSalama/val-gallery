export const metadata = {
    title: 'Order canceled',
    description: 'Your Valerie Anne Barber Gallery checkout was canceled.',
}

export default async function Canceled() {
    return (
        <div className='min-h-screen flex items-center justify-center p-4'>
            <div className='bg-white p-8 rounded-lg shadow-lg max-w-md w-full'>
                <h1 className='text-2xl font-bold text-gray-800 mb-4'>
                    Your order was canceled
                </h1>
                <p className='text-gray-600'>
                    Your cart is still available when you are ready to continue.
                </p>
            </div>
        </div>
    )
}
