import { useState } from "react";
import axios from "axios";

function Register() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const register = async () => {
try {
const res = axios.post(
  "https://e-commerce-production-8158.up.railway.app/api/auth/register",
  {
    name,
    email,
    password,
  }
);


  alert(
    res.data.message || "Registration Successful"
  );

  setName("");
  setEmail("");
  setPassword("");

  window.location.href = "/login";
} catch (err) {
  console.error("Registration Error:", err);

  alert(
    err.response?.data?.message ||
    "Registration Failed"
  );
}


};

return ( <div className="min-h-screen flex items-center justify-center bg-gray-100"> <div className="bg-white p-8 rounded-lg shadow-lg w-96"> <h1 className="text-3xl font-bold mb-6 text-center">
Register </h1>

    <input
      type="text"
      placeholder="Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="border p-2 w-full mb-4 rounded"
    />

    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="border p-2 w-full mb-4 rounded"
    />

    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="border p-2 w-full mb-4 rounded"
    />

    <button
      onClick={register}
      className="bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded"
    >
      Register
    </button>
  </div>
</div>


);
}

export default Register;
