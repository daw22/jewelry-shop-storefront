'use client'
import { getCollections } from '@/actions/queryStore';
import { Close } from '@mui/icons-material';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function NavDrawer({ isDrawerOpen, setIsDrawerOpen}) {
  const [collections, setCollections] = useState([]);
  const onLinkClicked = () => {
    setIsDrawerOpen(false);
    document.body.classList.remove('overflow-hidden');
  }
  useEffect(()=>{
    const getAllCollections = async () => {
      const collections = await getCollections();
      setCollections(collections);
    }
    getAllCollections();
  },[])

  return (
    <div className={`absolute top-0 w-full sm:w-1/2 md:w-1/3 h-full bg-[#0a0a0a]
       text-white z-50 transition-all duration-500 ease-in-out 
       ${isDrawerOpen ? 'left-0' : '-left-full'}`}>
      <Close 
      className="w-12 h-12 absolute top-4 right-4 cursor-pointer hover:scale-110"
      onClick={()=> {
        setIsDrawerOpen(false);
        document.body.classList.remove('overflow-hidden');
      }} 
      />
      <div className="flex flex-col items-center mt-32 px-4 text-white">
        <div className="group text-xl cursor-pointer hover:text-pink-400 text-center my-3">
          <Link href='/products' onClick={onLinkClicked}>
            <span>All Products</span>
          </Link>
          <div className='bg-blue-400 h-1 w-0 transition-all duration-500 delay-150 
          ease-in-out group-hover:w-full mx-auto'></div>
        </div>
        <div className="text-slate-400">
          <div className="text-xl underline text-white">
            Our Collections
          </div>
          {collections.map(collection => (
            (collection.title !== 'HomePage' &&
              <div key={collection.id} className="group mx-auto w-fit text-xl cursor-pointer hover:text-blue-400 text-center my-3">
                <div>
                  <Link href={`/collections?id=${collection.id}`} onClick={onLinkClicked}>
                    <span>{collection.title}</span>
                  </Link>
                <div className='bg-pink-400 h-1 w-0 transition-all duration-500 delay-150 
                ease-in-out group-hover:w-full mx-auto'></div>
                </div>
              </div>
            )
          ))}
        </div>
        <div className="group text-xl cursor-pointer hover:text-pink-400 text-center my-3">
          <Link href='/aboutus'>
            <span>About Us</span>
          </Link>
          <div className='bg-blue-400 h-1 w-0 transition-all duration-500 delay-150 
          ease-in-out group-hover:w-full mx-auto'></div>
        </div>
      </div>
    </div>
  )
}

export default NavDrawer;