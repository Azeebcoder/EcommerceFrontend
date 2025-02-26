import React, { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { BsHandbag } from "react-icons/bs";
import SearchBar from "../shared/SearchBar";
import CartSidebar from "../cart/CartSidebar";
import MobileSideBar from "./MobileSideBar";

const NavBar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <>
      <nav className="border-b-2 border-gray-200">
        <div className="container mx-auto flex justify-between items-center py-4 px-3">
          <div className="font-bold text-xl">Sumyy</div>
          <ul className="md:flex gap-6 hidden text-sm font-medium text-gray-700">
            <li className="hover:text-blue-500 transition-colors duration-200 cursor-pointer">
              Men
            </li>
            <li className="hover:text-blue-500 transition-colors duration-200 cursor-pointer">
              Women
            </li>
            <li className="hover:text-blue-500 transition-colors duration-200 cursor-pointer">
              Kids
            </li>
            <li className="hover:text-blue-500 transition-colors duration-200 cursor-pointer">
              Fashion
            </li>
          </ul>
          <ul className="flex gap-5 text-xl ">
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className=" relative cursor-pointer"
            >
              <BsHandbag />
              <span className="bg-red-500 text-sm rounded-full absolute -top-1 -right-2 w-4 h-4 flex items-center justify-center">
                4
              </span>
            </button>
            <div>
              <SearchBar />
            </div>
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="md:hidden cursor-pointer flex justify-center items-center"
            >
              <RiMenu3Line />
            </button>
          </ul>
        </div>
      </nav>
      <div
        className={`fixed top-0 right-0 w-96 h-screen transition-transform duration-500 ease-in-out bg-white shadow-2xl p-6 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <CartSidebar setOpen={setIsCartOpen} />
      </div>

      <div
        className={`fixed top-0 left-0 w-64 h-screen transition-transform duration-500 ease-in-out bg-white shadow-2xl p-6 md:hidden ${
          mobileNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <MobileSideBar setOpen={setMobileNavOpen} />
      </div>
    </>
  );
};

export default NavBar;
