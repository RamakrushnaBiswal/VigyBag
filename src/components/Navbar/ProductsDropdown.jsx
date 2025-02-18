import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const ProductsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium flex items-center focus:outline-none"
      >
        <lord-icon
          style={{
            width: "25px",
            height: "25px",
            paddingTop: "0px",
            paddingLeft: "1px",
          }}
          src="https://cdn.lordicon.com/pgmktfgp.json"
          trigger="hover"
          colors="primary:#15803D,secondary:#15803D"
        ></lord-icon>{" "}
        Products
        <FaChevronDown className="ml-1" />
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50`}
      >
        <div className="py-1">
          <Link
            to="/popularCategories/fashionAccessories"
            className="text-green-800 hover:text-green-500 block px-4 py-2 text-sm"
          >
            Fashion
          </Link>
          <Link
            to="/popularCategories/customizedGifts"
            className="text-green-800 hover:text-green-500 block px-4 py-2 text-sm"
          >
            Gifts
          </Link>
          <Link
            to="/popularCategories/furnitureDecor"
            className="text-green-800 hover:text-green-500 block px-4 py-2 text-sm"
          >
            Furniture
          </Link>
          <Link
            to="/popularCategories/printingStationery"
            className="text-green-800 hover:text-green-500 block px-4 py-2 text-sm"
          >
            Stationary
          </Link>
          <Link
            to="/popularCategories/bodyCare"
            className="text-green-800 hover:text-green-500 block px-4 py-2 text-sm"
          >
            Body-Care
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsDropdown;
