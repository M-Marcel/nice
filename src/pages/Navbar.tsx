import React, { useState } from "react";
import LogoIcon from "../components/LogoIcon";
import CanvasIcon from "../components/CanvasIcon";
import CanvasTime from "../components/CanvasTime";
import BotIcon from "../components/BotStatus";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
     
      <div className="flex sm:flex-row sm:items-center sm:justify-center gap-4 px-5 lg:px-7.5 sm:min-w-lg">
        <LogoIcon />
        <CanvasIcon />
        <div className="flex-col items-center justify-between mx-auto lg:flex lg:flex-row gap-4">
          <CanvasTime />
        </div>
        <BotIcon />
      </div>
      <div className=""></div>
    </>
  );
};

export default Navbar;
