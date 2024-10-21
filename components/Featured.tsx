import React from 'react'
import data_product from '../public/data'
import Image from 'next/image'


const Featured = () => {
  return (
    <div className='mt-20 mb-10 items-center flex flex-col'>
        <h1 className='text-center text-3xl font-serif'>Featured Product</h1>
        <Image 
         src='/hbdr.png'
         alt='thing'
         width={400}
         height={30}
         className='my-8'
        />
    <div className='flex flex-row justify-center items-center md:justify-between md:mx-32 gap-5 flex-wrap'>
         {data_product.map((product)=>(
            <div key={product.id} className='border border-gray-200 cursor-pointer'>
                <Image 
                src={product.image}
                alt={product.name}
                width={200}
                height={100}
                className='w-[350px] md:w-[200px]'
                />
                <div className='p-5'>
                <h2 className='text-sm text-center'>{product.name}</h2>
                <p className='text-center font-medium'>ksh {product.price}</p>
                </div>
            </div>
         ))}
    </div>

    </div>

  )
}

export default Featured