import React from 'react'
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/login")} className="bg-white items-center justify-center text-black px-4 py-2 rounded-full hover:bg-gray-800">
      Login
    </button>
  )
}

export default LoginButton