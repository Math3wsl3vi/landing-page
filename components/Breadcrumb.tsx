import React from 'react'

const Breadcrumb = (props: { product: any; }) => {
    const {product} = props;
  return (
    <div className='font-sans text-meow'>
        HOME  /  SHOP  /  <span className='text-primary'>{product.name} </span>   
    </div>
  )
}

export default Breadcrumb