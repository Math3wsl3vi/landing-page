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
        <Sort/>
        {/* items */}
        <Products/>
        {/* newsletter */}
        <Newletter/>
    </div>
  )
}

export default page