import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './views/Home';
import About from './views/About';
import Products from './views/Products';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route exact path="/about" element={<About />}>
        </Route>
        <Route exact path="/products" element={<Products />}>
        </Route>
      </Routes>
    </>
  );
}

export default App;
