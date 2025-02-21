import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import { useModal } from "../context/ModalContext";
import FeatureFrame from "../assets/featuresframe.png";
import Heading from "../components/Heading";
import thumbsImg from "../assets/thumbs-up.png";
import thumbsImg2 from "../assets/thumbs.png";
import ovalImg from "../assets/Oval.png";
import elipse from "../assets/elipse.png";
import FormDetails from "../components/FormDetails";
import Join from "../components/Join";
import Footer from "../components/Footer";
import Message from "../assets/svg/Message";
import Flag from "../assets/svg/Flag";

const FeatureDetails = () => {
  const { setActiveModal } = useModal();
  return (
    <>
      <div>
        <Hero>
          <Header
            openSignUpModal={() => setActiveModal("signup")}
            openLoginModal={() => setActiveModal("login")}
          />
          <Heading className="">
            <div className="relative top-[150px]">
              <div className="flex flex-col  lg:flex-row justify-between gap-8 mx-[8px] lg:mx-[0]">
                <div className="flex flex-col px-12 w-[auto] lg:w-[60%]  ">
                  <div className="flex flex-col gap-1 w-full ">
                    <div className="flex flex-col items-start gap-2 ">
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
                      <button className="border border-gray-100 px-4 py-2 text-xs rounded-xl ">
                        78
                      </button>
                      <div className="">
                        <p className="text-xs text-gray-500">December,2024</p>
                        <h2 className="font-semibold text-lg text-black-500 ">
                          Custom bot name or pfp
                        </h2>
                      </div>
                    </div>
                    <div className="flex  gap-3  ">
                      
                      <div className="flex gap-1 items-center w-full text-xs ">
                        <img src={elipse} alt="" width={18} height={5} />
                        <span>by</span>
                        <span>Suki</span>
                      </div>
                      <div className="w-[15%]">
                        <button className="border border-gray-910 rounded-2xl sm:w-full x text-xs font-light py-1 px-2 bg-green-100 text-white  justify-end ">
                          completed
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 text-xs w-full lg:w-[97%] pt-12">
                    <input
                      type="text"
                      placeholder="Write anything ..."
                      className="w-full border border-gray-600 py-2 outline-none px-2 rounded-lg"
                    />
                    <button className="rounded-xl bg-blue-500 px-3 py-1 text-white">
                      <Message />
                    </button>
                  </div>
                  <div className="mt-4 border border-gray-100 bg-white  rounded-2xl">
                    <div className="flex gap-2 pt-4 ps-4">
                      <img src={ovalImg} alt="" />
                      <div className="grid text-xs">
                        <h3>John stonez</h3>
                        <p className="text-gray-400 ">2 hours ago</p>
                      </div>
                    </div>
                    <p className="ps-5 text-xs pt-3 leading-5 font-light ">
                      Our firm is specifically designed by founders to support
                      other founders in their quest for success. In addition to
                      providing financial support, we leverage our own
                      experience, understanding, and insights to guide you
                      through the entrepreneurial journey that we are intimately
                      familiar with ?
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
                      <Flag />
                        <p>report</p>
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
                    <p className="ps-5 text-xs pt-3 leading-5 font-light">
                      Our firm is specifically designed by founders to support
                      other founders in their quest for success. In addition to
                      providing financial support, we leverage our own
                      experience, understanding, and insights to guide you
                      through the entrepreneurial journey that we are intimately
                      familiar with ?
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
                      <Flag />
                        <p>report</p>
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
                    <p className="ps-5 text-xs pt-3 leading-5 font-light">
                      Our firm is specifically designed by founders to support
                      other founders in their quest for success. In addition to
                      providing financial support, we leverage our own
                      experience, understanding, and insights to guide you
                      through the entrepreneurial journey that we are intimately
                      familiar with ?
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
                        <Flag />
                        <p>report</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 border border-gray-100 bg-white  rounded-2xl mb-48">
                    <div className="flex gap-2 pt-4 ps-4">
                      <img src={ovalImg} alt="" />
                      <div className="grid text-xs">
                        <h3>John stonez</h3>
                        <p className="text-gray-400">2 hours ago</p>
                      </div>
                    </div>
                    <p className="ps-5 text-xs pt-3 leading-5 font-light">
                      Our firm is specifically designed by founders to support
                      other founders in their quest for success. In addition to
                      providing financial support, we leverage our own
                      experience, understanding, and insights to guide you
                      through the entrepreneurial journey that we are intimately
                      familiar with ?
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
                      <Flag />
                        <p>report</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[auto] lg:w-[40%] items-baseline">
                  <FormDetails onNewFeature={() => {}} />
                </div>
              </div>
            </div>
          </Heading>
          <Join />
          <Footer />
        </Hero>
      </div>
    </>
  );
};

export default FeatureDetails;
