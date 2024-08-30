const NavigationBar = () => {
  return (
    <nav className="fixed py-4 w-full bg-slate-600">
      <div className="flex justify-between w-[90%] mx-auto items-center">
        <div className="flex">
          <img src="https://raznar.id/icons/banner.webp" className="h-10"/>
        </div>
        <div className="flex">
          <ul className="flex gap-x-2 items-center">
            <li>
              <a href="">ea</a>
            </li>
            <li>
              <a href="">ea</a>
            </li>
            <li>
              <a href="">ea</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
