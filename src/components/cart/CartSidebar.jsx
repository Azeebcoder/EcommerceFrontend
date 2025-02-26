import React from 'react'
import { IoIosClose } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const CartSidebar = ({setOpen}) => {

  const cartItems = [
    { id: 1, name: 'Product 1', price: 19.99, quantity: 2, image: 'https://via.assets.so/img.jpg?w=250&h=250' },
    { id: 2, name: 'Product 2', price: 29.99, quantity: 1, image: 'https://via.assets.so/img.jpg?w=250&h=250' },
    { id: 3, name: 'Product 3', price: 9.99, quantity: 3, image: 'https://via.assets.so/img.jpg?w=250&h=250' },
    { id: 3, name: 'Product 3', price: 9.99, quantity: 3, image: 'https://via.assets.so/img.jpg?w=250&h=250' },
    { id: 3, name: 'Product 3', price: 9.99, quantity: 3, image: 'https://via.assets.so/img.jpg?w=250&h=250' }
  ];
  return (
    <>
      
    {/* Close Button */}
    <button
        onClick={() => setOpen(false)}
        className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-4xl flex justify-end cursor-pointer items-center w-full pr-3"
      >
        <IoIosClose />
      </button>

      {/* Cart Header */}
      <div className="text-2xl font-bold mb-6 text-gray-800">Your Cart</div>

      {/* Cart Items */}
      <div className="space-y-4 overflow-y-auto custom-scrollbar" style={{ maxHeight: 'calc(100vh - 200px)' }}>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow duration-200"
          >
            {/* Item Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-14 h-14 object-cover rounded-lg"
            />

            {/* Item Details */}
            <div className="flex flex-col gap-1 flex-1">
              <span className="text-sm font-semibold text-gray-800">
                {item.name}
              </span>
              <span className="text-sm text-gray-600">
                ${item.price.toFixed(2)}
              </span>
              <span className="text-xs text-gray-500">
                Qty: {item.quantity}
              </span>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="px-2 py-1 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors duration-200"
              >
                -
              </button>
              <span className="text-sm text-gray-700">{item.quantity}</span>
              <button
                onClick={() => increaseQuantity(item.id)}
                className="px-2 py-1 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors duration-200"
              >
                +
              </button>
            </div>

            {/* Delete Button */}
            <button
              onClick={() => deleteItem(item.id)}
              className="text-red-500 hover:text-red-700 transition-colors duration-200 text-2xl cursor-pointer"
            >
              <MdDelete/>
            </button>
          </div>
        ))}
      </div>

      {/* Checkout Button */}
      <button
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-64 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors duration-200 shadow-lg hover:shadow-xl active:bg-gray-800"
      >
        Checkout
      </button>
    </>
  )
}

export default CartSidebar