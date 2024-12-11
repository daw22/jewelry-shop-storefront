import React from 'react'
import Image from 'next/image';
import RhombusPicture from './RhombusPicture';

function Hero({ products }) {
  return (
    <div style={{height: '85vh'}} className='w-full relative my- flex-1 flex flex-col justify-center'>
      <div className='w-full h-full absolute right-0 top-0'>
        <Image
        src='/cover1.png'
        alt='cover picture'
        fill      
        />
      </div>
      {/* <div className='w-full h-full absolute left-0 top-0'>
        <Image
        src='/cover1.png'
        alt='cover picture'
        fill      
        />
      </div> */}
      <div className='mx-auto z-10 text-white'>
        <h1 className='text-3xl sm:text-6xl font-raleway font-bold'>Deluwe Jewelry</h1>
        <p className='text-lg sm:text-xl text-white drop-shadow-lg'>Quality is our thing, and you will love it.</p>
      </div>
      <div className='absolute bottom-0 w-full flex justify-center space-x-5 z-40'>
        {products.map(product => (
          <RhombusPicture key={product.id} src={product.images[0].src} title={product.title} />
        ))}
      </div>
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/50 z-3"></div>
    </div>
  )
}

export default Hero;