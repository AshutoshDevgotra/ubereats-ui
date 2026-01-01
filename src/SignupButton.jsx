import React from 'react'

const SignupButton = ({onSignup}) => {
  return (
    <button onClick={onSignup} className="bg-black items-center justify-center text-white px-4 py-2 rounded-full hover:bg-gray-800">
      Signup
    </button>
  )
}

export default SignupButton