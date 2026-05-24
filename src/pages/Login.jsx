import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { API_BASE_URL } from "../config.js";


const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const login = useAuthStore(state => state.login);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) return alert(data);

    // store session
    login(data.user, data.token);     // ← THIS is the correct call
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl w-96 shadow">
        <h1 className="text-2xl font-bold mb-4">Login</h1>

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="border p-2 mb-3 w-full rounded text-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="border p-2 mb-2 w-full rounded text-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
        />

        <div className="flex justify-between items-center mb-5">
          <Link to="/signup" className="text-xs text-gray-500 hover:text-black transition-colors">
            Create an account
          </Link>
          <Link to="/forgot-password" className="text-xs text-gray-500 hover:text-black transition-colors font-medium">
            Forgot Password?
          </Link>
        </div>

        <button
          onClick={handleLogin}
          className="bg-black text-white w-full py-2 rounded font-medium hover:bg-neutral-800 transition-colors duration-200"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
