import Image from 'next/image'
import React from 'react'

const Sort = () => {
  return (
    <div className='px-96'>
        <div className='w-full flex flex-row gap-4'>
        <div className='w-1/3'>
        <div className='border border-gray-200 flex felx-row justify-between p-2 cursor-pointer'>
        <input type="text" className='outline-none' />
        <Image src='/search.png' alt='search' width={25} height={25}/>
        </div>

        </div>
        <div className='w-2/3 flex flex-row justify-between items-center'>
        <div className='flex felx-row gap-2 items-center'>
        <div className='border border-gray-200 p-2 cursor-pointer hover:bg-primary'>
            <Image src='/menu.png' alt='menu' width={20} height={20}/>
        </div>
        <div className='border border-gray-200 p-2 cursor-pointer hover:bg-primary'>
        <Image src='/menu.png' alt='menu' width={20} height={20}/>
        </div>
        <h1 className='font-sans text-xl text-meow'>Showing 1 - 12 out of 24 results</h1>
        </div>
        <div>
            <div className='font-sans'>
                <label htmlFor="options" className='mr-3 text-meow'>Sort by: </label>
                <select id="options" className='p-2 outline-none border border-gray-300 bg-white cursor-pointer'>
                    <option value="">Default sorting</option>
                    <option value="">Most Relevant</option>
                    <option value="">Lowest Price</option>
                    <option value="">Highest Price</option>

                </select>
            </div>
        </div>
        </div>
    </div>
    </div>
    
  )
}

export default Sort