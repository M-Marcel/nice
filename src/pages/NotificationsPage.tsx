import React from 'react'
import Button from "../components/Button";
import ComputerIcon from "../assets/computer-white.png";
import UserOneIcon from "../assets/user-single.png";
import LockIcon from "../assets/square-lock-02.png";
import CustomiseIcon from "../assets/customize.png";
import LaptopIcon from "../assets/laptop-programming.png";
import LeftSidebar from '../components/LeftSidebar'

const NotificationsPage = () => {
  return (
    <div className='flex flex-col lg:flex-row px-2'>
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
            <div className="relative flex flex-col gap-5 top-[60px]">
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
          <div className="w-[100%] lg:w-[80%] px-2 py-4 h-[100vh]">
            <div className="relative top-[40px]">
                <div className="flex flex-col lg:flex-row gap-4 justify-between">
                <form className="w-[100%] lg:w-[60%]">
                  <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="flex w-[100%] lg:w-[90%] flex-col mb-3">
                      <p className="mb-3 text-sm text-gray-500">Lanepact</p>
                      <label className="mb-1 w-[100%] text-sm text-gray-500 flex flex-row justify-between item-center cursor-pointer">
                        <span className=" text-lg font-medium text-black-500">
                        Updates from Lanepact
                        </span>
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                        />
                        <div className="relative w-11 h-6 bg-gray-900   rounded-full  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all  peer-checked:bg-green-500"></div>
                      </label>
                    </div>
                  </div>
                  <div className="flex w-[100%] lg:w-[90%] flex-col mb-3 mt-7">
                  <p className="mb-1 text-sm text-gray-500">Account activity</p>
                  <label className="mb-3 w-[100%] text-sm text-gray-500 flex flex-row justify-between item-center cursor-pointer">
                        <span className="text-lg font-medium text-black-500">
                        When someone uses my bot
                        </span>
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="relative w-11 h-6 bg-gray-900  rounded-full  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all  peer-checked:bg-green-500"></div>
                      </label>
                      <label className="mb-3 w-[100%]  text-sm text-gray-500 flex flex-row justify-between item-center cursor-pointer">
                        <span className="text-lg font-medium text-black-500">
                        When someone mentions me
                        </span>
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="relative w-11 h-6 bg-gray-900  rounded-full  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all  peer-checked:bg-green-500"></div>
                      </label>
                      <label className="mb-3 w-[100%] text-sm text-gray-500 flex flex-row justify-between item-center cursor-pointer">
                        <span className="text-lg font-medium text-black-500">
                        When someone replies to one of my comments
                        </span>
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="relative w-11 h-6 bg-gray-900  rounded-full  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all  peer-checked:bg-green-500"></div>
                      </label>
                      <label className="mb-3 w-[100%] text-sm text-gray-500 flex flex-row justify-between gap-5 item-center cursor-pointer">
                        <span className="text-lg font-medium text-black-500">
                        When someone replies to one of my comments
                        </span>
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="relative w-11 h-6 bg-gray-900  rounded-full  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all  peer-checked:bg-green-500"></div>
                      </label>
                      <label className="mb-3 w-[100%] text-sm text-gray-500 flex flex-row justify-between item-center cursor-pointer">
                        <span className="text-lg font-medium text-black-500">
                        When someone replies to one of my comments
                        </span>
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="relative w-11 h-6 bg-gray-900  rounded-full  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all  peer-checked:bg-green-500"></div>
                      </label>
                  </div>
                </form>
                </div>
            </div>
          </div>
      </div>
      </div>
    </div>
  )
}

export default NotificationsPage
