import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeftAlt,
  faQuoteRightAlt,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import CastleIsland from "@/assets/castle_island.webp";
import FarmerVillage from "@/assets/farmer_village.webp";
import SmallJapanese from "@/assets/small_japanese.webp";

import GoogleBanner from "@/assets/brands/google.png";
import MicrosoftBanner from "@/assets/brands/microsoft.png";
import MojangBanner from "@/assets/brands/mojang.png";
import SteamBanner from "@/assets/brands/steam.png";

const Home = () => {
  return (
    <>
      <NavigationBar />
      <main className="bg-slate-900 min-h-screen min-w-full py-5 text-rose-500 bg-opacity-50">
        <section
          id="about"
          className="flex flex-col tracking-wider py-10 overflow-hidden"
        >
          <div className="flex flex-col text-3xl px-5 md:text-5xl md:px-0 font-bold text-center mx-auto animate-fadeup-1.5s">
            <h1 className="text-blue-500">Raznar Lab</h1>
            <h2 className="text-white">Streamline Your Workflow with us!</h2>
            <div className="block py-4">
              <button
                onClick={() => {
                  window.location.href = "#about-description";
                }}
                className="transition-all duration-300 py-4 px-12 bg-blue-500 text-white text-lg rounded-3xl hover:text-blue-500 hover:bg-white"
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="max-w-[75%] mx-auto py-12">
            <div className="flex flex-wrap justify-center gap-10 animate-fadeup-1.5s overflow-hidden">
              <img
                src={CastleIsland}
                alt=""
                className="object-cover transition-all duration-300 h-64 border border-sky-500 border-4 scale-95 hover:scale-100"
              />
              <img
                src={FarmerVillage}
                alt=""
                className="object-cover transition-all duration-300 h-64 border border-sky-500 border-4 scale-95 hover:scale-100"
              />
              <img
                src={SmallJapanese}
                alt=""
                className="object-cover transition-all duration-300 h-64 border border-sky-500 border-4 scale-95 hover:scale-100"
              />
            </div>
            <div id="about-description" className="py-6 animate-fadeup-1.5s">
              <h2 className="text-center text-white font-semibold text-lg md:text-2xl">
                We offer a range of exclusive services designed to elevate your
                business and streamline your operations. Our services include
                cutting-edge cloud solutions, custom software development, and
                advanced cybersecurity measures to protect your data and ensure
                seamless operations.
              </h2>
            </div>
          </div>
          <div className="py-10 text-white">
            <h2 className="text-center text-white font-bold text-5xl animate-fadeup-1.5s">
              Why Us?
            </h2>
            <div className="flex flex-wrap justify-center py-10 gap-10 animate-fadeup-1.5s">
              <div className="transition-all duration-300 flex flex-col bg-slate-800 p-5 rounded-xl md:w-[420px] border-transparent border-2 hover:border-slate-600 scale-90 md:scale-100 md:hover:scale-105 hover:scale-95">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-blue-600 py-16 h-20"
                />
                <div className="flex flex-col text-center">
                  <h2 className="text-2xl py-4 font-bold">
                    Engage Your Audience
                  </h2>
                  <p className="text-xl text-slate-300">
                    Feel the excitement as your audience explores lands
                    meticulously molded by your unique story, fostering direct
                    interaction and engagement.
                  </p>
                </div>
              </div>

              <div className="transition-all duration-300 flex flex-col bg-slate-800 p-5 rounded-xl md:w-[420px] border-transparent border-2 hover:border-slate-600 scale-90 md:scale-100 md:hover:scale-105 hover:scale-95">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-blue-600 py-16 h-20"
                />
                <div className="flex flex-col text-center">
                  <h2 className="text-2xl py-4 font-bold">
                    Massive Active Player Base
                  </h2>
                  <p className="text-xl text-slate-300">
                    Join a community of over 174 million active players in the
                    last 30 days.
                  </p>
                </div>
              </div>

              <div className="transition-all duration-300 flex flex-col bg-slate-800 p-5 rounded-xl md:w-[420px] border-transparent border-2 hover:border-slate-600 scale-90 md:scale-100 md:hover:scale-105 hover:scale-95">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-blue-600 py-16 h-20"
                />
                <div className="flex flex-col text-center">
                  <h2 className="text-2xl py-4 font-bold">
                    Tailored Brand Reflection
                  </h2>
                  <p className="text-xl text-slate-300">
                    Embark on awe-inspiring Minecraft worlds tailored to reflect
                    the essence of your brand authentically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="brands" className="py-10 text-white">
          <h2 className="text-center text-white font-bold text-5xl animate-fadeup-1.5s">
            Customer Brands
          </h2>
          <div className="flex flex-wrap justify-center px-8 md:px-0 py-20 gap-10 animate-fadeup-1.5s">
            <img src={GoogleBanner} alt="" className="h-28" />
            <img src={MicrosoftBanner} alt="" className="h-28" />
            <img src={MojangBanner} alt="" className="h-28" />
            <img src={SteamBanner} alt="" className="h-28" />
          </div>
        </section>

        <section id="reviews" className="py-10 text-white">
          <h2 className="text-center text-white font-bold text-5xl animate-fadeup-1.5s">
            Reviews
          </h2>
          <div className="flex justify-center py-20 gap-10 animate-fadeup-1.5s">
            <div className="flex flex-col px-8 md:px-0 md:max-w-[42.5%]">
              <div className="flex">
                <FontAwesomeIcon
                  icon={faQuoteLeftAlt}
                  className="text-blue-500 h-[64px]"
                />
              </div>
              <p className="text-2xl font-medium">
                Raznar Lab have been an amazing company to work with. My
                interactions with everyone at Raznar Lab have always felt
                personal, and tailored to our exact needs. The services provided
                to us by Raznar Lab allowed more time for our team to focus on
                our priorities, whilst Raznar Lab filled in the gaps to allow us
                to create immersive work experiences for our audience.
              </p>
              <div className="flex justify-end">
                <FontAwesomeIcon
                  icon={faQuoteRightAlt}
                  className="text-blue-500 h-[64px]"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
