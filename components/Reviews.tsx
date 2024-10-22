import Image from 'next/image';
import React from 'react'

type Product = {
    id: number;
    name: string;
    price: string;
    reviews: string;
  }

const Reviews = (props: { product: Product; }) => {
    const {product} = props;
  return (
    <div className='my-10 mx-3 md:mx-32'>
        <h1 className='text-center text-4xl font-serif text-primary'>Reviews</h1>
        <div className='flex justify-center'>
      <Image 
         src='/hbdr.png'
         alt='thing'
         width={400}
         height={30}
         className='mb-5'
        />
      </div>
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