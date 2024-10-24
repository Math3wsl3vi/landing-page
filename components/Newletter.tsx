import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Newletter = () => {
  return (
    <div className='md:mx-32 md:p-24 p-3 bg-slate-100 items-center flex justify-center flex-col relative my-10 overflow-hidden'>
        <div className='absolute -top-40 -left-[280px] hidden md:block '>
        <Image 
         src='/hero3.png'
         alt='thing'
         width={500}
         height={500}
         className='mb-5'
        />
        </div>
        <h1 className='text-2xl md:text-4xl font-serif my-4'>Subscribe To Our Newletter</h1>
        <div className='flex justify-center'>
      <Image 
         src='/hbdr.png'
         alt='thing'
         width={400}
         height={30}
         className='mb-5'
        />
      </div>
      <h2 className='font-sans text-meow'>Enter Your email address to join our mailing list and keep yourself up to date</h2>
      <div className='flex flex-col md:flex-row md:justify-between md:bg-white my-5 rounded-full gap-5'>
        <input type="text" placeholder='Enter Your Email' className='rounded-full p-3 md:py-2 md:px-5 text-sm outline-none border-none font-sans' />
        <div className='cursor-pointer'>
            <Button type='submit' title='Submit'/>
        </div>
      </div>
      <div className='absolute -bottom-40 -right-[100px] hidden md:block '>
        <Image 
         src='/hero3.png'
         alt='thing'
         width={500}
         height={500}
         className='mb-5'
        />
        </div>
    </div>
  )
}

export default Newletter