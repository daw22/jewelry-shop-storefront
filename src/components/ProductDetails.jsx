'use client'
import QuantityPicker from "./QuantityPicker";
import AddToCartBtn from "./AddToCartBtn";
import ImageViewer from "./ImageViewer";
import { useState } from "react";

function ProductDetails({ product }) {
  const [qty, setQty] = useState(1);
  return (
    <div id='productDetails' className='sm:space-x-5 sm:flex sm:justify-between items-center'>
        <div className='h-full min-w-1/3'>
          <ImageViewer imagesList={product.images} />
        </div>
        <div className='sm:w-2/3 flex flex-col items-center space-y-6'>
          <h3 className='text-center text-2xl text-blue-400'>{product.title}</h3>
          <div className='flex-1'>
            <p className='text-white text-left overflow-y-scroll'>{product.description}</p>
          </div>
          <QuantityPicker  price={product.variants[0].price.amount} qty={qty} setQty={setQty}/>
          <AddToCartBtn product={product} quantity={qty}/>
        </div>
      </div>
  )
}

export default ProductDetails;