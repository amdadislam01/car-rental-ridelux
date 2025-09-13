import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="text-white lg:px-[12%] px-[8%] pt-16 flex justify-center items-center flex-col">
        <div className="border-b border-[#222] pb-8 w-full text-white px-4 md:px-0">
          <div className="flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0">
            <div className="flex-1">
              <Link to="/" className="text-4xl font-bold logo bricolage-font">
                Ride<span>lux</span>
              </Link>
              <p className="text-[#999] mb-6 md:w-[90%] w-full mt-2">
                Rent a car imperdiet sapien porttito the bibenum ellentesue the
                commodo erat nesuen.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="border border-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-600 hover:text-black transition-colors duration-300"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="border border-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-600 hover:text-black transition-colors duration-300"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a
                  href="#"
                  className="border border-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-600 hover:text-black transition-colors duration-300"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="#"
                  className="border border-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-600 hover:text-black transition-colors duration-300"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>

            <div className="flex-1">
              <h4 className="text-2xl font-semibold bricolage-font mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-[#999] footer-menu relative">
                <li>
                  <Link
                    to="/About"
                    className="hover:text-red-600 relative transition duration-300 bricolage-font"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Cars"
                    className="hover:text-red-600 relative transition duration-300 bricolage-font"
                  >
                    Cars
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Blog"
                    className="hover:text-red-600 relative transition duration-300 bricolage-font"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Contact"
                    className="hover:text-red-600 relative transition duration-300 bricolage-font"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <h4 className="text-2xl font-semibold bricolage-font mb-4">
               Subscribe
              </h4>
              <p className="text-[#999] mb-4 text-sm">
                Want to be notified about our services? Just sign up and we'll send you a notification by email.
              </p>
              <div className="flex items-center border border-red-600 rounded-full px-4 py-2">
                <input type="email" placeholder="Enter Your Email" required className="bg-transparent outline-none text-white placeholder:text-[#aaa] flex-1"/>
                <button type="submit" className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
                  <i className="ri-arrow-right-up-line"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-[#999] text-center text-base relative py-6">
          <p className="bricolage-font">
            © 2025. All Right Reserved. <a href="" className="text-white bricolage-font">Ridelux</a>
          </p>
          <p className="bricolage-font">
            Developed By <a href="https://amdadislam.netlify.app/" className="bricolage-font">Amdad Islam</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
