import CanvasTime from "../components/CanvasTime";
import BotIcon from "../components/BotStatus";

import LogoDrag from "../components/LogoDrag";


const Navbar = () => {
  
  return (
    <>
      <div className="fixed top-0 bg-custom-bg w-full z-50 hidden lg:flex flex-row text-sm sm:items-center sm:justify-center gap-4 px-5 lg:px-7.5 sm:min-w-lg py-8">
        <LogoDrag />
        <div className="flex-col items-center justify-between mx-auto lg:flex lg:flex-row gap-4  ">
          <CanvasTime />
        </div>
        <BotIcon />
      </div>
      <button className="lg:hidden">Toggle</button>
    </>
  );
};

export default Navbar;
