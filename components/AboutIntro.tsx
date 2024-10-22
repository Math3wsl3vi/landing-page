import Image from 'next/image'
import React from 'react'

const AboutIntro = () => {
  return (
    <div className='flex flex-row md:px-32'>
        <div className='flex flex-row gap-32'>
          <div>
            <h1 className='font-serif text-5xl'>Every Plant Deserves A Home</h1>
            <h1 className='text-primary text-3xl'>_____________</h1>
            <p className='w-96 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sapiente velit pariatur aliquam, qui voluptatum dolor nostrum neque dolore magnam cumque ad quibusdam expedita quam eos sunt sint suscipit fugit.</p>
          </div>
          <div>
            <Image 
             src='/img80.jpg'
             alt='pic'
             width={500}
             height={500}
            />
          </div>
        </div>
        <div></div>
    </div>
  )
}

export default AboutIntro