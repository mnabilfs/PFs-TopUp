import React from 'react';
import Logo from '../assets/PFs Logo.png';
import {
  HiOutlineSearch,
  HiOutlineMail,
  HiOutlineShoppingCart,
} from 'react-icons/hi';

const Navbar = () => {
  return (
    <nav className="bg-purple-900 text-white">
      <div className="container mx-auto flex items-center justify-between h-12 md:h-14 px-4 md:px-8">
        
        <div className="flex items-center">
          <img src={Logo} alt="Paper Fires Store Logo" className="h-10 md:h-12 w-auto" />
        </div>

        <div className="flex-grow mx-6 max-w-xl">
          <div className="relative">
            <HiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black cursor-pointer" />
            <input
              type="text"
              placeholder="Cari produk disini"
              className="w-full h-8 bg-white rounded-md pl-10 pr-4 text-black placeholder-gray-400 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center space-x-6">
          
          <HiOutlineMail className="h-6 w-6 cursor-pointer" />

          <HiOutlineShoppingCart className="h-6 w-6 cursor-pointer" />

          <span className="h-6 border-l border-white" />

          <div className="h-9 w-9 bg-gray-200 rounded-full flex items-center justify-center">
            <img
              src="https://freesvg.org/img/abstract-user-flat-4.png"
              alt="User Profile"
              className="h-9 w-9 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </nav>
);
};

export default Navbar;