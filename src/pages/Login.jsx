import React from 'react'

const Login = () => {
  return (
    <div>
        <input type="text" placeholder="Username" className="border p-2 m-2 rounded"/>
        <input type="password" placeholder="Password" className="border p-2 m-2 rounded"/>
        <button className="bg-blue-500 text-white px-4 py-2 rounded m-2">Login</button>
        </div>
  )
}

export default Login