import react from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";
import Contact from "./Components/Contact";



const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Services />
      <Contact />
    </div>
  )
}

export default App
