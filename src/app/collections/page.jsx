import { getCollectionProducts } from "@/actions/queryStore";
import ProductsList from "@/components/ProductsList";

async function page({ searchParams }) {
  const { id } = await searchParams;
  const collProducts = await getCollectionProducts(id);

  return (
    <div className='flex flex-col w-4/5 mx-auto my-3 flex-1'>
      <h3 className="text-2xl">
        {collProducts.title}{collProducts.title === 'Men' || collProducts.title === 'Women' && "'s collection"} 
      </h3>
      <p className="text-sm mb-3">{collProducts.description}</p>
      <ProductsList products={collProducts.products} />
    </div>
  )
}

export default page;