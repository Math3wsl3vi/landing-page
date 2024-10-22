import AboutBanner from '@/components/AboutBanner'
import AboutIntro from '@/components/AboutIntro'
import Newletter from '@/components/Newletter'
import React from 'react'

const page = () => {
  return (
    <div>
        {/* banner */}
        <AboutBanner/>
        {/* intro */}
        <AboutIntro/>
        {/* waterfall */}
        {/* delivery */}
        {/* team */}
        {/* newsletter */}
        <Newletter/>
    </div>
  )
}

export default page