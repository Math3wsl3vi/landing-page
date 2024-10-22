import data_product from '@/public/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductList = () => {
  return (
    <div className='flex md:justify-start justify-center md:flex-row flex-wrap gap-7'>
        {data_product.map((product)=>(
          <Link href={`/products/${product.id}`} key={product.id}>
          <div key={product.id} className='cursor-pointer border border-gray-300 md:hover:shadow-md md:border-none w-full'>
            <Image 
            src={product.image}
            alt={product.name}
            width={230}
            height={100}
            className='w-[350px] md:w-[200px]'
            />
            <div className='p-5'>
                <h1 className='text-sm text-center text-meow'>{product.name}</h1>
                <h2 className='text-center font-medium'>{product.price}</h2>
            </div>
          </div>
          </Link>  
        ))}
    </div>
)
}

export default ProductList