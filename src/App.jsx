import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Astros from './Components/astros/Astros';
import Apod from './Components/apod/Apod'; 
import About from './Components/about/About';
import './App.css';


function App() {

    const links = [
      { id: 1, href: "/", text: "Home" },
      { id: 2, href: "/astros", text: "Astros" },
      { id: 3, href: "/apod", text: "Astronomy Picture of the Day (APOD)" },
      { id: 4, href:"/about", text: "About" }
    ];

  return ( 
  <>
  <Navbar links={links} />
  <Routes>
    <Route path="/" element={<h1>Space App</h1>} />
    <Route path="/astros" element={<Astros />} />
    <Route path="/apod" element={<Apod />} />
    <Route path="/about" element={<About />} />
  </Routes>
  </>
  );
}

export default App
