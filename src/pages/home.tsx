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

  const [activeTab, setActiveTab] = useState<string>("Portfolios");
  const tabs = [
    { name: "Portfolios" },
    { name: "No-code Builder" },
    { name: "AI Automation" },
    { name: "Payments & Remittance" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Portfolios":
        return <ShowCase />;
      case "No-code Builder":
        return <NoCode />;
      case "AI Automation":
        return <WorkFlows />;
      case "Payments & Remittance":
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
                  <p className="text-center w-auto lg:w-[84%] text-black-400 mb-3">
                    Showcase your work with a sleek portfolio or automate
                    workflows with powerful bots. All in one platform.
                  </p>
                  <div>
                    <Button
                      className="custom-bg text-white font-bold text-sm px-5 py-4 rounded-xl"
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
        <div className="relative top-[240px] flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center">
            <ul className="flex flex-wrap text-xs font-medium text-center text-gray-500">
              <div className="flex gap-4 mb-4">
              {tabs.map((tab) => (
                  <li
                    key={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={`flex items-center gap-3 text-xs cursor-pointer text-black-500 text-left ${activeTab === tab.name
                      ? "text-white bg-black-600 px-4 py-2  rounded-full font-medium"
                      : "text-black-500 border border-gray-100 rounded-full px-4 py-2  hover:text-black"
                      }`}
                  >
                    {tab.name}
                  </li>
                ))} 
              </div>
            </ul>
            <div className="w-full">{renderContent()}</div>
          </div>
          
        </div>
        {/* mapping logic ends here */}
        <Plans />
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
