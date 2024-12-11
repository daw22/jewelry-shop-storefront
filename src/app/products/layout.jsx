import Navbar from "@/components/Navbar";

const ProductsLayout = ( { children }) => {
  return(
    <div className="h-screen flex flex-col">
      <Navbar />
      {children}
    </div>
  )
}

export default ProductsLayout;