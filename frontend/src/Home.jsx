

import { useEffect, useState } from "react";
import axios from "axios";

function Home({ cart, setCart }) {
const [products, setProducts] = useState([]);

useEffect(() => {
  const token =
    localStorage.getItem("token");

  if (!token) {
    window.location.href = "/login";
  }
}, []);

useEffect(() => {
axios
.get("https://e-commerce-production-8158.up.railway.app/api/products")
.then((res) => {
setProducts(res.data);
})
.catch((err) => {
console.log(err);
});
}, []);

const addToCart = (product) => {
setCart([...cart, product]);
};

return ( <div className="min-h-screen bg-gray-100 p-8"> <h1 className="text-4xl font-bold mb-6">
Products </h1>


  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {products.map((product) => (
      <div
        key={product._id}
        className="bg-white p-4 rounded shadow"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded"
        />

        <h2 className="text-xl font-bold mt-3">
          {product.name}
        </h2>

        <p>{product.description}</p>

        <p className="text-green-600 font-bold">
          ₹{product.price}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white px-4 py-2 rounded mt-3"
        >
          Add To Cart
        </button>
      </div>
    ))}
  </div>
</div>


);
}

export default Home;
