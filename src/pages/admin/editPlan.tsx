import { useState } from "react";
import Button from "../../components/Button";
import LeftSidebar from "../../components/LeftSidebar";
import BasicPlan from "../../components/Basic";
import PremiumPlan from "../../components/Premium";
import ProPlan from "../../components/ProAdmin";
import PlatinumPlan from "../../components/Platinum";
import { useLocation } from "react-router-dom";

// Import icons
// import ProfileIcon from '../assets/svg/UserIcon';
// import PasswordIcon from "../assets/svg/LockIcon";
// import NotificationsIcon from "../assets/svg/NotifyIcon";
// import EarlyAccessIcon from "../assets/svg/EarlyAccessIcon";

const EditPlan = () => {
  const [activeTab, setActiveTab] = useState<string>("Basic"); // Track active tab
  const userRole = "admin";
  const location = useLocation;

  const tabs = [
    { name: "Basic", },
    { name: "Premium",  },
    { name: "Pro", },
    { name: "Platinum", },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Basic":
        return <BasicPlan />;
      case "Premium":
        return <PremiumPlan />;
      case "Pro":
        return <ProPlan />;
      case "Platinum":
        return <PlatinumPlan />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row px-2">
      <LeftSidebar userRole={userRole}  />
      <div className="px-4 w-full lg:w-4/5 lg:relative left-[19%]">
        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          <div className="w-full lg:w-[12%] px-4 py-4 fixed bg-white z-30">
            <div className="relative flex flex-col gap-4 top-[40px] bg-white pb-2">
              <div className="font-medium text-black-500 text-sm pb-3 mt-2">Edit Plans</div>
              {tabs.map((tab) => (
                <Button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex items-center gap-3  text-sm text-left  ${activeTab === tab.name
                      ? "border border-gray-100/85 rounded-lg py-1 px-1 text-gray-200 font-medium"
                      : "text-gray-500 hover:text-black "
                    }`}
                >
                  {tab.name}
                </Button>
              ))}
              <button className="px-4 border text-gray-500 border-gray-100/85 text-xs rounded-lg" >Add plan <span className="text-2xl ps-2 font-extralight  text-black-200 " 
               >+</span> </button>
            </div>
          </div>
          <div className="w-full lg:w-4/5 px-2 lg:h-[75vh] py-4 relative mt-[40%] lg:mt-[0px] lg:left-[18%]">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default EditPlan;
