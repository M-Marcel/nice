import React from "react";
import paymentImg from "../assets/frame.jpg";
import LogoImage from "../assets/lanepact-logo.png";
import Button from "../components/Button";

const PaymentPlans = () => {
  return (
    <div className="flex flex-col justify-center plans-bg  ">
      <div className="flex flex-col text-center items-center justify-center mt-20  ">
        <img src={LogoImage} alt="logoImg" width={20} height={20} />
        <h1 className="font-title text-4xl text-black-300 font-semi-bold pt-10 w-[70%] lg:w-[25%] ">
          Choose a plan that fits your goals
        </h1>
        <div className=" flex mt-4 gap-4 border border-white text-xs outline-none rounded-xl bg-white  text-center ">
          <button className="py-2 px-3 bg-gray-910 rounded-lg my-1 ms-1 ">
            Monthly
          </button>
          <button className="text-gray-990 px-2">Yearly</button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 mt-7 lg:mt-7">
        <div className="flex flex-col w-[95%] lg:w-[24%] text-left border border-gray-900 rounded-3xl p-4 mb-10 lg:mb-8 bg-white ">
          <h2 className="font-bold w-[95%] mb-2 text-black-200  ">Free tier</h2>
          <p className="w-[80%] text-sm text-gray-500 leading-[28px]">
            Ideal for small projects and initial testing
          </p>
          <h1 className="font-medium py-3 text-[40px] tracking-tight text-gray-500 ">
          <span className="line-through pr-2 ">$90 </span>
          <span className="bg-gray-900 text-blue-600 rounded-lg py-1 px-2" >$0</span>
            <span className="text-sm font-light text-gray-500"> /month</span>
          </h1>
          <ul className="text-black-500 w-[70%] lg:w-[95%]  leading-[35px] text-sm ">
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
          <div className="mt-32">
            <Button className="flex justify-center items-center w-full bg-white  text-black-500 border border-gray-900 text-xs px-4 py-3 lg:text-sm lg:px-5 lg:py-4 rounded-xl">
              Start for free
            </Button>
          </div>
        </div>

        <div className="flex flex-col w-[95%] lg:w-[24%] text-left border border-gray-900 rounded-3xl p-4 mb-8 py-3 bg-white h-[50%] ">
          <h2 className="font-bold mb-2 text-black-200  ">Enterprise</h2>
          <p className="w-[90%] text-sm text-gray-500 leading-[28px]">
            Ideal if you want to explore the crypto market or analyze sentiment
          </p>
          <h1 className="flex flex-col font-medium text-2xl lg:text-3xl py-4  ">
            Contact us
            <span className="text-sm font-light text-gray-500">
              {" "}
              for custom solutions
            </span>
          </h1>
          <ul className="text-black-500 w-[70%] lg:w-[90%] leading-[30px] text-sm  ">
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
              Unlimited requests per minute
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
              Custom request limits
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
              Dedicated account manager and support
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
              Custom features and datasets based on your business needs
            </li>
          </ul>
          <div className="mt-24">
            <Button className="flex justify-center items-center w-full bg-white  text-black-500 border border-gray-900   text-xs px-4 py-3 lg:text-sm lg:px-5 lg:py-4 rounded-xl">
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPlans;
