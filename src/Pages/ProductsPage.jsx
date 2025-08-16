import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const { cart, addToCart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => {
        const inCart = cart.some((item) => item.id === product.id);
        return (
          <div key={product.id} className="border rounded-lg p-4 shadow-lg flex flex-col">
            <img src={product.image} alt={product.title} className="h-40 object-contain mb-4" />
            <h2 className="font-bold text-lg">{product.title}</h2>
            <p className="text-gray-600 text-sm">{product.description.slice(0, 80)}...</p>
            <p className="font-bold mt-2">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className={`mt-4 px-4 py-2 rounded text-white ${inCart ? "bg-red-500" : "bg-blue-600"}`}
            >
              {inCart ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsPage;
