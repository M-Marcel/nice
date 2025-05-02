import React from "react";
import femaleImg from "../../assets/female-avatar.jpeg";

const DeactivatePortfolio = () => {
  return (
    <div className="relative top-[20px] bg-white px-4 py-4 h-full mx-4 lg:mx-12 w-[100%]">
      <div className="flex justify-between items-center w-[70%]">
        <h2 className="text-3xl">Deactivate template</h2>
        <button className="border border-gray-900 px-1 py-1 rounded-2xl">
          <span className="">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.75732 7.75732L16.2426 16.2426"
                stroke="#2B2E32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.75739 16.2426L16.2427 7.75732"
                stroke="#2B2E32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>

    <div className="flex flex-col">
      <div className="flex flex-col  w-[30%]  pt-6">
        <img src={femaleImg} alt="" />
        <h2 className="text-lg font-bold pt-2">Standard</h2>
        <p className="text-sm pb-2 text-gray-200">Ideal for creative</p>
        <div className="flex gap-3 items-center justify-start ">
          <button className="flex justify-center  w-[23%]  text-sm rounded-xl border border-blue-200 px-4 py-1 ">
            View
          </button>
          <button className="flex justify-center  w-[23%]  text-sm rounded-xl bg-black-990 text-white px-4 py-1 ">
            Use
          </button>
        </div>
      </div>

      <div className="flex justify-start items-center w-[60%] pt-4 ">
        <p className="text-black-920 text-xl font-bold w-[40%]">Are you sure you want to deactivate this template?</p>
      </div>

      <div className="flex justify-start items-center mt-4 gap-3 w-[70%] ">
        <button className="text-sm border border-gray-100 px-4 py-4 rounded-2xl w-[18%] ">Cancel</button>
        <button className="text-lg outline-none text-white deactivate px-4 py-3 rounded-2xl w-[18%] ">Deactivate</button>
      </div>
      </div>
    </div>
  );
};

export default DeactivatePortfolio;
