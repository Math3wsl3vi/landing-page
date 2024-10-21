import React from 'react'
type ButtonProps ={
    type: 'button' | 'submit';
    title: string;
    icon? : string;
}

const Button = ({type, title, icon }:ButtonProps) => {
  return (
    <button className='rounded-full bg-primary py-2 px-5 w-[150px] cursor-pointer' type={type}>
        <label className='text-white text-sm font-semibold cursor-pointer'>{title}</label>
    </button>
  )
}

export default Button