import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonals from './Components/Testimonals'
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";  


function App() {
  return (
    <div className="App"> 
    
      <Home />
      <About />
      <Work />
      <Testimonals />
      <Contact />
      <Footer /> 
      
     
    </div>
  );
}

export default App;