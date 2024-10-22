import Image from 'next/image'
import React from 'react'
import AboutCrumb from './AboutCrumb'

const AboutBanner = () => {
  return (
    <div className='bg-[#f5f5f5] h-[222px] mt-10 mb-20 flex justify-between items-center px-3 md:px-52'>
            <div className='hidden md:block'>
            <Image
        src='/img10.jpg'
        alt='image'
        width={200}
        height={200}
        />
            </div>
            <div>
                <h1 className='text-3xl md:text-5xl font-serif mb-5'>About Us</h1>
                <AboutCrumb/>
            </div>
            <div className=''>
            <Image
        src='/img09.jpg'
        alt='image'
        width={200}
        height={200}
        />
            </div>
        </div>
  )
}

export default AboutBanner