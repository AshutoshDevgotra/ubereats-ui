import React from 'react'


const LoginButton = ({ onLogin }) => {
  return (
    <button onClick={onLogin} className="bg-white items-center justify-center text-black px-4 py-2 rounded-full hover:bg-gray-800">
      Login
    </button>
  )
}

export default LoginButton