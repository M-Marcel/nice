import React from "react";
import LeftSidebar from "../../components/LeftSidebar";
import AdminHeader from "../../components/admin/Header";
import thumbsImg from "../../assets/thumbs-up.png";
import elipse from "../../assets/Ellipse2.png";
import thumbsImg2 from "../../assets/thumbs.png";
import ovalImg from "../../assets/Oval.png";
import Hide from "../../assets/svg/Hide";
import Message from "../../assets/svg/Message";
import Delete from "../../assets/svg/Delete";
import Show from "../../assets/svg/Show";

const AdminfeatureDetail = () => {
  return (
    <div className="bg-black-300 h-screen">
      <div className="bg-black-800 mx-2 h-full rounded-[30px] flex gap-5 py-4 px-4">
        <LeftSidebar dashboardType="admin" />
        <div
          className="mainDashboardFeatures bg-white h-[full] overflow-y-scroll rounded-[40px] w-[100%] lg:w-[80%] 
                lg:relative md:z-30 lg:z-40 left-[20%] px-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-black-300"
        >
          <AdminHeader />
          <div className="relative top-[80px] z-2">
            <div className="flex flex-col gap-1 w-full ">
              <div className="flex items-center gap-2 ">
                <button className="border border-gray-100 bg-blue-200 text-xs px-2 py-2 rounded-xl flex flex-col ">
                  <img
                    className="ms-2"
                    src={thumbsImg}
                    alt=""
                    width={15}
                    height={15}
                  />
                  <span className="text-blue-400">voted</span>
                </button>
                <div className="">
                  <p className="text-xs text-gray-500">December,2024</p>
                  <h2 className="font-semibold text-lg text-black-500 ">
                    Custom bot name or pfp
                  </h2>
                </div>
              </div>
              <div className="flex  gap-3  ">
                <button className="border border-gray-100 px-4 py-2 text-xs rounded-xl ">
                  78
                </button>
                <div className="flex gap-1 items-center w-full text-xs ">
                  <img src={elipse} alt="" width={18} height={5} />
                  <span>by</span>
                  <span>Suki</span>
                </div>
                <div className="w-[20%]">
                  <button className="border border-gray-910 rounded-2xl sm:w-full x text-xs font-light py-1 px-2 bg-gray-910 text-gray-200  justify-end ">
                    Mark as complete
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-3 w-full lg:w-full pt-10">
              <input
                type="text"
                placeholder="Write anything ..."
                className="w-full border border-gray-600 py-2 outline-none px-2 rounded-lg"
              />
              <button className="rounded-xl bg-blue-500 px-3 py-1 text-white">
                <Message />
              </button>
            </div>
            <div className="flex pt-4 gap-3   ">
              <button className="border border-gray-100 rounded-2xl px-3 py-1 text-xs bg-black-500 text-white ">
                All
              </button>
              <button className="border border-gray-100 rounded-2xl px-3 py-1 text-xs text-black-500 ">
                Report
              </button>
              <button className="border border-gray-100 rounded-2xl px-3 py-1 text-xs text-black-500 ">
                Hidden
              </button>
            </div>

            <div className="mt-4 border border-gray-100 bg-white  rounded-2xl">
              <div className="flex gap-2 pt-4 ps-4">
                <img src={ovalImg} alt="" />
                <div className="grid text-xs">
                  <h3>John stonez</h3>
                  <p className="text-gray-400">2 hours ago</p>
                </div>
              </div>
              <p className="ps-5 text-xs pt-3 leading-5 text-black-970 ">
                Our firm is specifically designed by founders to support other
                founders in their quest for success. In addition to providing
                financial support, we leverage our own experience,
                understanding, and insights to guide you through the
                entrepreneurial journey that we are intimately familiar with ?
              </p>

              <div className="flex pt-3 pb-3">
                <div className="ps-5 text-xs text-black-930 flex items-center gap-2 ">
                  <img
                    className="text-blue-500"
                    src={thumbsImg2}
                    alt=""
                    width={15}
                    height={15}
                  />
                  <p>400 votes</p>
                </div>
                <div className="ps-5 text-xs text-black-930 flex items-center gap-2  ">
                  <Hide />
                  <p>Hide</p>
                </div>
                <div className="ps-5 text-xs text-black-930 flex items-center gap-2  ">
                  <Delete />
                  <p>delete</p>
                </div>
              </div>
            </div>

            <div className="mt-4 border border-gray-100 bg-white  rounded-2xl">
              <div className="flex gap-2 pt-4 ps-4">
                <img src={ovalImg} alt="" />
                <div className="grid text-xs">
                  <h3>John stonez</h3>
                  <p className="text-gray-400">2 hours ago</p>
                </div>
              </div>
              <p className="ps-5 text-xs pt-3 leading-5 text-black-970 ">
                Our firm is specifically designed by founders to support other
                founders in their quest for success. In addition to providing
                financial support, we leverage our own experience,
                understanding, and insights to guide you through the
                entrepreneurial journey that we are intimately familiar with ?
              </p>

              <div className="flex pt-3 pb-3 ">
                <div className="ps-5 text-xs text-black-930 flex items-center gap-2 ">
                  <img
                    className="text-blue-500"
                    src={thumbsImg2}
                    alt=""
                    width={15}
                    height={15}
                  />
                  <p>400 votes</p>
                </div>
                <div className="ps-5 text-xs text-black-930 flex items-center gap-2  ">
                  <Show />
                  <p className="text-xs">Show</p>
                </div>
                <div className="ps-5 text-xs text-black-930 flex items-center gap-2  ">
                  <Delete />
                  <p>delete</p>
                </div>
              </div>
            </div>

            <div className="mt-4 border border-gray-100 bg-white  rounded-2xl">
              <div className="flex gap-2 pt-4 ps-4">
                <img src={ovalImg} alt="" />
                <div className="grid text-xs">
                  <h3>John stonez</h3>
                  <p className="text-gray-400">2 hours ago</p>
                </div>
              </div>
              <p className="ps-5 text-xs pt-3 leading-5 text-black-970">
                Our firm is specifically designed by founders to support other
                founders in their quest for success. In addition to providing
                financial support, we leverage our own experience,
                understanding, and insights to guide you through the
                entrepreneurial journey that we are intimately familiar with ?
              </p>

              <div className="flex pt-3 pb-3">
                <div className="ps-5 text-xs text-black-930 flex items-center gap-2 ">
                  <img
                    className="text-blue-500"
                    src={thumbsImg2}
                    alt=""
                    width={15}
                    height={15}
                  />
                  <p>400 votes</p>
                </div>
                <div className="ps-5 text-xs text-black-930 flex items-center gap-2  ">
                  <Hide />
                  <p>Hide</p>
                </div>
                <div className="ps-5 text-xs text-black-930 flex items-center gap-2  ">
                  <Delete />
                  <p>delete</p>
                </div>
              </div>
            </div>

            <div className="mt-4 border border-gray-100 bg-white  rounded-2xl">
              <div className="flex gap-2 pt-4 ps-4">
                <img src={ovalImg} alt="" />
                <div className="grid text-xs">
                  <h3>John stonez</h3>
                  <p className="text-gray-400">2 hours ago</p>
                </div>
              </div>
              <p className="ps-5 text-xs pt-3 leading-5 text-black-970 ">
                Our firm is specifically designed by founders to support other
                founders in their quest for success. In addition to providing
                financial support, we leverage our own experience,
                understanding, and insights to guide you through the
                entrepreneurial journey that we are intimately familiar with ?
              </p>

              <div className="flex text-black-930 pt-3 pb-3">
                <div className="ps-5 text-xs flex items-center gap-2 ">
                  <img
                    className=""
                    src={thumbsImg2}
                    alt=""
                    width={15}
                    height={15}
                  />
                  <p>400 votes</p>
                </div>
                <div className="ps-5 text-xs flex items-center gap-2  ">
                  <Show />
                  <p>Hide</p>
                </div>
                <div className="ps-5 text-xs flex items-center gap-2  ">
                  <Delete />
                  <p>delete</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminfeatureDetail;
