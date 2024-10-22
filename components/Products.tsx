import React from 'react'
import ProductList from './ProductList'

const Products = () => {
  return (
    <div className='px-96 flex flex-row items-start gap-4 mt-5'>
        <div className='w-1/3'>
        <div>
            <h1 className='font-serif'>PRODUCT CATEGORIES</h1>
        </div>

        </div>
        <div className='w-2/3'>
        <ProductList/>
        </div>
    </div>
  )
}

export default Products