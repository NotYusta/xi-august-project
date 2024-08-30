import { Link } from "react-router-dom";
import Banner from "@/assets/banner.webp";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {
  const [isMobileOpen, setMobileOpen] = useState(false);
  return (
    <>
      {!isMobileOpen && (
        <button
          className="absolute right-0 md:hidden"
          onClick={() => {
            setMobileOpen(true);
          }}
        >
          <div className="flex flex-col gap-3 p-4 group">
            <div className="w-10 h-1 p-0 m-0 bg-white group-hover:bg-blue-400" />
            <div className="w-10 h-1 p-0 m-0 bg-white group-hover:bg-blue-400" />
            <div className="w-10 h-1 p-0 m-0 bg-white group-hover:bg-blue-400" />
          </div>
        </button>
      )}
      <nav
        className={`w-full bg-gray-900 md:text-2xl md:px-4  ${
          isMobileOpen ? "fixed min-h-screen z-[1]" : "hidden"
        } md:block`}
      >
        <div className="py-5 flex flex-col justify-between mx-auto items-center lg:w-[60%] md:flex-row ">
          <div className="flex items-center justify-between w-full px-4 md:w-auto">
            <img src={Banner} className="h-16" />
            {isMobileOpen && (
              <button
                className="md:hidden"
                onClick={() => {
                  setMobileOpen(false);
                }}
              >
                <div className="flex flex-col gap-3 p-1 group">
                  <FontAwesomeIcon icon={faClose} className="text-white h-10" />
                </div>
              </button>
            )}
          </div>

          <ul className="flex flex-col py-20 gap-5 md:gap-0 md:py-0 md:flex-row justify-between items-center text-white font-bold capitalize md:w-[40%]">
            <li>
              <a
                className="transition-all duration-300 hover:text-blue-400"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="transition-all duration-300 hover:text-blue-400"
                href="#brands"
              >
                Brands
              </a>
            </li>
            <li>
              <a
                className="transition-all duration-300 hover:text-blue-400"
                href="#reviews"
              >
                Reviews
              </a>
            </li>
          </ul>

          <div className="flex">
            <Link
              to={`https://chat.whatsapp.com/BWhqTp0MWgZCjwvGhJrWJG`}
              target="_blank"
            >
              <button className="transition-all duration-300 text-white font-semibold py-1 px-8 md:py-2 md:px-12 bg-blue-500 rounded-3xl hover:text-blue-500 hover:bg-white">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
