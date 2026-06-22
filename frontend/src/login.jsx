import { useState } from "react";
import axios from "axios";

function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const login = async () => {
try {
const res = await axios.post(
"https://e-commerce-production-8158.up.railway.app/api/auth/login",
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
} catch (err) {
  console.log(err);

  alert(
    err.response?.data?.message ||
    "Login Failed"
  );
}


};

return ( <div className="min-h-screen flex items-center justify-center bg-gray-100"> <div className="bg-white p-8 rounded-lg shadow-lg w-96"> <h1 className="text-3xl font-bold mb-6 text-center">
Login </h1>


    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) =>
        setEmail(e.target.value)
      }
      className="border p-2 w-full mb-4 rounded"
    />

    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) =>
        setPassword(e.target.value)
      }
      className="border p-2 w-full mb-4 rounded"
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
