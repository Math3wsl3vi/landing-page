import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

const Footer = () => {
  return (
    <>
    <hr className='mx-3 md:mx-52'/>
    <div className='flex flex-col gap-10 md:flex-row justify-between items-center md:items-start mx-3 md:mx-32 mt-10'>
        
    <div className='items-center'>
        <h1 className='text-xl font-serif mb-5'>Reach Out</h1>
        <ul className='font-sans'>
            <li className='flex flex-row gap-2 mb-5'>
            <Image src='/pin.png' alt='phone' width={18} height={18}/>
                <a className='text-gray-400 text-sm' href="">Nakuru,550 Lanet</a>
                </li>
            <li className='flex flex-row gap-2 mb-5'>
                <Image src='/telephone.png' alt='phone' width={18} height={18}/>
                <a className='text-gray-400 text-sm' href="tel:0717271815">0717271815</a>
                </li>
            <li className='flex flex-row gap-2 mb-5'>
                <Image src='/mail.png' alt='phone' width={18} height={18}/>
                <a className='text-gray-400 text-sm' href="mailto:levimathews9841@gmail.com">admin@mautitude.com</a>
                </li>
        </ul>
    </div>
    <div>
        <div>
            <Image src='/logo1.png' alt='logo' width={140} height={140}/>
        </div>
        <div>
            <Link href='/'><p className='text-sm font-sans text-meow hover:text-primary'>Our Privacy Policy</p></Link>
            <Link href='/'><p className='text-sm font-sans text-meow hover:text-primary'>Terms and conditions</p></Link>
            <Link href='/'><p className='text-sm font-sans text-meow hover:text-primary'>Blog</p></Link>            
        </div>
    </div>

    <div>
        <h1 className='font-serif text-2xl font-extralight'>Subscribe to Our Newsletter</h1>
        <div className='flex flex-col  my-5 rounded-full gap-5'>
        <input type="text" placeholder='Enter Your Email' className='rounded-md p-2 text-sm outline-none border border-gray-600 font-sans' />
        <div className='cursor-pointer'>
            <Button type='submit' title='Submit'/>
        </div>
      </div>
    </div>
    </div>
    <hr className='mx-52 my-10'/>
    <div className='text-center mt-10 mb-5 mx-3'> 
        <h1 className='font-sans text-meow'>Copyright 2024 by <span className='text-primary'>Mantle Networks </span>- All right reserved</h1>
    </div>

    </>
  )
}

export default Footer
