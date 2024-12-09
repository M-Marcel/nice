import React from "react";
import { useState } from "react";
import thumbUp from "../assets/thumbs-up.png";
import Modals from "../components/Modals";
import Dropdown from "../components/Dropdown";
import { votedBots } from "../constants";

const FeaturesHeader = () => {
  const [email, setEmail] = useState<string>("");
  const BlockOptions = ["Block1", "Block2", "Block3"];
  const TagOptions = ["Tag1", "Tag2", "Tag3"];
  return (
    <div>
      <Modals email={email} setEmail={setEmail} />
      <div className="flex w-5/6 mt-12">
        <div className="px-8 w-full lg:px-7.5 xl:px-10 lg:mx-10 ">
          <div className="flex justify-between items-center">
            <div className="w-[70%] gap-3 flex ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                placeholder="Search for anything"
                className="w-2/3 border border-gray-600 py-2 outline-none px-3 mx-1 rounded-md"
              />
              <div className="flex gap-2">
                <Dropdown options={BlockOptions}>Status</Dropdown>
                <Dropdown options={TagOptions}>Tags</Dropdown>
              </div>
            </div>
          </div>

          <div className="px-3 lg:px-1  mt-[35px] w-2/3 ">
            <div className="grid grid-cols  ">
              {votedBots.map((item) => (
                <div key={item.id}>
                  <div className="flex flex-col border border-gray-600 rounded-2xl px-4 py-4 mb-5  ">
                    <div className="flex gap-3 ">
                      <div className="block ">
                        <div className="bg-gray-50 border border-gray-600 outline-none  rounded-2xl px-4 py-2  mb-2">
                          <img
                            src={thumbUp}
                            alt="featuresFrame"
                            width={24}
                            height={24}
                          />
                          <p>{item.btnText}</p>
                        </div>
                        <button className="bg-gray-50 text-sm border border-gray-600 outline-none rounded-2xl px-6 py-2">
                          78
                        </button>
                      </div>
                      <div className="block my-3">
                        <p className="text-sm">{item.createdAt}</p>
                        <h3 className="text-lg font-bold">{item.botName}</h3>
                        <div className="flex gap-2 mt-5">
                          <img
                            src={item.image}
                            alt="elipse"
                            className="w-[20px] h-[20px]"
                          />
                          <p>{item.author}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-4xl w-1/2 ">
          <h1>Submit idea or feedback</h1>
          <form className="w-full">
            <div className="mb-2 pt-10 ">
              <label className="block  text-sm font-medium text-gray-500 ">
                Title
              </label>
              <input
                type="text"
                className=" border border-gray-300 outline-none text-black-200 text-sm rounded-lg w-3/4 mb-3  p-2.5"
                placeholder="Custom bot name"
              />
              <label className="block mb-1 text-sm font-medium text-gray-500 ">
                Description
              </label>

              <textarea
                id="message"
                rows={6}
                cols={5}
                className="block p-2.5 w-3/4 text-sm text-gray-900 rounded-lg border border-gray-300"
                placeholder="Leave a comment..."
              />
            </div>
            <div className="mb-2 pt-4">
              <label className="block mb-1 text-sm font-medium text-gray-500 ">
                Tags
              </label>
              <select
                id="countries"
                className="block  border border-gray-300 outline-none text-gray-800 text-sm rounded-lg w-3/4 p-2.5  "
              >
                <option>personal</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
              <button className="w-3/4 border outline-none border-gray-300 rounded-2xl mt-4 py-3 text-sm text-white  features-join ">Join Beta</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeaturesHeader;
