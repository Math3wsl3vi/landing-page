import React from 'react'

type Product = {
  id: number;
  name: string;
  price: string;
}

const Breadcrumb = (props: { product: Product; }) => {
    const {product} = props;
  return (
    <div className='font-sans text-meow'>
        HOME  /  SHOP  /  <span className='text-primary'>{product.name} </span>   
    </div>
  )
}

export default Breadcrumb