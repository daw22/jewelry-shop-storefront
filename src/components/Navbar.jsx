'use client'
import {  
  ShoppingCartOutlined, 
  MenuOutlined
} from '@mui/icons-material';
import {
  Menu,
  MenuItem,
  Badge
} from '@mui/material'
import Link from 'next/link';
import { useState, useEffect, useContext } from 'react';
import NavDrawer from './NavDrawer';
import { getCollections } from '@/actions/queryStore';
import { ctx } from '@/state/appContext';

function Navbar() {
  const appCtx = useContext(ctx);
  const [collections, setCollections] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const openDrawer = () => {
    setIsDrawerOpen(true);
    document.body.classList.add('overflow-hidden');
    document.getElementById('drawerCloser').classList.remove('hidden');
  }
  useEffect(()=> {
    const allCollections = async () => {
      const collections = await getCollections();
      setCollections(collections);
    }
    allCollections();
  },[])
  return (
    <div className='flex text-black items-center justify-between px-4 py-2 bg-slate-200'>
      <NavDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}/>
      <div
      id='drawerCloser'
      className='absolute hidden top-0 bottom-0 right-0 sm:left-1/2 md:left-13 bg-transparent z-40' 
      onClick={(e)=> {
        setIsDrawerOpen(false);
        document.body.classList.remove('overflow-hidden');
        e.currentTarget.classList.add('hidden');
      }}
      />
      <MenuOutlined className='hidden hover:text-violet-400 cursor-pointer' onClick={openDrawer}/>
      <Link href="/">
        <div className='text-3xl text-violet-600 font-raleway font-semibold'>Deluwe</div>
      </Link>
      <ul id='navList' className='hidden sm:flex items-center justify-center w-3/5 space-x-3 md:space-x-5 *:cursor-pointer'>
        <Link href="/products">
          <li className='hover:text-violet-600'>Products</li>
        </Link>
        <li className='hover:text-violet-600' onClick={handleClick}>Collections</li>
        <Link href='/collections?id=gid://shopify/Collection/484727882043'>
          <li className='hover:text-violet-600'>New Comers</li>
        </Link>
        <Link href='/aboutus'>
          <li className='hover:text-violet-600'>About us</li>
        </Link>
      </ul>
      <div className='flex items-center space-x-3'>
        <Link href="/cart">
          <Badge badgeContent={appCtx.cartItems.length} color='error'>
            <ShoppingCartOutlined className='cursor-pointer hover:text-violet-600 hover:scale-110'/>
          </Badge>
        </Link>
      </div>
      {/* drop down menu */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {collections.map(collection => (
          collection.title !== 'HomePage' && 
          <Link key={collection.id} href={`/collections?id=${collection.id}`}>
            <MenuItem onClick={handleClose}>{collection.title}</MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  )
}

export default Navbar;