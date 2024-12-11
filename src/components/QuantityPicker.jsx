'use client'
import { useContext, useEffect } from 'react'
import { Add, Remove} from '@mui/icons-material';
import { ctx } from '@/state/appContext';

function QuantityPicker({ price, qty, setQty }) {
  const appCtx = useContext(ctx);
  const addQty = ()=> {
    setQty(prev=> prev + 1 );
  }
  const subtractQty = () => {
    if(qty > 1){
      setQty(prev => prev -1);
    }
  }
  useEffect(()=>{setQty(1)},[price])
  return (
    <div className="w-full flex justify-between items-center">
      <div className='flex space-x-3'>
        <Remove 
        className='border-2 rounded-full cursor-pointer hover:text-red-400'
        onClick={subtractQty}
        />
        <h3 className='text-red-400 mx-2'>{qty}</h3>
        <Add 
        className='border-2 rounded-full cursor-pointer hover:text-red-400'
        onClick={addQty}
        />
      </div>
      <h3 className='text-white'>${price * qty}</h3>
    </div>
  )
}

export default QuantityPicker;