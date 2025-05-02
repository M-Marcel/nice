import React from "react";
import LeftSidebar from "../../components/LeftSidebar";
import { useDashboard } from "../../context/DashboardContext";
import AdminHeader from "../../components/admin/Header";
import AdminSearch from "../../components/AdminSearch";
import femaleImg from "../../assets/female-avatar.jpeg"
import PortfolioAdminHeader from "../../components/admin/PortfolioHeader";


const AdminPortfolio = () => {
  const { dashboardType, setDashboardType } = useDashboard();
  return (
    <div className="bg-black-300 h-screen">
      <div className="bg-black-800 mx-2 h-full rounded-[30px] flex gap-5 py-4 px-4">
        <LeftSidebar dashboardType={dashboardType} />
        <div
          className="mainDashboardFeatures bg-white h-[full] overflow-y-scroll rounded-[40px] w-[100%] lg:w-[80%] 
                lg:relative md:z-30 lg:z-40 left-[20%] px-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-black-300"
        >
          <PortfolioAdminHeader />
          <div className="relative top-[90px] z-2">
            <div className="mx-10">
              <div className="flex justify-between items-center ">
                <h2 className="mb-0 lg:mb-2 text-lg lg:text-xl font-medium text-black-990">
                  Portfolio templates
                </h2>
                <button className="flex items-center justify-center  gap-2 bg-gray-700 border border-gray-900 rounded-xl py-3 px-3">
                  <span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 1.3335V14.6668"
                        stroke="#141B34"
                        stroke-width="1.3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.33337 8H14.6667"
                        stroke="#141B34"
                        stroke-width="1.3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-xs lg:text-sm text-black-500">Add template</span>
                </button>
              </div>

              <div className="flex flex-wrap justify-between items-center w-[100%]  pt-6">
                <div className="flex gap-3 w-[100%] lg:w-[30%] pb-3">
                  <button className="text-sm rounded-3xl px-5 py-2 bg-black-990  text-white">Active</button>
                  <button className="text-sm border border-gray-900 rounded-3xl py-2 px-4 font-medium ">Deactivated</button>
                </div>
                <div className="flex flex-wrap w-[100%]  justify-between items-center gap-3 lg:gap-2 lg:w-[60%]">
                  <div className="">
                  <AdminSearch />
                  </div>
                  <div className="flex text-black-200 px-3 py-3   text-sm rounded-2xl border border-gray-900 ">
                        <p className="ps-2">Minimal Portfolios </p>
                        <svg
                          className="w-3.5 h-3.5 ms-3 mt-1 "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </div>

                      <div className="flex justify-between text-gray-500 px-4 py-3 text-sm rounded-2xl border border-gray-900 ">
                        <p className="">Sort by </p>
                        <svg
                          className="w-3.5 h-3.5 ms-3 mt-1 text-black-200 "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </div>
                </div> 
              </div>

                <div className="flex flex-wrap w-[100%] justify-between mt-6 lg:mt-8 gap-5  ">
                  <div className="flex flex-col ">
                    <img src={femaleImg} alt="" />
                    <h2 className="text-lg font-bold pt-2">Minimalist</h2>
                    <p className="text-sm pb-2 text-gray-200">Ideal for creative</p>
                    <div className="flex gap-3 items-center justify-start ">
                    <button className="flex justify-center  w-[23%]  text-sm rounded-xl border border-blue-200 px-4 py-1 ">View</button>
                    <button className="flex justify-center  w-[23%]  text-sm rounded-xl bg-black-990 text-white px-4 py-1 ">Use</button>
                    </div>
                  </div>

                  <div className="flex flex-col ">
                    <img src={femaleImg} alt="" />
                    <h2 className="text-lg font-bold pt-2">Creative</h2>
                    <p className="text-sm pb-2 text-gray-200">Ideal for creative</p>
                    <div className="flex gap-3 items-center justify-start ">
                    <button className="flex justify-center  w-[23%]  text-sm rounded-xl border border-blue-200 px-4 py-1 ">View</button>
                    <button className="flex justify-center  w-[23%]  text-sm rounded-xl bg-black-990 text-white px-4 py-1 ">Use</button>
                    </div>
                  </div>

                  <div className="flex flex-col ">
                    <img src={femaleImg} alt="" />
                    <h2 className="text-lg font-bold pt-2">Professional</h2>
                    <p className="text-sm pb-2 text-gray-200">Ideal for creative</p>
                    <div className="flex gap-3 items-center justify-start ">
                    <button className="flex justify-center  w-[23%]  text-sm rounded-xl border border-blue-200 px-4 py-1 ">View</button>
                    <button className="flex justify-center  w-[23%]  text-sm rounded-xl bg-black-990 text-white px-4 py-1 ">Use</button>
                    </div>
                  </div>

                  <div className="flex flex-col ">
                    <img src={femaleImg} alt="" />
                    <h2 className="text-lg font-bold pt-2">Standard</h2>
                    <p className="text-sm pb-2 text-gray-200">Ideal for creative</p>
                    <div className="flex gap-3 items-center justify-start ">
                    <button className="flex justify-center  w-[23%]  text-sm rounded-xl border border-blue-200 px-4 py-1 ">View</button>
                    <button className="flex justify-center  w-[23%]  text-sm rounded-xl bg-black-990 text-white px-4 py-1 ">Use</button>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPortfolio;
