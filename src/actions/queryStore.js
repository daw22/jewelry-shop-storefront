'use server'
import Client from 'shopify-buy';

const shopifyClient = Client.buildClient({
  domain: process.env.API_URL,
  storefrontAccessToken: process.env.STORE_FRONT_API_ACCESS_TOKEN
})

export const getProducts = async ()=> {
  const products = await shopifyClient.product.fetchAll();
  return products;
}

export const getCollections = async () => {
  const collections = await shopifyClient.collection.fetchAll();
  console.log("all colls:", collections);
  return JSON.parse(JSON.stringify(collections));
}

export const getCollectionProducts = async (id)=>{
  const products = await shopifyClient.collection.fetchWithProducts(id, {productsList: 5});
  console.log("coll-prod:", products);
  return JSON.parse(JSON.stringify(products));
}

export const createCheckout = async () => {
  const checkout = await shopifyClient.checkout.create();
  console.log("checkout:", checkout);
  return JSON.parse(JSON.stringify(checkout)).id;
}

export const addLineItems = async (checkoutId, lineItems) => {
  const updatedCheckout = await shopifyClient.checkout.addLineItems(checkoutId, lineItems);
  console.log("updated checkout:", JSON.parse(JSON.stringify(updatedCheckout)));
  return JSON.parse(JSON.stringify(updatedCheckout));
}