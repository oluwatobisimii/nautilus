import './App.css';
import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './views/Home';
import CaseStudies from './views/CaseStudies';
import Products from './views/Products';
import Footer from './components/Footer';
import About from './views/About';

function App() {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/case-studies" element={<CaseStudies />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/about" element={<About />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
