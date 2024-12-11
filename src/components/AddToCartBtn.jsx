'use client'
import { ShoppingCartOutlined} from '@mui/icons-material';
import { ctx } from '@/state/appContext';
import { useContext } from 'react';

function AddToCartBtn({ product, quantity }) {
  const appCtx = useContext(ctx);

  const onAddToCart = async () =>{
    // add line items to cart if not already in cart
    const cartItems = appCtx.cartItems;
    const isInCart = cartItems.find((item) => item.id === product.id);
    if(!isInCart){
      localStorage.setItem("cartItems", JSON.stringify([...appCtx.cartItems, {...product, qty: quantity}]));
      appCtx.setCartItems(prev => [...prev, {...product, qty: quantity}]);
    } else {
      alert('Product already in cart!');
    }
  }

  return (
    <div
    onClick={onAddToCart} 
    className='text-white w-full py-2 text-center bg-blue-400 cursor-pointer hover:text-black'>
      <ShoppingCartOutlined />
      <span>Add To Cart</span>
    </div>
  )
}

export default AddToCartBtn