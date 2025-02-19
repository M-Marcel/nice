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
                  <div className="flex flex-col w-[13%] md:w-[13%] lg:w-[8%]  ">
                    <button className=" bg-blue-300  border border-blue-200 px-2 py-2 rounded-2xl  ">
                      <img
                        className=" ms-2 "
                        src={thumbsImg}
                        alt=""
                        width={15}
                        height={15}
                      />
                      <p className="text-xs text-blue-400">voted</p>
                    </button>
                    <button className="bg-gray-700 text-xs border border-gray-100 mt-1 px-4 py-2 outline-none rounded-2xl">
                      78
                    </button>
                  </div>

                  <div className="text-xs pt-5">
                    <p className="">December,2025</p>
                    <h3 className="text-lg">Custom bot name or pfp</h3>
                  </div>

                  <div className="flex justify-between items-baselne  gap-8">
                    <div className="flex flex-row gap-2 pt-3">
                      <img src={elipse} alt="" width={15} height={10} />
                      <p className="text-xs">by suki</p>
                    </div>
                    <button className="text-xs bg-green-100 text-white rounded-2xl w-[12%] ">
                      Completed
                    </button>
                  </div>
                  <div className="flex gap-3 w-full lg:w-[97%] pt-20">
                    <input
                      type="text"
                      placeholder="Write anything ..."
                      className="w-full border border-gray-600 py-2 outline-none px-2 rounded-lg"
                    />
                    <button className="rounded-xl bg-blue-500 px-4 py-1 text-white">
                      R
                    </button>
                  </div>
                  <div className="mt-4 border border-gray-100 bg-white  rounded-2xl">
                    <div className="flex gap-2 pt-4 ps-4">
                      <img src={ovalImg} alt="" />
                      <div className="grid text-xs">
                        <h3>John stonez</h3>
                        <p className="font-thin">2 hours ago</p>
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

                    <div className="flex pt-3 pb-3">
                      <div className="ps-5 text-xs flex items-center gap-2 ">
                        <img
                          className="text-blue-500"
                          src={thumbsImg2}
                          alt=""
                          width={15}
                          height={15}
                        />
                        <p>400 votes</p>
                      </div>
                      <div className="ps-5 text-xs flex items-center gap-2  ">
                        <img src={thumbsImg2} alt="" width={15} height={15} />
                        <p>report</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 border border-gray-100 bg-white  rounded-2xl">
                    <div className="flex gap-2 pt-4 ps-4">
                      <img src={ovalImg} alt="" />
                      <div className="grid text-xs">
                        <h3>John stonez</h3>
                        <p className="font-thin">2 hours ago</p>
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

                    <div className="flex pt-3 pb-3">
                      <div className="ps-5 text-xs flex items-center gap-2 ">
                        <img
                          className="text-blue-500"
                          src={thumbsImg2}
                          alt=""
                          width={15}
                          height={15}
                        />
                        <p>400 votes</p>
                      </div>
                      <div className="ps-5 text-xs flex items-center gap-2  ">
                        <img src={thumbsImg2} alt="" width={15} height={15} />
                        <p>report</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 border border-gray-100 bg-white  rounded-2xl">
                    <div className="flex gap-2 pt-4 ps-4">
                      <img src={ovalImg} alt="" />
                      <div className="grid text-xs">
                        <h3>John stonez</h3>
                        <p className="font-thin">2 hours ago</p>
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

                    <div className="flex pt-3 pb-3">
                      <div className="ps-5 text-xs flex items-center gap-2 ">
                        <img
                          className="text-blue-500"
                          src={thumbsImg2}
                          alt=""
                          width={15}
                          height={15}
                        />
                        <p>400 votes</p>
                      </div>
                      <div className="ps-5 text-xs flex items-center gap-2  ">
                        <img src={thumbsImg2} alt="" width={15} height={15} />
                        <p>report</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 border border-gray-100 bg-white  rounded-2xl mb-48">
                    <div className="flex gap-2 pt-4 ps-4">
                      <img src={ovalImg} alt="" />
                      <div className="grid text-xs">
                        <h3>John stonez</h3>
                        <p className="font-thin">2 hours ago</p>
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

                    <div className="flex pt-3 pb-3">
                      <div className="ps-5 text-xs flex items-center gap-2 ">
                        <img
                          className="text-blue-500"
                          src={thumbsImg2}
                          alt=""
                          width={15}
                          height={15}
                        />
                        <p>400 votes</p>
                      </div>
                      <div className="ps-5 text-xs flex items-center gap-2  ">
                        <img src={thumbsImg2} alt="" width={15} height={15} />
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
