import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import icons

const HomeNewProducts = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const newProducts = [
    { id: 1, name: "Product 1", image: "https://via.assets.so/img.jpg?w=550&h=550", price: "$29.99" },
    { id: 2, name: "Product 2", image: "https://via.assets.so/img.jpg?w=550&h=550", price: "$49.99" },
    { id: 3, name: "Product 3", image: "https://via.assets.so/img.jpg?w=550&h=550", price: "$19.99" },
    { id: 4, name: "Product 4", image: "https://via.assets.so/img.jpg?w=550&h=550", price: "$39.99" },
    { id: 5, name: "Product 5", image: "https://via.assets.so/img.jpg?w=550&h=550", price: "$59.99" },
    { id: 6, name: "Product 6", image: "https://via.assets.so/img.jpg?w=550&h=550", price: "$24.99" },
    { id: 7, name: "Product 7", image: "https://via.assets.so/img.jpg?w=550&h=550", price: "$34.99" },
    { id: 8, name: "Product 8", image: "https://via.assets.so/img.jpg?w=550&h=550", price: "$44.99" },
  ];

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    updateScrollButtons();
    window.addEventListener("resize", updateScrollButtons);
    return () => window.removeEventListener("resize", updateScrollButtons);
  }, []);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 relative">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">New Arrivals</h2>

      {/* Scroll Buttons */}
      <button
        onClick={() => handleScroll("left")}
        disabled={!canScrollLeft}
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 p-4 rounded-full shadow-lg z-10 transition-all duration-300
          ${canScrollLeft ? "bg-indigo-600 text-white hover:bg-indigo-700" : "bg-gray-300 cursor-not-allowed"}`}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() => handleScroll("right")}
        disabled={!canScrollRight}
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 p-4 rounded-full shadow-lg z-10 transition-all duration-300
          ${canScrollRight ? "bg-indigo-600 text-white hover:bg-indigo-700" : "bg-gray-300 cursor-not-allowed"}`}
      >
        <ChevronRight size={24} />
      </button>

      {/* Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto pb-8 scroll-smooth scrollbar-hide"
        onScroll={updateScrollButtons}
      >
        {newProducts.map((product) => (
          <div
          key={product.id}
          className="flex-shrink-0 w-64 mx-4 bg-white rounded-xl shadow-lg transition-all duration-300 ease-in-out 
                     transform hover:scale-105 hover:shadow-2xl"
        >
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="absolute top-2 right-2 bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-800 shadow-sm">
              New
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
            <p className="text-lg font-bold text-indigo-600">{product.price}</p>
            <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        </div>
        
        ))}
      </div>
    </div>
  );
};

export default HomeNewProducts;
