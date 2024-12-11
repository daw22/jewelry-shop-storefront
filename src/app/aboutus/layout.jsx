import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutUsLayout = ( { children }) => {
  return(
    <div className="h-screen flex flex-col">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default AboutUsLayout;