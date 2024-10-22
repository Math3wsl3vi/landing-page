import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row mx-32 justify-between'>
        <div className='absolute top-2 left-2'>
            <Image src="/logo2.png" alt='logo' width={140} height={140}/>
        </div>
        <div className='mt-10'>
            <ul className='md:flex flex-row gap-10 text-sm font-medium hidden'>
                <li><a href="/" className=' hover:text-primary hover:translate-y-2'>HOME</a></li>
                <li><a href="/" className=' hover:text-primary hover:translate-y-2'>STORE</a></li>
                <li><a href="/" className=' hover:text-primary hover:translate-y-2'>ABOUT</a></li>
                <li><a href="/" className=' hover:text-primary hover:translate-y-2'>BLOG</a></li>
                <li><a href="/" className=' hover:text-primary hover:translate-y-2'>CONTACT</a></li>
            </ul>
        </div>
        <div className='mt-10 hidden md:flex flex-row gap-3'>
            <div>
                <Image
                 src="/search.png"
                 alt='seacrh'
                 width={18}
                 height={18}
                />
            </div>
            <div>
                <Image
                 src="/cart.png"
                 alt='seacrh'
                 width={18}
                 height={18}
                />
            </div>
            <div>
                <Image
                 src="/user.png"
                 alt='seacrh'
                 width={18}
                 height={18}
                />
            </div>
        </div>
        <div className='block md:hidden border border-black p-2 absolute top-2 right-2'>
            <Image 
             src='/menu.png'
             alt='menu'
             width={20}
             height={20}
            />
        </div>
    </div>
  )
}

export default Navbar