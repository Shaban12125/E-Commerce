import { useState } from "react";
import axios from "axios";

function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const login = async () => {
try {
const res =axios.post(
  "https://e-commerce-1-l5d1.onrender.com/api/auth/login",
  {
    email,
    password,
  }
);


  localStorage.setItem(
    "token",
    res.data.token
  );

  alert("Login Successful");

window.location.href = "/";

  alert("Login Successful");
} catch (err) {
  alert("Login Failed");
  console.log(err);
}


};

return ( <div className="min-h-screen flex justify-center items-center bg-gray-100"> <div className="bg-white p-8 rounded shadow w-96">

    <h1 className="text-3xl font-bold mb-5">
      Login
    </h1>

    <input
      type="email"
      placeholder="Email"
      className="border p-2 w-full mb-3"
      onChange={(e) => setEmail(e.target.value)}
    />

    <input
      type="password"
      placeholder="Password"
      className="border p-2 w-full mb-3"
      onChange={(e) => setPassword(e.target.value)}
    />

    <button
      onClick={login}
      className="bg-blue-600 text-white px-4 py-2 rounded w-full"
    >
      Login
    </button>

  </div>
</div>


);
}

export default Login;
