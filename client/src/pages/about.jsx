import React from "react";
import Navbar from "../components/navbar";
import meeting from "../media/meeting.jpeg";
import Footer from "../components/footer";

function About() {
  return (
    <div>
      <Navbar />

      {/* ABOUT US Heading */}
      <div className="text-xl lg:text-4xl font-bold bg-pink py-6 lg:py-14 text-center">
        ABOUT US
      </div>

      {/* Introduction Text */}
      <p className="py-5 lg:py-8 text-center text-base lg:text-xl font-thin px-4 lg:px-0">
        We’d like to introduce you to some of the people <br />
        who make Magic Marketing what it is today.
      </p>

      {/* About Us Section */}
      <div className="mx-auto flex flex-col lg:flex-row justify-between w-11/12 lg:w-4/6 items-center lg:items-start gap-10 lg:gap-16 pt-4 lg:pt-8">
        <img
          className="w-full lg:w-1/2 h-auto rounded-lg"
          src={meeting}
          alt="aboutphoto"
        />
        <p className="w-full lg:w-2/5 text-center lg:text-left text-xs lg:text-xl px-4 lg:px-0">
          At Magic Marketing, we're more than just a media marketing agency.
          We're a strategic partner dedicated to helping businesses achieve
          their goals through innovative and effective digital campaigns. With a
          team of experienced professionals, we craft tailored solutions that
          resonate with your target audience. From captivating content creation
          to data-driven optimization, we leverage the power of media to drive
          brand awareness, generate leads, and boost conversions. Our mission is
          to empower businesses to succeed in the digital age by delivering
          exceptional marketing results.
        </p>
      </div>

      {/* Meet Some Of Our Clients Section */}
      <div className="my-10 lg:my-20 flex flex-col items-center">
        <h1 className="text-xl lg:text-4xl font-medium py-7 lg:py-10 text-center">
          Meet Some Of Our Clients
        </h1>

        {/* Client List */}
        <div className="w-11/12 lg:w-2/5 flex flex-col lg:flex-row justify-between mx-auto font-extralight text-lg text-gray-600 gap-6 lg:gap-0">
          <li className="list-none font-thin">
            <ul className="my-3 lg:my-5">Corona.pro</ul>
            <ul className="my-3 lg:my-5">Spectrum</ul>
            <ul className="my-3 lg:my-5">Infinity</ul>
            <ul className="my-3 lg:my-5">Atlas</ul>
            <ul className="my-3 lg:my-5">Maxicorp</ul>
          </li>
          <li className="list-none font-thin">
            <ul className="my-3 lg:my-5">Maki</ul>
            <ul className="my-3 lg:my-5">Lara</ul>
            <ul className="my-3 lg:my-5">Etero</ul>
            <ul className="my-3 lg:my-5">Marko Polo</ul>
            <ul className="my-3 lg:my-5">Ateltic</ul>
          </li>
          <li className="list-none font-thin">
            <ul className="my-3 lg:my-5">DoorMeet</ul>
            <ul className="my-3 lg:my-5">E.B Tech</ul>
            <ul className="my-3 lg:my-5">Sky View</ul>
            <ul className="my-3 lg:my-5">Apolo</ul>
            <ul className="my-3 lg:my-5">Alice</ul>
          </li>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
