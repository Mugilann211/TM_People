import React from "react";


const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search employees..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full mb-4 p-2 border border-gray-300 rounded-md"
    />
  );
};


export default SearchBar;