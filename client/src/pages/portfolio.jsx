import React from "react";
import Navbar from "../components/navbar";
import Portfolio from "../components/portfolio";

function PortfolioPage() {
  return (
    <div>
      <Navbar />
      <div className="text-xl lg:text-4xl font-bold  bg-yellow-300 py-6 lg:py-14 text-center">
        WORK
      </div>
      <p className="py-5 lg:py-10 text-center text-base py:text-xl font-thin">
        Crafting marketing magic, one campaign at a time. Let's create something{" "}
        <br />
        extraordinary together.
      </p>
      <Portfolio />
    </div>
  );
}

export default PortfolioPage;
