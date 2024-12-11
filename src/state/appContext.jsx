'use client'
import { createContext, useState, useEffect } from 'react';

export const ctx = createContext();

const AppContext = ({ children }) => {
  // let storedCartItems = null;
  // if(storedCartItems){
  //   storedCartItems = JSON.parse(storedCartItems);
  // }
  const [checkoutId, setCheckoutId] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(()=>{
    const savedCartItems = localStorage.getItem('cartItems');
    if(savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  },[])
  return (
    <ctx.Provider value={{checkoutId, setCheckoutId, cartItems, setCartItems}}>
      {children}
    </ctx.Provider>
  )
}

export default AppContext;