import axios from "axios";

function Cart({ cart, setCart }) {
const total = cart.reduce(
(sum, item) => sum + item.price,
0
);

const clearCart = () => {
setCart([]);
alert("Cart Emptied Successfully");
};

const placeOrder = async () => {
if (cart.length === 0) {
alert("Cart is empty");
return;
}


try {
  const order = {
    userId: "DemoUser",
    products: cart,
    totalAmount: total,
  };

  await axios.post(
    "http://localhost:5000/api/orders",
    order
  );

  alert("Order Placed Successfully!");

  setCart([]);
} catch (err) {
  console.error(err);
  alert("Failed to Place Order");
}


};

return ( <div className="min-h-screen bg-gray-100 p-8"> <h1 className="text-4xl font-bold mb-6">
🛒 Shopping Cart </h1>


  {cart.length === 0 ? (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl">
        Your cart is empty
      </h2>
    </div>
  ) : (
    <>
      {cart.map((item, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded shadow mb-4 flex justify-between items-center"
        >
          <div>
            <h2 className="font-bold text-lg">
              {item.name}
            </h2>

            <p className="text-gray-500">
              {item.description}
            </p>
          </div>

          <div className="text-green-600 font-bold">
            ₹{item.price}
          </div>
        </div>
      ))}

      <div className="bg-white p-6 rounded shadow mt-6">
        <h2 className="text-2xl font-bold mb-4">
          Total: ₹{total}
        </h2>

        <div className="flex gap-4">
          <button
            onClick={placeOrder}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
          >
            Place Order
          </button>

          <button
            onClick={clearCart}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded"
          >
            Empty Cart
          </button>
        </div>
      </div>
    </>
  )}
</div>


);
}

export default Cart;
