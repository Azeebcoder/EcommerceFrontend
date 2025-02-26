import React from 'react'

const MobileSideBar = ({setOpen}) => {
  return (
    <>
    
    <button
        onClick={() => setOpen(false)}
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Sidebar Content */}
      <div className="p-6">
        {/* Logo or Brand Name */}
        <div className="text-xl font-bold text-gray-800 mb-8">My Store</div>

        {/* Menu Items */}
        <ul className="space-y-4">
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
          {/* Additional Menu Items */}
          <li className="hover:text-blue-500 transition-colors duration-200 cursor-pointer">
            New Arrivals
          </li>
          <li className="hover:text-blue-500 transition-colors duration-200 cursor-pointer">
            Sale
          </li>
          <li className="hover:text-blue-500 transition-colors duration-200 cursor-pointer">
            Accessories
          </li>
          <li className="hover:text-blue-500 transition-colors duration-200 cursor-pointer">
            Shoes
          </li>
        </ul>

        {/* Divider */}
        <hr className="my-6 border-gray-200" />

        {/* Additional Links */}
        <div className="space-y-4">
          <div className="hover:text-blue-500 transition-colors duration-200 cursor-pointer">
            My Account
          </div>
          <div className="hover:text-blue-500 transition-colors duration-200 cursor-pointer">
            Orders
          </div>
          <div className="hover:text-blue-500 transition-colors duration-200 cursor-pointer">
            Wishlist
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileSideBar