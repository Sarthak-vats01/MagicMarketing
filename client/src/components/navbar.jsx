import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-28 flex items-center bg-white shadow-black shadow-md">
      <section className="w-full h-full flex items-center justify-between px-4 sm:px-8 lg:px-16">
        <div
          className="font-serif text-black cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="cedarville-cursive-regular">M</span>agic Marketing{" "}
          <br />
          <span className="font-sans text-pretty">Marketing & Branding</span>
        </div>

        {/* Hamburger Icon for smaller screens */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-500 focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menu Links */}
        <div
          className={`lg:flex lg:w-3/5 lg:justify-between font-serif text-gray-500 lg:items-center ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div
            className="hover:overline hover:text-black cursor-pointer mt-4 lg:mt-0"
            onClick={() => {
              navigate("/");
              setIsOpen(false);
            }}
          >
            Home
          </div>
          <div
            className="hover:overline hover:text-black cursor-pointer mt-4 lg:mt-0"
            onClick={() => {
              navigate("/about");
              setIsOpen(false);
            }}
          >
            About Us
          </div>
          <div
            className="hover:overline hover:text-black cursor-pointer mt-4 lg:mt-0"
            onClick={() => {
              navigate("/portfolio");
              setIsOpen(false);
            }}
          >
            Portfolio
          </div>
          <div
            className="hover:overline hover:text-black cursor-pointer mt-4 lg:mt-0"
            onClick={() => {
              navigate("/services");
              setIsOpen(false);
            }}
          >
            Services
          </div>
          <div
            className="hover:overline hover:text-black cursor-pointer mt-4 lg:mt-0"
            onClick={() => {
              navigate("/contact");
              setIsOpen(false);
            }}
          >
            Contact Us
          </div>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
