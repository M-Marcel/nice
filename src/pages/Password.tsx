import React from "react";
import Button from "../components/Button";
import ComputerIcon from "../assets/computer-white.png";
import UserOneIcon from "../assets/user-single.png";
import LockIcon from "../assets/square-lock-02.png";
import CustomiseIcon from "../assets/customize.png";
import LaptopIcon from "../assets/laptop-programming.png";
import LeftSidebar from "../components/LeftSidebar";

const Password = () => {
  return (
    <div className="flex flex-col lg:flex-row px-2">
      <LeftSidebar />
      <div className="px-4 w-[100%] lg:w-[80%] lg:relative left-[18%]">
        <div className="hidden lg:flex z-50 items-center justify-end w-[90%] md:w-[92%] lg:w-[76%] bg-white py-4 px-2 fixed">
          <Button
            className="hidden lg:flex items-center gap-2 bg-black-500 text-sm text-white px-4 py-4
                     rounded-xl"
          >
            <img src={ComputerIcon} alt="compIcon" width={20} height={20} />
            Beta
          </Button>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <div className="w-[100%] lg:w-[15%] px-4 py-4 h-auto lg:h-[100vh]">
            <div className="relative flex flex-col gap-5 top-[50px]">
              <a href="/" className="flex items-center gap-2">
                <img src={UserOneIcon} alt="userone" width={25} height={25} />
                <span className="text-lg">Profile</span>
              </a>
              <a href="/" className="flex items-center gap-2">
                <img src={LockIcon} alt="userone" width={25} height={25} />
                <span className="text-lg text-gray-500">Password</span>
              </a>
              <a href="/" className="flex items-center gap-2">
                <img src={CustomiseIcon} alt="userone" width={25} height={25} />
                <span className="text-lg text-gray-500">Notifications</span>
              </a>
              <a href="/" className="flex items-center gap-2">
                <img src={LaptopIcon} alt="userone" width={25} height={25} />
                <span className="text-lg text-gray-500">Early actions</span>
              </a>
            </div>
          </div>
          {/* commenr */}
          <div className="w-[100%] lg:w-[80%] px-2 py-4 h-[100vh]">
            <div className="relative top-[40px]">
              <div className="flex flex-col lg:flex-row gap-4 justify-between">
                <form className="w-[100%] lg:w-[50%]">
                  <div className="flex flex-col lg:flex-row justify-between items-center">
                      <div className="flex w-[100%] lg:w-[90%] flex-col mb-3">
                        <label className="mb-1 text-sm text-gray-500">
                          Current
                        </label>
                        <input
                          type="text"
                          className="border py-2 px-2 w-[100%] border-gray-600 outline-0 rounded-lg"
                        />
                      </div>
                  </div>
                  <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="flex w-[100%] lg:w-[90%] flex-col mb-3">
                      <label className="mb-1 text-sm text-gray-500">New</label>
                      <input
                        type="text"
                        className="border px-2 py-2 w-[100%] border-gray-600 outline-0 rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="w-[100%] lg:w-[90%] flex flex-row-reverse  mt-2">
                    <Button className="custom-bg px-6 py-4 rounded-xl text-white text-sm">
                      Save
                    </Button>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Password;
