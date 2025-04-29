import portfolioImg from "../assets/portfolio-mobile1.png";
import thunderGreen from "../assets/thunder-green.png";
import thunderBlue from "../assets/thunder-blue.png";
import thunderPurple from "../assets/thunder-purple.png";

const ShowCase = () => {
  return (
      <div className="flex flex-col max-w-3xl items-center text-center justify-center pt-8 ">
        <h2 className="font-title mb-3 text-xl w-[70%] lg:w-[70%] lg:text-4xl text-black-300 leading-[25px] text-center font-medium ">
          Showcase your work with beautifully crafted templates.
        </h2>

        <div className="purpose-bg mt-2 flex flex-col relative h-[95vh] w-[100%] items-center justify-center border border-gray-100 px-10 rounded-2xl">
        <img src={portfolioImg} width={300} height={300} className="pt-5" alt="" />

        <div className="flex w-[100%] lg:w-[90%] items-start justify-center text-start absolute bottom-[90px]  lg:left-12 lg:px-2">
          <div className="flex flex-col  w-[31%]">
          <img src={thunderGreen} width={30} height={30} alt="" />
          <h2 className="w-[80%] text-sm py-2 text-black-300 ">
          Instant setup
            </h2>
            <p className="text-xs w-[90%]  lg:w-[80%] leading-4 text-gray-970 ">
            Pick a template, customize, and publish in minutes.
            </p>
          </div>

          <div className="flex flex-col w-[30%]">
            <img src={thunderBlue} width={30} height={30} alt="" />
            <h2 className="flex flex-wrap items-center justify-center w-[80%]  lg:w-[80%] text-sm py-2 text-black-300 ">
            Custom Domains <span className="ps-1"> <button className="text-xs text-white bg-black-500 rounded-3xl px-2 py-1 ">soon</button> </span>
            </h2>
            <p className="text-xs w-[90%] lg:w-[70%] leading-4 text-gray-970 ">
            Use a free subdomain or connect your own.
            </p>
          </div>

          <div className="flex flex-col w-[31%]">
            <img src={thunderPurple} width={30} height={30} alt="" />
            <h2 className="w-[1005] lg:w-[75%] text-sm py-2 text-black-300 ">
            AI-Powered Builder
            </h2>
            <p className="text-xs lg:w-[80%] leading-4 text-gray-970 ">
            Let AI craft your portfolio effortlessly.
            </p>
          </div>
        </div>
        <button className="flex items-center text-xs mt-24 ">
          Create a portfolio
          <span className="px-2" >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.0001 12L4.00012 12"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 7L19.2929 11.2929C19.6262 11.6262 19.7929 11.7929 19.7929 12C19.7929 12.2071 19.6262 12.3738 19.2929 12.7071L15 17"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </button>
        </div>
      </div>
  );
};

export default ShowCase;
