import Image from 'next/image'
import React from 'react'
import Button from "@/components/Button";

const Hero = () => {
  return (
    <div className='flex flex-row justify-between mt-32'>
        <div className='ml-32 mt-20'>
            <h1 className='text-lg font-medium font-sans'>WELCOME TO <span className='text-primary'>MAUTITUDE</span></h1>
            <h2 className='text-5xl font-bold my-5 font-serif'>House plants for Everyone</h2>
            <hr  className='w-32 my-5'/>
            <p className='text-[14px] font-sans text-meow'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus perspiciatis fugiat itaque repellendus hic ex </p>
            
            <div className='mt-10'>
            <Button type='button' title='Shop Now'/>
            </div>
        </div>
        <div className='-mt-32'>
            <Image src="/hero3.png"
            alt='hero'
            width={800}
            height={800}/>
            
        </div>
    </div>
  )
}

export default Hero