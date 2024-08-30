import Banner from "@/assets/banner.webp";

const Footer = () => {
  return (
    <footer className="flex py-8 w-full bg-gray-900 ">
      <div className="flex flex-row w-[90%] mx-auto justify-center">
        <div className="flex flex-col text-center">
          <div className="flex">
            <img src={Banner} alt="Banner" className="h-16" />
          </div>
          <div className="text-blue-500 text-xl font-bold">
            &copy; {new Date().getFullYear()} Raznar Lab
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
