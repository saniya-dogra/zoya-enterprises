import { useCart } from "../services/cart";

function Cart() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return <p className="p-10 text-center">Your cart is empty</p>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between bg-white p-4 rounded shadow mb-4"
        >
          <div className="flex items-center gap-4">
            <img src={item.image} alt="" className="h-20" />
            <div>
              <p className="font-semibold">{item.name}</p>
              <p>₹{item.price} × {item.qty}</p>
            </div>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-600"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
