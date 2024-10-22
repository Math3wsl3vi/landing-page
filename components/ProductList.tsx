import data_product from '@/public/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductList = () => {
  return (
    <div className='flex flex-row flex-wrap gap-7'>
        {data_product.map((product)=>(
          <Link href={`/products/${product.id}`} key={product.id}>
          <div key={product.id}>
            <Image 
            src={product.image}
            alt={product.name}
            width={230}
            height={100}
            />
            <div>
                <h1>{product.name}</h1>
                <h2>{product.price}</h2>
            </div>
          </div>
          </Link>  
        ))}
    </div>
)
}

export default ProductList