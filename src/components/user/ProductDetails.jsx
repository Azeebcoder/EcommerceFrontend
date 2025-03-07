import React, { useState } from "react";

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  // Handle size selection
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  // Handle color selection
  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="container mx-auto mt-5 px-4 md:px-10">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-[50%]">
          <div className="w-full overflow-hidden rounded-lg">
            <img
              src="https://www.thecoolector.com/wp-content/uploads/2022/03/jacke-1170x797.jpg"
              alt="Jacket"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex gap-3 p-3 mt-4">
            <div className="w-[20%]  h-20  overflow-hidden cursor-pointer rounded-lg">
              <img
                src="https://www.thecoolector.com/wp-content/uploads/2022/03/jacke-1170x797.jpg"
                alt="Jacket Thumbnail 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[20%] h-20 overflow-hidden cursor-pointer rounded-lg">
              <img
                src="https://images-cdn.ubuy.co.in/66d5b4adf013d367b469b4e3-leather-jacket-mens-faux-fur-jacket.jpg"
                alt="Jacket Thumbnail 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>


        <div className="w-full md:w-[50%] flex flex-col gap-6 p-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Mens Jacket Jo Kabhi Na Fte</h2>
            <p className="text-sm text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, omnis.
            </p>
            <div className="mt-4">
              <span className="text-lg font-semibold text-gray-900">Price: ₹999</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">Size</h3>
            <div className="flex gap-4 mt-2">
              {["S", "M", "L", "XL"].map((size) => (
                <div
                  key={size}
                  className={`border rounded-md cursor-pointer w-8 h-8 flex justify-center items-center hover:scale-110 transition duration-200
                    ${selectedSize === size ? "bg-blue-500 text-white" : "hover:bg-gray-100"}`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">Color</h3>
            <div className="flex gap-4 mt-2">
              {["black", "red", "white"].map((color) => (
                <div
                  key={color}
                  className={`w-8 h-8 rounded-full cursor-pointer hover:scale-110 transition duration-200
                    ${selectedColor === color ? `border-2 border-${color}-900` : "border-2 border-gray-400"}
                    bg-${color}-500`}
                  onClick={() => handleColorClick(color)}
                ></div>
              ))}
            </div>
          </div>

          <div>
            <button className="mt-6 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 cursor-pointer">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails; 