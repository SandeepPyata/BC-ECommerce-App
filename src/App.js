import "./App.css";
import "./Components/components-styling.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Product from "./Components/Product";

function App() {
  return (
    <div id="website-block">
      <Navbar />
      {/* Routing pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products">
          <Route path=":id" element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
