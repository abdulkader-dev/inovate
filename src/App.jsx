
import Apps from "./Component/Apps"
import Business from "./Component/Business"
import Contacet from "./Component/Contacet"
import Customer from "./Component/Customer"
import Footer from "./Component/Footer"
import Navbar from "./Component/Navbar"
import Platfrom from "./Component/Platfrom"
import Pricing from "./Component/Pricing"
import Testimonial from "./Component/Testimonial"
import Work from "./Component/Work"





function App() {


  return (
    <div className="overflow-x-hidden">
    <Navbar/>
    <Platfrom/>
    <Business/>
    <Apps/>
     <Work/>
    <Customer/>
    <Pricing/>
    <Contacet/>
    <Testimonial/>
    <Footer/>
   
    </div>
  )
}

export default App
