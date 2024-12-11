function Footer() {
  return (
    <div className='w-full px-12 py-6 flex flex-col sm:flex-row justify-between
     bg-black text-white sm:space-x-3'>
      <div className="flex flex-col w-1/2">
        This is a test shopify storefront built using a test a data and js-shopify-buy sdk
      </div>
      <div>
        {'Developer: Dawit yifru ->'} 
        <a className='underline text-blue-400' href="https://dawit.site">My portfolio</a></div>
    </div>
  )
}

export default Footer;