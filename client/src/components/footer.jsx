import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <div className=" w-full h-16 lg:h-28 flex items-center justify-center bg-gray-200  lg:mt-2 text-xs lg:text-base">
      <section className="w-full mx-4  lg:w-1/2 flex justify-between items-baseline ">
        <p className="flex flex-row items-center">
          <AiOutlineCopyright />
          2035 by Magic Marketing. Powered and secured by
          <span className="underline ml-1">Vats</span>
        </p>
        <div className="flex items-center justify-between w-24  text-base lg:text-xl">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
      </section>
    </div>
  );
}

export default Footer;
