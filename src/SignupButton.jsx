import React from 'react'
import { Navigate } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const SignupButton = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/signup") } className="bg-black items-center justify-center text-white px-4 py-2 rounded-full hover:bg-gray-800">
      Signup
    </button>
  )
}

export default SignupButton