import React from 'react'

const Description = (props: { product: any; }) => {
    const {product} = props;
  return (
    <div className='mx-32'>
        <h1 className='text-4xl text-center mt-10 mb-5 font-serif'>Description</h1>
        <div className='text-sm'>{product.description}</div>
    </div>
  )
}

export default Description