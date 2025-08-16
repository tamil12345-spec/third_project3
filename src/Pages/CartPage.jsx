import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart, totalPrice, discountedPrice } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="border p-4 flex justify-between items-center">
                <div>
                  <h2 className="font-bold">{item.title}</h2>
                  <p>${item.price} × {item.quantity} = ${(item.price * item.quantity).toFixed(2)}</p>
                  <div className="flex space-x-2 mt-2">
                    <button onClick={() => decreaseQty(item.id)} className="px-3 py-1 bg-gray-300 rounded">-</button>
                    <button onClick={() => increaseQty(item.id)} className="px-3 py-1 bg-gray-300 rounded">+</button>
                    <button onClick={() => removeFromCart(item.id)} className="px-3 py-1 bg-red-500 text-white rounded">Remove</button>
                  </div>
                </div>
                <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
              </div>
            ))}
          </div>

          <div className="mt-6 text-right">
            <p className="text-lg">Total: ${totalPrice.toFixed(2)}</p>
            <p className="text-green-600 font-bold">Discounted Price (10% off): ${discountedPrice.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
