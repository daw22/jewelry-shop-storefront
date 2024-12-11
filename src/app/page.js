import Button from '@mui/material/Button';
import { getProducts, getCollections, getCollectionProducts } from '@/actions/queryStore';
import RhombusPicture from '@/components/RhombusPicture';
import AnnouncemetBar from '@/components/AnnouncementBar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductsList from '@/components/ProductsList';
import Footer from '@/components/Footer';

export default async function Home() {
  const products = await getProducts();
  const collections = await getCollections();
  const homePageProducts = await getCollectionProducts('gid://shopify/Collection/484720116027');

  return (
    <div className='relative'>
      <AnnouncemetBar />
      <Navbar />
      <Hero products={homePageProducts.products}/>
      <div className="px-4">
        <ProductsList products={products} />
      </div>
      <Footer />
    </div>
  );
}
