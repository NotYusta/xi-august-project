import { Link } from "react-router-dom";
import Banner from '@/assets/banner.webp';
const NavigationBar = () => {
  return (
    <nav className="py-5 w-full bg-gray-900 text-lg">
      <div className="flex justify-between mx-auto items-center w-[60%]">
        <div className="flex">
          <img src={Banner} className="h-12" />
        </div>

        <ul className="flex justify-between items-center text-white font-bold capitalize w-[40%]">
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
          <Link to={`https://chat.whatsapp.com/BWhqTp0MWgZCjwvGhJrWJG`} target="_blank">
            <button className="transition-all duration-300 text-white py-2 px-12 bg-blue-500 rounded-3xl hover:text-blue-500 hover:bg-white">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
