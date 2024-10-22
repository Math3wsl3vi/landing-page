import Image from 'next/image';
import React from 'react'

const Description = (props: { product: any; }) => {
    const {product} = props;
  return (
    <div className='mx-32'>
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
        <div className='text-sm'>{product.description}</div>
    </div>
  )
}

export default Description