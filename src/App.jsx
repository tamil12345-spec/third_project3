import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar";
import ProductsPage from "./Pages/ProductsPage";
import CartPage from "./Pages/CartPage";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductsPage/>} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      
    </CartProvider>
  );
};

export default App;