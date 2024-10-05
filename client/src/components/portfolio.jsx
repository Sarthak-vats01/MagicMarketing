import React from "react";
import image1 from "../media/1.jpeg";
import image2 from "../media/2.jpeg";
import image3 from "../media/3.jpeg";
import image4 from "../media/4.jpeg";
import image5 from "../media/5.jpeg";
import image6 from "../media/6.jpeg";
import image7 from "../media/7.jpeg";
import image8 from "../media/8.jpeg";
import image9 from "../media/9.jpeg";
import image10 from "../media/10.jpeg";
import image11 from "../media/11.jpeg";
import image12 from "../media/12.jpeg";
import image13 from "../media/13.jpeg";
import image14 from "../media/14.jpeg";
import image15 from "../media/15.jpeg";
import Footer from "./footer";

function Portfolio() {
  return (
    <div className="container mx-auto text-center py-10">
      {/* First Row */}
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="transition-transform transform hover:scale-110 hover:brightness-110 duration-300 cursor-pointer">
          <img src={image1} alt="Portfolio " className="w-full" />
        </div>
        <div className="transition-transform transform hover:scale-110 hover:brightness-110 duration-300  cursor-pointer">
          <img src={image2} alt="Portfolio " className="w-full" />
        </div>
        <div className="transition-transform transform hover:scale-110 hover:brightness-110 duration-300 cursor-pointer">
          <img src={image3} alt="Portfolio  3" className="w-full" />
        </div>
        <div className="transition-transform transform hover:scale-110 hover:brightness-110 duration-300 cursor-pointer">
          <img src={image4} alt="Portfolio  4" className="w-full" />
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-8 gap-4 mb-4">
        <div className="col-span-6 transition-transform transform hover:scale-110 hover:brightness-110 duration-300 cursor-pointer">
          <img src={image5} alt="Portfolio  5" className="w-full" />
        </div>
        <div className="col-span-2 transition-transform transform hover:scale-110 hover:brightness-110 duration-300 cursor-pointer">
          <img src={image6} alt="Portfolio  6" className="w-full" />
        </div>
      </div>

      {/* Third Row */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        {[image7, image8, image9, image10, image11, image12].map(
          (image, index) => (
            <div
              key={index}
              className="transition-transform transform hover:scale-110 hover:brightness-110 duration-300 cursor-pointer"
            >
              <img
                src={image}
                alt={`Portfolio  ${index + 7}`}
                className="w-full"
              />
            </div>
          )
        )}
      </div>

      {/* Fourth Row */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        {[image13, image14, image15].map((image, index) => (
          <div
            key={index}
            className="transition-transform transform hover:scale-110 hover:brightness-110 duration-300 cursor-pointer"
          >
            <img
              src={image}
              alt={`Portfolio  ${index + 13}`}
              className="w-full"
            />
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Portfolio;
