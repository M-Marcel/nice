import React from "react";
import CanvasTime from "../components/CanvasTime";
import BotIcon from "../components/BotStatus";

import LogoDrag from "../components/LogoDrag";

const Navbar = () => {
  
  return (
    <>
    
      <div className="flex flex-row text-sm sm:items-center sm:justify-center gap-4 px-5 lg:px-7.5 sm:min-w-lg pt-8 ">
        <LogoDrag />
        <div className="flex-col items-center justify-between mx-auto lg:flex lg:flex-row gap-4  ">
          <CanvasTime />
        </div>
        <BotIcon />
      </div>
    </>
  );
};

export default Navbar;
