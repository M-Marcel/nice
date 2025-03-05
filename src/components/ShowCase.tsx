import React from "react";
import { useState } from "react";
import Button from "../components/Button";
import portfolioImg from "../assets/portfolio-frame.png";

const ShowCase = () => {
  return (
      <div className="flex flex-col max-w-xl items-center text-center justify-center pt-10 ">
        <h2 className="font-title mb-3 text-4xl text-black-300 leading-none text-center font-medium  ">
          Showcase your work with beautifully crafted templates.
        </h2>
        <img src={portfolioImg} alt="" className="pt-5 pb-16 " />
      </div>
  );
};

export default ShowCase;
