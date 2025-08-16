import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">Products</Link>
      <Link to="/cart" className="relative">
        🛒 Cart
        {cart.length > 0 && (
          <span className="bg-red-500 text-white rounded-full px-2 ml-2">
            {cart.length}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
