// shipping address now handled by stripe

// 'use client'

// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { useState } from 'react'
// import { submitForm } from '@/app/actions'
// import { addressSchema } from '@/lib/types'

// export default function AddressForm() {
//     const [serverResponse, setServerResponse] = useState<string | null>(null)

//     const {
//         register,
//         handleSubmit,
//         formState: { errors, isSubmitting },
//     } = useForm<addressSchema>({
//         resolver: zodResolver(addressSchema),
//     })

//     const onSubmit = async (data: addressSchema) => {
//         const response = await submitForm(data)
//         setServerResponse(response)
//     }

//     return (
//         <div>
//             <h2>Set Delivery Address</h2>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 {/* Name Input */}
//                 <div>
//                     <label>Name:</label>
//                     <input
//                         {...register('name')}
//                         placeholder='Enter your name'
//                     />
//                     {errors.name && <p>{errors.name.message}</p>}
//                 </div>
//                 {/* Street Input */}
//                 <div>
//                     <label>Street:</label>
//                     <input
//                         {...register('street')}
//                         placeholder='Enter your Street'
//                     />
//                     {errors.street && <p>{errors.street.message}</p>}
//                 </div>

//                 {/* City Input */}
//                 <div>
//                     <label>city:</label>
//                     <input
//                         {...register('city')}
//                         type='text'
//                         placeholder='Enter your city'
//                     />
//                     {errors.city && <p>{errors.city.message}</p>}
//                 </div>

//                 {/* Message Input */}
//                 <div>
//                     <label>State:</label>
//                     <input
//                         {...register('state')}
//                         type='text'
//                         placeholder='Enter your state'
//                     />
//                     {errors.state && <p>{errors.state.message}</p>}
//                 </div>
//                 {/* zipCode Input */}
//                 <div>
//                     <label>Zip code:</label>
//                     <input
//                         {...register('zip')}
//                         placeholder='Enter your zipcode'
//                     />
//                     {errors.zip && <p>{errors.zip.message}</p>}
//                 </div>
//                 {/* Country Input */}
//                 <div>
//                     <label>Country:</label>
//                     <input {...register('country')} placeholder='USA' />
//                     {errors.country && <p>{errors.country.message}</p>}
//                 </div>
//                 {/* Submit Button */}
//                 <button type='submit' disabled={isSubmitting}>
//                     {isSubmitting ? 'Submitting...' : 'Submit'}
//                 </button>
//             </form>

//             {/* Display server response */}
//             {serverResponse && <p>{serverResponse}</p>}
//         </div>
//     )
// }
