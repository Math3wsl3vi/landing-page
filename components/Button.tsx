import React from 'react'
type ButtonProps ={
    type: 'button' | 'submit';
    title: string;
    // icon? : string;
}

const Button = ({type, title }:ButtonProps) => {
  return (
    <button className='rounded-full bg-primary py-2 px-5 w-[150px] border border-primary text-white cursor-pointer hover:bg-white hover:text-primary' type={type}>
        <label className='text-sm font-semibold cursor-pointer'>{title}</label>
    </button>
  )
}

export default Button