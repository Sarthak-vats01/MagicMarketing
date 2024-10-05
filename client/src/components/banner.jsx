import React, { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const colors = ["bg-pink", "bg-teal-300", "bg-yellow-300"];
const texts = ["We Show", "We Have", "We Do"];
const titles = ["RESULTS", "PLANNING", "STRATEGY"];

function Banner() {
  const [color, setColor] = useState(colors[0]);
  const [text, setText] = useState(texts[0]);
  const [title, setTitle] = useState(titles[0]);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (colors.indexOf(color) + 1) % colors.length;
      setColor(colors[nextIndex]);
      setText(texts[nextIndex]);
      setTitle(titles[nextIndex]);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [color]);

  return (
    <div
      className={`h-screen ${color} flex items-center justify-center transition-colors duration-500 ease-in-out`}
    >
      <div className="flex flex-col items-end px-4 md:px-0">
        <div className="flex flex-col items-start transition-colors duration-500 ease-in-out">
          <p className="text-lg md:text-2xl mb-2">{text}</p>
          <p className="text-5xl md:text-9xl font-semibold mb-6 border-t border-b border-gray-600 transition-colors duration-500 ease-in-out">
            {title}
          </p>
        </div>
        <div className="flex flex-col items-end transition-colors duration-500 ease-in-out">
          <div
            onClick={() => navigate("/portfolio")}
            className="flex justify-center items-center text-base md:text-lg  cursor-pointer "
          >
            View Our Work
          </div>
          <FaArrowRightLong className="text-base md:text-xl mt-2" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
