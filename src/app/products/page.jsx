import { getProducts } from '@/actions/queryStore';
import VerticalSlider from '@/components/VerticalSlider';
import ProductDetails from '@/components/ProductDetails';

async function page({ searchParams }) {
  const products = await getProducts();
  const {id} = await searchParams;
  
  const productImages = products.map(product=> 
    ({id: product.id, image: product.images[0].src}));
  
  const selectedProduct = id ? 
    products.find(product => product.id === id)
    : products[0];

  return (
    <div className='mx-auto w-full flex-1 md:w-4/5 px-4 my-4 
    items-center flex space-x-3 '>
      <VerticalSlider images={productImages} />
      <ProductDetails product={JSON.parse(JSON.stringify(selectedProduct))} />
    </div>
  )
}

export default page;