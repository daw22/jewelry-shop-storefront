import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CartLayout = ( { children }) => {
  return(
    <div className="h-screen flex flex-col">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default CartLayout;