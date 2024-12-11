import Image from 'next/image';

function page() {
  return (
    <div className='flex flex-col sm:flex-row justify-center sm:justify-between 
    items-center flex-1 w-full ml-2 sm:ml-12 my-12 text-white space-x-6'>
      <div className='w-1/2'>
        <h3 className='w-full text-center sm:text-left text-4xl font-raleway mb-6'>Our Story</h3>
        <p className='text-center sm:text-left max-w-1/2 mb-6 sm:mb-0'>As Australia’s Premier Online and Australasian Award Winning Jewellery Retailer, My Jewellery Shop is far more than a store, it is an experience. Enjoy shopping in style at our beautiful boutique store on the Gold Coast, or shop with us online 24/7.</p>
      </div>
      <div className='h-2/3 sm:ml-auto'>
        <Image src='/cover.jpg' alt='about us' width={500} height={300} />
      </div>
    </div>
  )
}

export default page;