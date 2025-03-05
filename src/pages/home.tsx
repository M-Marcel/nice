import { useState } from "react";
import CommunityBot from "../components/communityBot";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Heading from "../components/Heading";
import Hero from "../components/Hero";
import Join from "../components/Join";
import Modals from "../components/Modals";
import { useModal } from "../context/ModalContext";
import Button from "../components/Button";
import BotDesign2 from "../assets/botdesigns.png";
import Social from "../components/social";
import TawkTo from "../components/TawkTo";
import ShowCase from "../components/ShowCase";
import Plans from "../components/Plans";
import CommunityBotPlan from "../components/communityBotPlan copy";

import WorkFlows from "../components/Workflows";
import Remittance from "../components/Remittance";
import NoCode from "../components/NoCode";

const Home = () => {
  const { setActiveModal } = useModal();
  const [email, setEmail] = useState<string>("");

  const [activeTab, setActiveTab] = useState<string>("Showcase");
  const tabs = [
    { name: "Showcase" },
    { name: "Nocode" },
    { name: "Workflow" },
    { name: "Remittance" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Showcase":
        return <ShowCase />;
      case "Nocode":
        return <NoCode />;
      case "Workflow":
        return <WorkFlows />;
      case "Remittance":
        return <Remittance />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="home">
        <Hero>
          <Header
            openSignUpModal={() => setActiveModal("signup")}
            openLoginModal={() => setActiveModal("login")}
          />
          <Heading className="">
            <div className="relative top-[170px]">
              <div className="flex flex-col items-center justify-center ">
                {/* <Social /> */}
                <div className="flex flex-col items-center max-w-lg justify-center">
                  <h2 className="font-title text-5xl mb-3 text-black-300 text-center  leading-none">
                    Build, Automate & Scale. No Code Required
                  </h2>
                  {/* <div className="mb-3">
                    <img src={Zero} alt="zero" width={250} height={80} />
                  </div> */}
                  <p className="text-center w-auto lg:w-[84%] text-black-400 mb-3">
                    Showcase your work with a sleek portfolio or automate
                    workflows with powerful bots. All in one platform.
                  </p>
                  <div>
                    <Button
                      className="custom-bg text-white font-bold text-xs px-5 py-3 rounded-xl"
                      onClick={() => setActiveModal("signup")}
                    >
                      Get Started For Free
                    </Button>
                  </div>
                </div>
                <div className="mt-4 px-4 lg:px-[0]">
                  <img
                    src={BotDesign2}
                    alt="botDesign2"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </div>
          </Heading>
        </Hero>
        {/* mapping logic goes here */}
        {/* {tabs.map((tab) => (
                  <div
                    key={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={`flex items-center gap-3  text-sm text-left  ${
                      activeTab === tab.name
                        ? "border border-gray-100/85 rounded-lg py-1 px-1 text-gray-200 font-medium"
                        : "text-gray-500 hover:text-black "
                    }`}
                  >
                    {tab.name}
                  </div>
                ))} */}
        <div className="relative top-[350px] flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center">
            <ul className="flex flex-wrap text-xs font-medium text-center text-gray-500">
              <li className="me-2">
                <a
                  href="/showcase"
                  className=" px-3 py-2 text-white bg-black-500 rounded-3xl "
                >
                  Portfolios
                </a>
              </li>
              <li className="me-2">
                <a
                  href="/no-code"
                  className=" border border-gray-100 px-3 py-2 text-black-500  rounded-3xl "
                >
                  No-Code Builder
                </a>
              </li>
              <li className="me-2">
                <a
                  href="/workflows"
                  className=" border border-gray-100 px-3 py-2 text-black-500  rounded-3xl "
                >
                  AI Automation
                </a>
              </li>
              <li className="me-2">
                <a
                  href="/remittance"
                  className=" border border-gray-100 px-3 py-2 text-black-500  rounded-3xl "
                >
                  Payments & Remittance
                </a>
              </li>
            </ul>
          </div>
          <ShowCase />
        </div>
        {/* mapping logic goes here */}
        <Plans />
        {/* <Purpose /> */}
        <CommunityBotPlan />
        <div className="relative top-[600px]">
          <Join />
          <Footer />
        </div>
        {/* Tawk.to Script */}
        <TawkTo />
        Modals
        <Modals email={email} setEmail={setEmail} />
      </div>
    </>
  );
};

export default Home;
