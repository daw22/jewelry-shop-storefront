import { Paper } from '@mui/material'
import Image from 'next/image';

function ProductCard({ product }) {
  return (
    <Paper className='group cursor-pointer transition-all scale-100 hover:scale-105 duration-500 
    ease-in-out min-w-52 max-w-72'>
      <div className='w-full min-h-64'>
        <Image src={product.images[0].src} alt={product.title} width={500} height={100}/>
        <div className='py-2 px-3 flex items-center justify-between'>
          <h4 className='text-slate-400 text-2x1 max-w-36'>{product.title}</h4>
          <h5 className='text-black text-sm'>${product.variants[0].price.amount || "250"}</h5>
        </div>
      </div>
      <div className='bg-blue-400 h-1 w-0 transition-all duration-500 delay-150 ease-in-out group-hover:w-full'></div>
    </Paper>
  )
}

export default ProductCard;