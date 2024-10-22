import Banner from '@/components/Banner';
import Button from '@/components/Button';
import Description from '@/components/Description';
// import Reviews from '@/components/Reviews';
import data_product from '@/public/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react'

type Product={
    id: number;
    name: string;
    price: string;
    image: string;
    desc: string;
    description: string;
    reviews: string;
};

interface ProductPageProps {
    params: Promise<{ id: string }>; // Awaitable params, hence a Promise
  }

// Ensure this function is async for proper handling of dynamic routes

export default async function ProductPage({ params }: ProductPageProps) {
    // Await params to access the `id`
    const awaitedParams = await params;
    
    // Find the product by the id from the awaited params
    const product: Product | undefined = data_product.find(
      (item) => item.id.toString() === awaitedParams.id
    );
  
    if (!product){
        return notFound();
    }
  return (
    <div className='mb-10'>
        {/* banner */}
        <Banner product={product}/>
        {/* product */}
       <div className='flex md:flex-row flex-col justify-center items-start gap-10'> 
        <div className='flex flex-col gap-2 px-3'>
       <div className='cursor-pointer'>
       <Image
        src={product.image}
        alt='image'
        width={390}
        height={300}
        />
       </div>
        <div className='flex flex-row gap-3 cursor-pointer'>
        <Image src={product.image} alt='rate' width={69} height={70}/>
        <Image src={product.image} alt='rate' width={69} height={70}/>
        <Image src={product.image} alt='rate' width={69} height={70}/>
        <Image src={product.image} alt='rate' width={69} height={70}/>
        <Image src={product.image} alt='rate' width={69} height={70}/>
        </div>
        </div>
       <div className='md:items-center px-3'>
       <h1 className='text-2xl font-medium font-sans text-meow'>{product.name}</h1>
       <h1 className='text-primary font-medium text-2xl'>ksh <span className='font-semibold'>{product.price}</span></h1>
       {/* <div className='flex gap-2 my-3'>
        <Image src='/star.png' alt='rate' width={20} height={20}/>
        <Image src='/star.png' alt='rate' width={20} height={20}/>
        <Image src='/star.png' alt='rate' width={20} height={20}/>
        <Image src='/star.png' alt='rate' width={20} height={20}/>
        <Image src='/star.png' alt='rate' width={20} height={20}/>

       </div> */}
       <h1 className='text-meow text-sm font-sans'>{product.desc}</h1>
       <h2 className='text-sm mt-5'>Scientific name: <span className='font-semibold'>krukuta krukuta</span></h2>
       <h2 className='text-sm mt-2'>Age: <span className='font-semibold'>4 weeks</span></h2>
       <h2 className='text-sm mt-2'>Specifications: <span className='font-semibold'>Water daily</span></h2>
       <div className='my-10 flex flex-col gap-5'>
        <div className='flex flex-row gap-1 items-center'>
        <label htmlFor="options">Quantity:</label>
        <select name="option" id="options" className='bg-white border border-gray-300 p-2 outline-none cursor-pointer'>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        </div>
        <Button type='button' title='Add to cart'/>
        </div>
        {/* <div className='flex flex-col gap-3'>
            <h1>Share this Product:</h1>
            <div className='flex gap-5'>
            <div className='cursor-pointer'>
            <Image src='/facebook.png' alt='rate' width={20} height={20}/>
            </div>
            <div className='cursor-pointer'>
            <Image src='/instagram.png' alt='rate' width={20} height={20}/>
            </div>
            <div className='cursor-pointer'>
            <Image src='/whatsapp.png' alt='rate' width={20} height={20}/>
            </div>
            </div>
        </div> */}
       </div>    
        </div>
        <Description product={product}/>
        {/* <Reviews product={product}/> */}
    </div>
  )
}
