import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Astros from './Components/astros/Astros';
import './App.css';


function App() {

    const links = [
      { id: 1, href: "/", text: "Home" },
      { id: 2, href: "/astros", text: "Astros" },
      { id: 3, href: "/apod", text: "Astronomy Picture of the Day (APOD)" }
    ];

  return ( 
  <>
  <Navbar links={links} />
  <Routes>
    <Route path="/" element={<h1>Space App</h1>} />
    <Route path="/astros" element={<Astros />} />
  </Routes>
  </>
  );
}

export default App
