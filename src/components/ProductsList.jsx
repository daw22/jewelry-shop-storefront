import ProductCard from './ProductCard';
import Link from 'next/link';

function ProductsList({ products }) {
  return (
    <div className='w-1/2 sm:w-full mx-auto backdrop:px-5 my-4 grid 
    grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-4 '>
      { products.map(product => (
        <Link key={product.id} href={{pathname: '/products', query: {id: product.id}}}>
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  )
}

export default ProductsList;