import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Contact() {
  return (
    <div>
      <Navbar />

      {/* LET'S TALK Heading */}
      <div className="text-xl lg:text-4xl font-bold bg-yellow-300 py-6 lg:py-14 text-center">
        LET'S TALK
      </div>

      {/* Contact Info */}
      <p className="py-5 lg:py-10 text-center text-base lg:text-xl font-thin">
        500 Terry Francine Street San Francisco, CA 94158 <br />
        Tel: 123-456-7890 | info@mysite.com
      </p>

      {/* Contact Form */}
      <div className="mb-14 mx-auto w-4/5">
        <form
          action=""
          method="post"
          className="flex flex-col items-center w-full mx-auto sm:px-0 sm:w-4/5 md:w-3/5 lg:w-2/5 text-gray-500"
        >
          <div className="w-full flex flex-col md:flex-row justify-between space-x-0 md:space-x-4 mb-4">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <label className="block mb-2" htmlFor="firstName">
                First Name *
              </label>
              <input
                className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-black py-2"
                type="text"
                id="firstName"
                name="firstName"
                required
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="block mb-2" htmlFor="lastName">
                Last Name *
              </label>
              <input
                className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-black py-2"
                type="text"
                id="lastName"
                name="lastName"
                required
              />
            </div>
          </div>
          <div className="w-full mb-4">
            <label className="block mb-2" htmlFor="email">
              Email *
            </label>
            <input
              className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-black py-2"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="w-full mb-4">
            <label className="block mb-2" htmlFor="subject">
              Subject *
            </label>
            <input
              className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-black py-2"
              type="text"
              id="subject"
              name="subject"
              required
            />
          </div>
          <div className="w-full mb-6">
            <label className="block mb-2" htmlFor="message">
              Message *
            </label>
            <textarea
              className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-black py-2"
              id="message"
              name="message"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-transparent border-none text-gray-600 text-lg py-2 hover:underline"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="w-full h-96 my-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092497!2d144.95373531531584!3d-37.81627997975139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43e5f9f81b%3A0x5045675218cedf0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1620333449397!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
