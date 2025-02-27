import React from "react";

const HeroGenderSelect = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 px-10 md:px-20 py-10">
      {/* Men's Section */}
      <div className="relative w-full h-[450px] md:h-[400px] overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-101 cursor-pointer">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://via.assets.so/img.jpg?w=550&h=550')`,
          }}
        >
          {/* Overlay with Gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70"
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-end justify-center text-center p-4">
          <div className="bg-gray-800 bg-opacity-90 w-full py-4 rounded-t-lg shadow-sm">
            <h1 className="text-2xl md:text-3xl font-medium text-white uppercase tracking-wide">
              Mens
            </h1>
            <p className="text-sm md:text-base text-gray-200 mt-1">
              Explore the latest trends
            </p>
          </div>
        </div>
      </div>

      {/* Women's Section */}
      <div className="relative w-full  h-[450px] md:h-[400px] overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-101 cursor-pointer">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://via.assets.so/img.jpg?w=550&h=550')`,
          }}
        >
          {/* Overlay with Gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-pink-900 via-transparent to-transparent opacity-70"
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-end justify-center text-center p-4">
          <div className="bg-pink-700 bg-opacity-90 w-full py-4 rounded-t-lg shadow-sm">
            <h1 className="text-2xl md:text-3xl font-medium text-white uppercase tracking-wide">
              Womens
            </h1>
            <p className="text-sm md:text-base text-pink-100 mt-1">
              Discover your style
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroGenderSelect;