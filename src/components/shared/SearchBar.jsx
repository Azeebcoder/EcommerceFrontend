import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GiCrossedBones } from "react-icons/gi";

const SearchBar = () => {
  const [searchedItem, setSearchedItem] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(searchedItem);
  };

  return (
    <>
      {/* Search Bar Container */}
      <div
        className={`bg-white absolute top-0 right-0 w-full overflow-hidden transition-all duration-300 ease-in-out py-3 ${
          searchOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <form
          action="search"
          className="w-full flex justify-center items-center py-4"
          onSubmit={handleSearchSubmit}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchedItem}
              className="text-sm p-2 pl-8 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              onChange={(e) => setSearchedItem(e.target.value)}
            />
            <FaSearch className="h-4 w-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button
            type="submit"
            className="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 cursor-pointer"
          >
            <FaSearch className="h-4 w-4" />
          </button>
        </form>
        <button
          onClick={() => setSearchOpen(!searchOpen)}
          className="absolute right-0 top-[50%] transform -translate-y-1/2 md:pr-20 pr-3 cursor-pointer"
        >
          <GiCrossedBones />
        </button>
      </div>

      {/* Search Icon Button */}
      <button
        onClick={() => setSearchOpen(!searchOpen)}
        className={`cursor-pointer transition-all duration-300 ${
          searchOpen ? "opacity-0" : "opacity-100"
        }`}
      >
        <FaSearch />
      </button>
    </>
  );
};

export default SearchBar;