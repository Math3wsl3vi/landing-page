import Image from 'next/image'
import React from 'react'

const Item = (props) => {
  return (
    <div>
        <Image 
        src={props.image}
        alt='image'
        width={100}
        height={200}
        />
        <p>{props.name}</p>
        <p>{props.price}</p>
    </div>
  )
}

export default Item