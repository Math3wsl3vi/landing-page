import ShopBanner from '@/components/ShopBanner'
import Newletter from '@/components/Newletter'
import React from 'react'
import Sort from '@/components/Sort'
import Products from '@/components/Products'

const page = () => {
  return (
    <div>
        {/* banner */}
        <ShopBanner/>
        {/* sort */}
        <div className='flex flex-col'>
        {/* sort */}
        <Sort/>
        {/* items */}
        <Products/>
        </div>
        
        {/* newsletter */}
        <Newletter/>
    </div>
  )
}

export default page