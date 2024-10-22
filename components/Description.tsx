import Image from 'next/image';
import React from 'react'

type Product = {
  id: number;
  name: string;
  price: string;
  description: string;
}

const Description = (props: { product: Product; }) => {
    const {product} = props;
  return (
    <div className='mx-3 md:mx-32'>
        <h1 className='text-4xl text-center mt-10 mb-2 font-serif text-primary'>Description</h1>
      <div className='flex justify-center'>
      <Image 
         src='/hbdr.png'
         alt='thing'
         width={400}
         height={30}
         className='mb-5'
        />
      </div>
        <div className='text-sm font-sans font-light'>{product.description}</div>
    </div>
  )
}

export default Description