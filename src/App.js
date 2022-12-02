import "./App.css";
import "./Components/components-styling.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Product from "./Components/Product";

function App() {
  return (
    <BrowserRouter>
      <div id="website-block">
        <Navbar />
        {/* Routing pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
