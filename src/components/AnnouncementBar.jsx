import React from 'react'
import Marquee from 'react-fast-marquee';

function AnnouncementBar() {
  return (
    <Marquee speed={60} pauseOnHover className='bg-black w-full'>
      <div className='w-full text-white px-12 py-1 space-x-36'>
        <span> The best jewlery shop!</span>
        <span> Free Shiping in the US</span>
        <span> 365 days risk-free guarantee. shop now</span>
      </div>
    </Marquee>
  )
}

export default AnnouncementBar;