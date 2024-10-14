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
    <div className="w-full px-5 h-28 flex items-center bg-white shadow-black shadow-md">
      <section className="w-full h-full flex items-center justify-between px-4 sm:px-8 lg:px-16">
        {/* Logo */}
        <div
          className="font-serif text-black cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="cedarville-cursive-regular">M</span>agic Marketing{" "}
          <br />
          <span className="font-sans text-pretty">Marketing & Branding</span>
        </div>

        {/* Hamburger Icon */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none hover:text-black transition-colors duration-300"
          >
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        {/* Menu Links */}
        <div
          className={`lg:flex lg:w-1/2 lg:justify-between font-serif text-gray-500 lg:items-center ${
            isOpen ? "block" : "hidden"
          } lg:block absolute lg:static  lg:w-1/2  right-16 top-28 lg:top-0 transition-all duration-500 ease-in-out transform ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } lg:translate-y-0`}
        >
          <div
            className="hover:underline hover:text-black cursor-pointer mt-4 lg:mt-0 text-center lg:text-left"
            onClick={() => {
              navigate("/");
              setIsOpen(false);
            }}
          >
            Home
          </div>
          <div
            className="hover:underline hover:text-black cursor-pointer mt-4 lg:mt-0 text-center lg:text-left"
            onClick={() => {
              navigate("/about");
              setIsOpen(false);
            }}
          >
            About Us
          </div>
          <div
            className="hover:underline hover:text-black cursor-pointer mt-4 lg:mt-0 text-center lg:text-left"
            onClick={() => {
              navigate("/portfolio");
              setIsOpen(false);
            }}
          >
            Portfolio
          </div>
          <div
            className="hover:underline hover:text-black cursor-pointer mt-4 lg:mt-0 text-center lg:text-left"
            onClick={() => {
              navigate("/services");
              setIsOpen(false);
            }}
          >
            Services
          </div>
          <div
            className="hover:underline hover:text-black cursor-pointer mt-4 lg:mt-0 text-center lg:text-left"
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
