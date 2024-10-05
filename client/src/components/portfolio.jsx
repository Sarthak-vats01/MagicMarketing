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
import image11 from "../media/11.jpeg";
import image10 from "../media/10.jpeg";
import image12 from "../media/12.jpeg";
import image13 from "../media/13.jpeg";
import image14 from "../media/14.jpeg";
import image15 from "../media/15.jpeg";
import Footer from "./footer";

function Portfolio() {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <img src={image1} alt="" />
        </div>
        <div class="col">
          <img src={image2} alt="" />
        </div>
        <div class="col">
          <img src={image3} alt="" />
        </div>
        <div class="col">
          <img src={image4} alt="" />
        </div>
      </div>
      <div class="row">
        <div class="col-8">
          co
          <img src={image5} alt="" />
        </div>
        <div class="col-4">
          co
          <img src={image6} alt="" />
        </div>
        <div class="col-4">
          co
          <img src={image7} alt="" />
        </div>
        <div class="col-4">
          co
          <img src={image8} alt="" />
        </div>
        <div class="col-4">
          co
          <img src={image9} alt="" />
        </div>
        <div class="col-4">
          co
          <img src={image10} alt="" />
        </div>
        <div class="col-4">
          co
          <img src={image11} alt="" />
        </div>
        <div class="col-4">
          co
          <img src={image12} alt="" />
        </div>
        <div class="col-4">
          co
          <img src={image13} alt="" />
        </div>
        <div class="col-4">
          co
          <img src={image14} alt="" />
        </div>
        <div class="col-4">
          co
          <img src={image15} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
