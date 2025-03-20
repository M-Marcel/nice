import React from "react";
import paymentImg from "../assets/frame.jpg";
import LogoImage from "../assets/lanepact-logo.png";
import Button from "../components/Button";

const FreePlans = () => {
  return (
    <div className="flex flex-col justify-center plans-bg  ">
      <div className="flex flex-col text-center items-center justify-center mt-20  ">
        <img src={LogoImage} alt="logoImg" width={20} height={20} />
        <h1 className="font-title text-4xl text-blck-300 font-semi-bold pt-10 w-[70%] lg:w-[25%] ">
        Enjoy a 1 month of Lanepact for free!
        </h1>
        <p className="text-sm pt-3 text-gray-500">Upgrade anytime for uninterrupted access</p>
      </div>

      <div className="flex flex-col  justify-center items-center gap-4 mt-7 lg:mt-7">
        <div className="flex flex-col w-[95%] lg:w-[24%] text-left border border-gray-900 rounded-3xl p-4 mb-2 bg-white ">
          <h1 className="font-medium py-3 text-[40px] tracking-tight text-gray-500  ">
            <span className="line-through pr-2 " > $90</span>
            <span className=" bg-gray-900 text-blue-600 rounded-lg py-1 px-2" >$0</span>
            <span className="text-sm font-light text-gray-500"> /month</span>
          </h1>
          <ul className="text-black-500 w-[70%] lg:w-[95%]  leading-[35px] text-sm pb-32 ">
            <li className="flex items-baseline gap-3  ">
              <span>
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8.5C1 8.5 2.5 8.5 4.5 12C4.5 12 10.0588 2.83333 15 1"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              50 requests per minute
            </li>
            <li className="flex items-baseline gap-3">
              <span>
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8.5C1 8.5 2.5 8.5 4.5 12C4.5 12 10.0588 2.83333 15 1"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              Up to 10K request per month
            </li>
            <li className="flex items-baseline gap-3 ">
              <span>
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8.5C1 8.5 2.5 8.5 4.5 12C4.5 12 10.0588 2.83333 15 1"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              Full access to all supported crypto assets
            </li>
          </ul>
        </div>
        <div className="mb-10">
            <Button className="flex custom-bg  justify-center items-center w-full bg-white  text-white border border-gray-900 text-xs px-2 py-3 lg:text-sm lg:px-5 lg:py-2 rounded-xl">
              Continue
            </Button>
          </div>
      </div>
    </div>
  );
};

export default FreePlans;
