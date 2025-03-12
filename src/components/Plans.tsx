import Button from "../components/Button";

const Plans = () => {
  return (
    <div className="relative top-[260px] px-2 lg:top-[350px] custom-l-bg3 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center text-center justify-center pt-20 ">
        <h2 className="font-title mb-3 text-2xl w-[45%] lg:text-4xl lg:w-[58%] text-black-300 leading-none text-center font-medium">
          We have plans that fit your goals
        </h2>
        <p className="text-center text-xs  w-[55%] lg:w-[43%] text-gray-970 mb-3">
          Choose a plan that suits your needs and scale your business with
          Lanepact
        </p>
        </div>

        <div className="flex flex-wrap gap-4 items-center justify-center lg:mb-10  pt-8 w-full ">

          <div className="flex flex-col w-[95%] lg:w-[24%] text-left border border-gray-900 rounded-3xl p-4 mb-8 bg-white ">
            <h2 className="font-bold w-[95%] mb-2 text-black-200  ">Free tier</h2>
            <p className="w-[80%] text-sm text-gray-500 leading-[28px]">
              Ideal for small projects and initial testing
            </p>
            <h1 className="font-medium py-3 text-[40px] tracking-tight  ">
              $0
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

          <div className="relative flex flex-col w-[95%]  lg:w-[24%] text-left border-2 border-black-500 rounded-3xl p-4 mb-8  bg-white ">
            <span className="absolute -top-4 left-[38%] bg-black-500 text-white text-xs rounded-xl px-4 py-2 " >Popular</span>
            <h2 className="font-bold mb-2 text-black-200  ">Startup</h2>
            <p className="w-[90%] text-sm text-gray-500 leading-[28px]">
            Ideal if you want to explore the crypto market or analyze sentiment
            </p>
            <h1 className="font-medium py-3 text-[40px] tracking-tight  ">
              $9
              <span className="text-sm font-light text-gray-500"> /month</span>
            </h1>
            <ul className="text-black-500 w-[70%] lg:w-[90%] leading-[35px] text-sm ">
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
                5k requests per minute
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
                Up to 5m request per month
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
                Premium support
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
                Full access to market charts, advanced analytics
              </li>
            </ul>
            <div className="mt-24  ">
            <Button className="flex justify-center items-center w-full text-white  bg-black-500 border border-gray-900 text-xs px-4 py-3 lg:text-sm lg:px-5 lg:py-4 rounded-xl">
              Get started
            </Button>
            </div>
          </div>

          <div className="flex flex-col w-[95%] lg:w-[24%] text-left border border-gray-900 rounded-3xl p-4 mb-8 py-5 bg-white ">
            <h2 className="font-bold mb-2 text-black-200  ">Enterprise</h2>
            <p className="w-[90%] text-sm text-gray-500 leading-[28px]">
            Ideal if you want to explore the crypto market or analyze sentiment
            </p>
            <h1 className="flex flex-col font-medium text-2xl lg:text-3xl py-4  ">
            Contact us
              <span className="text-sm font-light text-gray-500"> for custom solutions</span>
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

export default Plans;
