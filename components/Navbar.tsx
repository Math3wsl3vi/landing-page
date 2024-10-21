import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row mx-32 justify-between'>
        <div>
            <Image src="/logo2.png" alt='logo' width={140} height={140}/>
        </div>
        <div className='mt-10'>
            <ul className='flex flex-row gap-10 text-sm font-medium'>
                <li><a href="/">HOME</a></li>
                <li><a href="/">STORE</a></li>
                <li><a href="/">ABOUT</a></li>
                <li><a href="/">BLOG</a></li>
                <li><a href="/">CONTACT</a></li>
            </ul>
        </div>
        <div className='mt-10 flex flex-row gap-3'>
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
    </div>
  )
}

export default Navbar