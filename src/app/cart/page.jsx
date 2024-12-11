'use client'
import { useContext, useEffect } from 'react';
import { ctx } from '@/state/appContext';
import { useRouter } from 'next/navigation';
import ImageViewer from '@/components/ImageViewer';
import { Divider, Button } from '@mui/material';
import { Remove, Add } from '@mui/icons-material';
import { createCheckout, addLineItems } from '@/actions/queryStore';

const page = () => {
  const appCtx = useContext(ctx);
  const router = useRouter();

  const addQty = (id) => {
    let cartCpy = appCtx.cartItems.map(item=> 
      item.id === id ? {...item, qty: item.qty + 1} : item
    )
    appCtx.setCartItems(cartCpy);
    //also save to localstorage to survive page reloads
    localStorage.setItem("cartItems", JSON.stringify(cartCpy));
  }

  const subtractQty = (id) => {
    let cartCpy = appCtx.cartItems.map(item=>
      item.id === id ? item.qty > 1 ? {...item, qty: item.qty - 1} : item : item
    )
    appCtx.setCartItems(cartCpy);
    localStorage.setItem("cartItems", JSON.stringify(cartCpy));
  }

  const removeFromCart = async (id) =>{
    const cartCpy = appCtx.cartItems.filter(item=> item.id !== id);
    appCtx.setCartItems(cartCpy);
    localStorage.setItem("cartItems", JSON.stringify(cartCpy));
  }

  // //load cart items from local storage if any
  // useEffect(()=>{
  //   let cartItems = localStorage.getItem("cartItems");
  //   if(cartItems){
  //     cartItems = JSON.parse(cartItems);
  //     appCtx.setCartItems(cartItems);
  //   }
  // },[])

  const checkOut = async () => {
    let checkOutId = appCtx.checkoutId;
    if(!checkOutId) {
      checkOutId = await createCheckout();
      console.log("new checkout id:", checkOutId);
      appCtx.setCheckoutId(checkOutId);
    }
    //create line items to add
    const lineItems = appCtx.cartItems.map(item=>  ({ variantId: item.variants[0].id, quantity: item.qty}));
    console.log("lineItems:" ,lineItems, checkOutId);
    const checkOut = await addLineItems(checkOutId, lineItems);
    console.log("url:",checkOut.webUrl);
    router.push(checkOut.webUrl);
  }

  return (
    <div className='w-full text-white sm:w-4/5 md:w-2/3 my-6 mx-auto flex flex-col flex-1'>
      <h3 className='w-full text-center text-xl sm:text-2xl mb-4'>Cart{`(${appCtx.cartItems.length})`}</h3>
      { appCtx.cartItems.map( (item, index) => (
        <div key={item.id}>
          <div 
          className="relative flex justify-around my-4"
          >
            <div className='h-full w-1/3'>
              <ImageViewer imagesList={item.images}/>
            </div>
            <div className='flex flex-col h-full justify-between w-1/2 mt-auto space-y-4'>
              <h3 className='w-full text-xl mt-4'>{item.title}</h3>
              <div className="w-full flex justify-between items-center">
                <div className='flex space-x-3'>
                  <Remove 
                  className='border-2 rounded-full cursor-pointer hover:text-red-400'
                  onClick={()=>subtractQty(item.id)}
                  />
                  <h3 className='text-red-400 mx-2'>{item.qty}</h3>
                  <Add 
                  className='border-2 rounded-full cursor-pointer hover:text-red-400'
                  onClick={()=>addQty(item.id)}
                  />
                  </div>
                  <h3 className='text-white'>${item.variants[0].price.amount * item.qty}</h3>
                </div>
              <Button onClick={()=>removeFromCart(item.id)} variant="outlined" color="error" className='self-end'>Delete Item</Button>
            </div>
          </div>
          {index < appCtx.cartItems.length - 1 && 
            <Divider sx={{color: 'white'}}/>}
        </div>
      ))}
      {appCtx.cartItems.length > 0 && 
        <Button 
        onClick={checkOut}
        variant='contained' 
        className='w-1/2 mx-auto my-4'>
          Check out
        </Button>
       }
    </div>
  )
}

export default page;