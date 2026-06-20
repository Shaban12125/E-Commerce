import { useEffect,useState } from "react";
import axios from "axios";

function App() {

 const [products,setProducts] =
 useState([]);

 useEffect(()=>{

  axios
   .get("http://localhost:5000/api/products")
   .then(res=>{
     setProducts(res.data);
   });

 },[]);

 return (

  <div className="p-10">

   <h1 className="text-3xl font-bold">
     E-Commerce Store
   </h1>

   <div className="grid grid-cols-3 gap-4 mt-6">

    {products.map(product=>(
      <div
       key={product._id}
       className="border p-4 rounded"
      >

       <img
        src={product.image}
        alt=""
        className="h-40 w-full object-cover"
       />

       <h2 className="font-bold">
         {product.name}
       </h2>

       <p>
         ₹{product.price}
       </p>

       <button
        className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
       >
        Add To Cart
       </button>

      </div>
    ))}

   </div>

  </div>

 );
}

export default App;