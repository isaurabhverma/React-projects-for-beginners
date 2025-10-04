import React, { useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Navbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className="py-4 bg-black sm:py-6 fixed top-0 left-0 w-full z-50  shadow">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="shrink-0">
            <a href="#" title="" className="flex">
              <img
                className="w-auto h-9"
                src="https://landingfoliocom.imgix.net/store/collection/dusk/images/logo.svg"
                alt=""
              />
            </a>
          </div>
          <nav className="hidden ml-10 mr-auto space-x-10 lg:ml-20 lg:space-x-12 md:flex md:items-center md:justify-start">
            <a
              href="#HeroTemp"
              title=""
              className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
            >
              {" "}
              Home{" "}
            </a>
            {/* <Link to={} >ProductTusahr </Link> */}
            <a
              href="#testimonial"
              title=""
              className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
            >
              {" "}
              Testimonial{" "}
            </a>
            <a
              href="#faq"
              title=""
              className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
            >
              {" "}
              F&Q{" "}
            </a>
            <a
              href="#footer"
              title=""
              className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
            >
              {" "}
              Footer{" "}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
