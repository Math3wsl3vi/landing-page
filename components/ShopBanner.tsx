import Image from 'next/image'
import React from 'react'
import ShopBreadcrumb from './ShopBreadcrumb'

const Banner = () => {
  return (
    <div className='bg-[#f5f5f5] h-[222px] mt-10 mb-20 flex justify-between items-center px-3 md:px-96'>
            <div className='hidden md:block'>
            <Image
        src='/img08.jpg'
        alt='image'
        width={200}
        height={200}
        />
            </div>
            <div>
                <h1 className='text-3xl md:text-5xl font-serif mb-5'>Shop</h1>
                <ShopBreadcrumb/>
            </div>
            <div className=''>
            <Image
        src='/img07.jpg'
        alt='image'
        width={200}
        height={200}
        />
            </div>
        </div>
  )
}

export default Banner