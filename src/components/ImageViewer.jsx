'use client'
import { useState, useEffect } from 'react';
import { KeyboardArrowLeftRounded, KeyboardArrowRightRounded} from '@mui/icons-material'
import Image from 'next/image';

function ImageViewer({ imagesList }) {
  const [imageIdx, setImageIdx] = useState(0);
  const onLeftArrowClicked = () => {
    if(imageIdx > 0) setImageIdx(prev => prev - 1);
  }
  const onRightArrowClicked = () => {
    if (imageIdx < imagesList.length - 1) setImageIdx(prev => prev + 1);
  }
  useEffect(()=> {setImageIdx(0)},[imagesList])
  return (
    <div className='relative w-full'>
      <KeyboardArrowLeftRounded 
      className={`absolute w-12 h-12 left-2 top-1/2 cursor-pointer hover:opacity-50 
        ${imageIdx === 0 && 'hidden'}`}
      onClick={onLeftArrowClicked}
      />
      <Image 
      src={imagesList[imageIdx] ? imagesList[imageIdx].src : imagesList[0].src} 
      alt="product image" width={500} height={300} />
      <KeyboardArrowRightRounded 
      className={`absolute w-12 h-12 right-2 top-1/2 cursor-pointer hover:opacity-50
        ${imageIdx === imagesList.length - 1 && 'hidden'}`}
      onClick={onRightArrowClicked}
      />
    </div>
  )
}

export default ImageViewer;