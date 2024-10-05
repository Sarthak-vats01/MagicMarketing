import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Services() {
  return (
    <div>
      <Navbar />

      {/* OUR SERVICES Heading */}
      <div className="text-xl lg:text-4xl font-bold bg-blue py-6 lg:py-14 text-center">
        OUR SERVICES
      </div>

      {/* Introduction Text */}
      <p className="py-5 lg:py-10 text-center text-base lg:text-xl font-thin">
        We’d like to introduce you to some of the services <br />
        we offer.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20 w-11/12 mx-auto my-5 text-center">
        {/* Digital Strategy */}
        <div className="h-40 flex flex-col justify-around">
          <h1 className="mb-4 text-lg lg:text-2xl">Digital Strategy</h1>
          <p className="text-sm lg:text-base">
            We tailored digital solutions to boost your <br />
            online presence, engagement, and <br />
            growth.
          </p>
        </div>

        {/* Rebranding */}
        <div className="h-40 flex flex-col justify-around">
          <h1 className="mb-4 text-lg lg:text-2xl">Rebranding</h1>
          <p className="text-sm lg:text-base">
            We rebrand to revitalize your brand, connect <br />
            with your audience, and achieve <br />
            long-term success.
          </p>
        </div>

        {/* SEO Strategy */}
        <div className="h-40 flex flex-col justify-around">
          <h1 className="mb-4 text-lg lg:text-2xl">SEO Strategy</h1>
          <p className="text-sm lg:text-base">
            We optimize your website for search engines <br />
            to attract more organic traffic and <br />
            boost your business.
          </p>
        </div>

        {/* Product Research */}
        <div className="h-40 flex flex-col justify-around">
          <h1 className="mb-4 text-lg lg:text-2xl">Product Research</h1>
          <p className="text-sm lg:text-base">
            We uncover customer needs, preferences, and <br />
            market trends to inform product <br />
            development.
          </p>
        </div>

        {/* Logo Design */}
        <div className="h-40 flex flex-col justify-around">
          <h1 className="mb-4 text-lg lg:text-2xl">Logo Design</h1>
          <p className="text-sm lg:text-base">
            We craft a captivating logo that reflects <br />
            your brand's essence and resonates with <br />
            your audience.
          </p>
        </div>

        {/* Website Design */}
        <div className="h-40 flex flex-col justify-around">
          <h1 className="mb-4 text-lg lg:text-2xl">Website Design</h1>
          <p className="text-sm lg:text-base">
            We design a visually appealing <br />
            website that converts visitors into <br />
            customers.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Services;
