import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import Home from "./Home";
import Login from "./login";
import Register from "./Register";
import Cart from "./Cart";

function App() {
const [cart, setCart] = useState([]);

const logout = () => {
localStorage.removeItem("token");
alert("Logged Out");
window.location.href = "/login";
};

return ( <BrowserRouter> <nav className="bg-gray-900 text-white p-4"> <div className="max-w-7xl mx-auto flex justify-between items-center"> <h1 className="text-2xl font-bold">
🛒 E-Commerce Store </h1>


      <div className="space-x-4">
        <Link
          to="/"
          className="hover:text-gray-300"
        >
          Home
        </Link>

        <Link
          to="/cart"
          className="hover:text-gray-300"
        >
          Cart ({cart.length})
        </Link>

        <Link
          to="/login"
          className="hover:text-gray-300"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="hover:text-gray-300"
        >
          Register
        </Link>

        <button
          onClick={logout}
          className="bg-red-600 px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  </nav>

  <Routes>
    <Route
      path="/"
      element={
        <Home
          cart={cart}
          setCart={setCart}
        />
      }
    />

    <Route
      path="/cart"
      element={
        <Cart
          cart={cart}
          setCart={setCart}
        />
      }
    />

    <Route
      path="/login"
      element={<Login />}
    />

    <Route
      path="/register"
      element={<Register />}
    />
  </Routes>
</BrowserRouter>


);
}

export default App;
