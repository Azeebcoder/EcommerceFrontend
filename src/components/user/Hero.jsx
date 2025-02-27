import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] overflow-hidden z-[-1]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://via.assets.so/img.jpg?w=450&h=250')`,
        }}
      >
        {/* Overlay with RGBA background color */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} // 50% opacity
        ></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-1 h-full flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to Our Website
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Discover the best services and solutions tailored for you.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;