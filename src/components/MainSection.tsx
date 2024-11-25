import SquqreImg from "../assets/square.png";
import AlertIcon from "./AlertCard";
import OpenSeaIcon from "./OpenSeaCard";
import SwapTokenIcon from "./SwapToken";
import TelegramIcon from "./Telegram";

const MainSection = () => {
  return (
    <div className=" grid grid-cols-[8fr_3fr] rows-[70px_1fr] items-center  ">
      <div className="sidebar-left">hdhdhdhdddgdgdg</div>

      <div className="sidebar-right border border-gray-100  rounded-lg focus:outline-none focus:border-blue-600 transition mt-3">
        <div className="flex gap-3 pl-5 pt-3 ">
          <div className="relative w-[3/4] pt-3 max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-[2/3] pl-10 pr-4 py-2 border border-gray-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-none focus:border-blue-300"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.9 14.32a8 8 0 111.414-1.414l4.293 4.293a1 1 0 01-1.414 1.414l-4.293-4.293zm-5.9-2.32a6 6 0 100-12 6 6 0 000 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <img className="" src={SquqreImg} alt="logo" width={40} height={50} />
        </div>

        <div className="flex flex-col items-center w-[3/4] p-4 ">
          <div className="flex space-x-3  ">
            <button className="px-3  text-white bg-black-500 rounded-full  hover:text-white-600 border-b-2 border-black focus:outline-none focus:border-blue-600 transition">
              All
            </button>
            <button className="px-2 py-2  text-black-600 border border-gray-100 rounded-full    hover:text-blue-600   focus:outline-none focus:border-blue-600 transition">
              Trigger
            </button>
            <button className="px-2 py-2 text-black-600 border border-gray-100 rounded-full  hover:text-blue-600   focus:outline-none focus:border-blue-600 transition">
              Data
            </button>
            <button className="px-2 py-2 text-black-600 border border-gray-100 rounded-full  hover:text-blue-600   focus:outline-none focus:border-blue-600 transition">
              Logic
            </button>
            <button className="px-2 py-2 text-black-600 border border-gray-100 rounded-full  hover:text-blue-600   focus:outline-none focus:border-blue-600 transition">
              Action
            </button>
          </div>
        </div>

        <div className="">
          <AlertIcon />
          <OpenSeaIcon />
          <TelegramIcon />
          <SwapTokenIcon />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
