import React from 'react';
import { FaSearch } from "react-icons/fa";
import { useSearchStore } from "./store/useSearchStore.js";

const SearchBar = () => {
  const { query, setQuery } = useSearchStore();

  return (
    <div className="mx-auto flex items-center w-full max-w-3xl bg-gray-100 px-3 rounded-full focus-within:ring-1 focus-within:ring-black">
      {/* search icon */}
      <FaSearch className="text-gray-500" />
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="text-black w-full px-2 py-2 rounded-full border-none bg-transparent focus:outline-none text-sm"
        placeholder="Search Uber Eats"
      />
    </div>
  );
};

export default SearchBar;