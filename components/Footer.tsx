import React from 'react'

const Footer = () => {
  return (
    <>
    <hr className='mx-52'/>
    <div className='flex flex-col gap-10 md:flex-row justify-between items-start mx-32 mt-10'>
        
    <div className='item-center'>
        <h1>CONTACT US</h1>
        <ul>
            <li><a className='text-gray-400 text-sm' href="">Nakuru,550 Lanet</a></li>
            <li><a className='text-gray-400 text-sm' href="tel:0717271815">0717271815</a></li>
            <li><a className='text-gray-400 text-sm' href="mailto:levimathews9841@gmail.com">admin@mautitude.com</a></li>
        </ul>
    </div>
    <div className=''>
        <h1 className=''>INFO</h1>
        <ul>
            <li><a href="" className='text-gray-400 text-sm'>New Products</a></li>
            <li><a href="" className='text-gray-400 text-sm'>Top Sellers</a></li>
            <li><a href="" className='text-gray-400 text-sm'>Order History</a></li>
            <li><a href="" className='text-gray-400 text-sm'>Our Blog</a></li>
            <li><a href="" className='text-gray-400 text-sm'>Privacy Policy</a></li>

        </ul>
    </div>
    <div>
        <h1>MY ACCOUNT</h1>
        <ul>
            <li><a className='text-gray-400 text-sm' href="">My Account</a></li>
            <li><a className='text-gray-400 text-sm' href="">Discounts</a></li>
            <li><a className='text-gray-400 text-sm' href="">Promo codes</a></li>
            <li><a className='text-gray-400 text-sm' href="">Order History</a></li>
        </ul>
    </div>
    <div>
        <h1>NEWSLETTER</h1>
        
    </div>
    </div>
    <hr className='mx-52 my-10'/>
    <div className='text-center mt-10 mb-5'> 
        <h1>Copyright 2024 by <span className='text-primary'>Mantle Networks </span>- All right reserved</h1>
    </div>

    </>
  )
}

export default Footer
