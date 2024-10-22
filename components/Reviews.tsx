import Image from 'next/image';
import React from 'react'

const Reviews = (props: { product: any; }) => {
    const {product} = props;
  return (
    <div className='my-10 mx-32'>
        <h1 className='text-center text-4xl font-serif'>Reviews</h1>
        <div className='text sm flex flex-row gap-2'>
            <div className='border rounded-full p-2'>
                <Image src='/user.png' alt='user' width={30} height={30}/>
            </div>
            <div>
                <h1 className='text-'>user</h1>
                <h2 className='text-sm'>{product.reviews}</h2>
            </div>
        </div>
    </div>
  )
}

export default Reviews