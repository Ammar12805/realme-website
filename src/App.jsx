// import { Navbar } from "./Navbar.jsx"

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './Navbar'
import { Slider } from './Slider';
import { SmartPhones } from './SmartPhones';
import { Footer } from './footer';

const App = ()=>{

  return(
    <div>
     <Navbar/>
     <Slider/>
     <SmartPhones/>
     <Footer/>
    </div>
  )
}
export default App