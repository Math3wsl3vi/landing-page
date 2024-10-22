import Banner from '@/components/Banner';
import Button from '@/components/Button';
import Description from '@/components/Description';
import Reviews from '@/components/Reviews';
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

type ProductPageProps ={
    params: {
        id: string;
    };
};

export default function ProductPage({params}: ProductPageProps){
    const product: Product | undefined = data_product.find((item)=>item.id.toString() === params.id)

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
        <Image src={product.image} alt='rate' width={71} height={70}/>
        <Image src={product.image} alt='rate' width={71} height={70}/>
        <Image src={product.image} alt='rate' width={71} height={70}/>
        <Image src={product.image} alt='rate' width={71} height={70}/>
        {/* <Image src={product.image} alt='rate' width={70} height={70}/> */}
        </div>
        </div>
       <div className='md:items-center px-3'>
       <h1 className='text-2xl font-medium'>{product.name}</h1>
       <h1 className='text-primary font-medium'>ksh {product.price}</h1>
       <div className='flex gap-2 my-3'>
        <Image src='/star.png' alt='rate' width={20} height={20}/>
        <Image src='/star.png' alt='rate' width={20} height={20}/>
        <Image src='/star.png' alt='rate' width={20} height={20}/>
        <Image src='/star.png' alt='rate' width={20} height={20}/>
        <Image src='/star.png' alt='rate' width={20} height={20}/>

       </div>
       <h1 className='text-meow text-sm font-sans'>{product.desc}</h1>
       <h2 className='text-sm mt-5'>Scientific name: <span className='font-semibold'>krukuta krukuta</span></h2>
       <h2 className='text-sm mt-2'>Age: <span className='font-semibold'>4 weeks</span></h2>
       <div className='my-10 flex flex-col gap-5'>
        <div className='flex flex-col gap-1'>
        <label htmlFor="name">Quantity</label>
        <input type="text" className='border border-gray-600'/>
        </div>
        <Button type='button' title='Add to cart'/>
        </div>
        <div className='flex flex-col gap-3'>
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
            
            {/* <div>
            <Image src='/facebook.png' alt='rate' width={20} height={20}/>
            </div> */}
        </div>
       </div>    
        </div>
        <Description product={product}/>
        <Reviews product={product}/>
    </div>
  )
}
