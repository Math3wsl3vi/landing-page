import React from 'react'
import data_product from '../public/data'
import Image from 'next/image'
import Link from 'next/link'


const Featured = () => {
  return (
    <div className='mt-20 mb-10 items-center flex flex-col'>
        <h1 className='text-center text-3xl font-serif'>Featured Product</h1>
        <Image 
         src='/hbdr.png'
         alt='thing'
         width={400}
         height={30}
         className='mt-8 mb-5'
        />
        <h2 className='text-sm my-5 text-meow mx-3'>Lorem ipsum is simply dummy text of the printing and typesetting industry.</h2>
    <div className='flex flex-row md:justify-start justify-center items-center md:mx-32 gap-5 flex-wrap'>
         {data_product.map((product)=>(
            <Link href={`/products/${product.id}`} key={product.id}>
            <div key={product.id} className='border border-gray-200 cursor-pointer'>
                <Image 
                src={product.image}
                alt={product.name}
                width={200}
                height={100}
                className='w-[350px] md:w-[200px]'
                />
                <div className='p-5'>
                <h2 className='text-sm text-center text-meow'>{product.name}</h2>
                <p className='text-center font-medium'>ksh {product.price}</p>
                </div>
            </div>
            </Link>
         ))}
    </div>

    </div>

  )
}

export default Featured