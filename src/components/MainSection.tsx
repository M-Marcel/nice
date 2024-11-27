import SquqreImg from "../assets/square.png";
import AlertIcon from "./AlertCard";
import OpenSeaIcon from "./OpenSeaCard";
import SwapTokenIcon from "./SwapToken";
import TelegramIcon from "./Telegram";
import voiceidImg from '../assets/voice-iD.png'
import squareImg from '../assets/square-unlock-01 (1).png'
import removeImg from '../assets/remove-01 (1).png'
import addImg from '../assets/add-01.png'

const MainSection = () => {
  return (
    <div className=" grid grid-cols-[8fr_3fr]  rows-[70px_2fr] items-center  ">
      <div className="sidebar-left pt-20 ">
        <div className=""> </div>
        <div className="absolute bottom-0 left-0  w-lvh inset-x-0   outline-none border-t  border-blue-200 pl-2 w-40 flex gap-2">
          <div>
          <img className="addimg" src={addImg} alt="logo" width={30} height={30} />
            
          </div>

          <div>
          <img className="removeimg" src={removeImg} alt="logo" width={30} height={30} />
          </div>

          <div>
          <img className="voiceimg" src={voiceidImg} alt="logo" width={30} height={30} />
          </div>

          <div>
          <img className="squareimg" src={squareImg} alt="logo" width={30} height={30} />
          </div>


        </div>
      </div>

      <div className="sidebar-right border border-gray-100 w-90 mx-3  rounded-lg focus:outline-none focus:border-blue-600 transition mt-3">
        <div className="flex gap-3 pl-2 ">
          <div className="relative  pt-2 max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-64 pl-10 pr-4 py-2 border border-gray-100 rounded-xl focus:outline-none focus:ring-1 focus:ring-none focus:border-blue-300"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400  "
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
          <img
            className="px-auto mt-1"
            src={SquqreImg}
            alt="logo"
            width={50}
            height={40}
          />
        </div>

        <div className="flex flex-col items-center w-[4/5] p-2  ">
          <div className="flex space-x-1   ">
            <ul className="flex flex-wrap mb-2 text-xs font-medium text-center text-gray-500  border-gray-200 dark:border-gray-700 dark:text-gray-400">
              <li className="me-2">
                <a className="inline-block px-5 py-2  text-white bg-black-500 rounded-full  hover:text-white-600  border-black focus:outline-none focus:border-blue-600 transition">
                  All
                </a>
              </li>
              <li className="me-2">
                <a className=" inline-block px-3 py-2 text-black-600 border border-gray-100 rounded-full    hover:text-blue-600   focus:outline-none focus:border-blue-600 transition">
                  Trigger
                </a>
              </li>
              <li className="me-2">
                <a className=" inline-block px-3 py-2 text-black-600 border border-gray-100 rounded-full  hover:text-blue-600   focus:outline-none focus:border-blue-600 transition">
                  Data
                </a>
              </li>
              <li className="me-2">
                <a className=" inline-block px-2 py-2 text-black-600 border border-gray-100 rounded-full  hover:text-blue-600   focus:outline-none focus:border-blue-600 transition">
                  Logic
                </a>
              </li>
              <li className="me-1">
                <a className=" inline-block px-2 py-2 text-black-600 border border-gray-100 rounded-full  hover:text-blue-600   focus:outline-none focus:border-blue-600 transition">
                  Action
                </a>
              </li>
            </ul>
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
