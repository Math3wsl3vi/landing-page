import React from 'react'
import ProductList from './ProductList'

const Products = () => {
  return (
    <div className='p-3 md:px-96 flex-col flex md:flex-row items-start gap-4 mt-5'>
        <div className='w-1/3 hidden md:block'>
        <div>
            <h1 className=''>PRODUCT CATEGORIES</h1>
        </div>
        <div>
            <h1>FILTER BY PRICE</h1>
        </div>
        <div>
            <h1>TAGS</h1>
        </div>
        </div>
        <div className='w-full md:w-2/3'>
        <ProductList/>
        </div>
    </div>
  )
}

export default Products