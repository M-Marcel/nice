import React from "react";
import workflowImg from "../assets/workflow.png";

const WorkFlows = () => {
  return (
    <div className="flex flex-col max-w-xl items-center text-center justify-center pt-10 ">
      <h2 className="font-title mb-3 text-4xl text-black-300 leading-none text-center font-medium  ">
        {" "}
        Let smart workflows handle repetitive tasks.
      </h2>
      <img src={workflowImg} alt="" className="pt-5 pb-16 " />
    </div>
  );
};

export default WorkFlows;
