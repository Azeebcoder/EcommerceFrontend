import React from "react";
import { FaGithub,FaInstagram ,FaLinkedin } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

const TopBar = () => {
  return (
    <>
      <div className="w-full bg-slate-600 text-white">
        <div className="container flex md:justify-between justify-center items-center mx-auto py-2 px-2">
          <div className="hidden md:block">
            <a href="tel:+9166397929579" className="font-semibold text-slate-200 hover:text-white flex gap-2 justify-center items-center"><IoIosCall/> 6397929579</a>
          </div>
          <div className="flex md:gap-3 gap-6">
            <a href="#" target="_blank" className="text-xl text-gray-200 hover:text-white transition hover:scale-125">
              <FaGithub/>
            </a>
            <a href="#" target="_blank" className="text-xl text-gray-200 hover:text-white transition hover:scale-125">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" className="text-xl text-gray-200 hover:text-white transition hover:scale-125">
              <FaLinkedin />
            </a>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
