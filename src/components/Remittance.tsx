import React from "react";
import remittanceImg from "../assets/workflow.png";

const Remittance = () => {
  return (
    <div className="flex flex-col max-w-xl items-center text-center justify-center pt-8 ">
      <h2 className="font-title mb-3 text-3xl lg:text-4xl text-black-300 leading-none text-center font-medium  ">
      Accept and send payments globally with stablecoins.
      </h2>
      <img src={remittanceImg} alt="" className="pt-5  " />
    </div>
  );
};

export default Remittance;
