'use client';
import { KeyboardArrowDownRounded, KeyboardArrowUpRounded } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

function VerticalSlider({ images }) {
  const sliderRef = useRef(null);
  const onSliderUp = () => {
    const slider = sliderRef.current;
    if (!slider) return;
  
    if (slider.scrollTop <= 0) {
      // Jump to the bottom when at the top
      slider.scrollTop = slider.scrollHeight;
    } else {
      slider.scrollTop -= 53;
    }
  };
  
  const onSliderDown = () => {
    const slider = sliderRef.current;
    if (!slider) return;
  
    if (slider.scrollTop + slider.clientHeight >= slider.scrollHeight) {
      // Jump to the top when at the bottom
      slider.scrollTop = 0;
    } else {
      slider.scrollTop += 53;
    }
  };
  

  return (
    <div id='verticalSlider' className="self-start sm:self-center h-96 w-12 py-2 flex flex-col items-center justify-between">
      {/* Scroll Up Button */}
      <KeyboardArrowUpRounded
        className="h-12 w-12 cursor-pointer text-gray-600 hover:text-black"
        onClick={onSliderUp}
      />

      {/* Scrollable Container */}
      <div
        id="slider"
        ref={sliderRef}
        className="h-full overflow-y-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
      >
        {images.map((imageObj, index) => (
          <Link key={index} href={{ pathname: "/products", query: {id: imageObj.id}}}>
            <div className="w-12 h-12">
              <Image src={imageObj.image} alt={`Product thumbnail ${index + 1}`} width={50} height={50} />
            </div>
          </Link>
        ))}
      </div>

      {/* Scroll Down Button */}
      <KeyboardArrowDownRounded
        className="h-12 w-12 cursor-pointer text-gray-600 hover:text-black"
        onClick={onSliderDown}
      />
    </div>
  );
}

export default VerticalSlider;