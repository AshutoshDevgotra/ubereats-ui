import React from 'react'
import { FaSearch } from "react-icons/fa";
const SearchBar = () => {
  return (
    <div className="mx-auto flex items-center w-full max-w-3xl bg-gray-100 px-3  rounded-full">

    {/* search icon */}
    <FaSearch />
            <input className=" text-black  w-full px-2  py-2 rounded-full border-none bg-transparent focus:outline-none"
              placeholder="Search Uber Eats"
    
            />
    </div>
  )
}

export default SearchBar        