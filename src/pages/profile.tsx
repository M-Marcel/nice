import { useState } from "react";
import Button from "../components/Button";
import LeftSidebar from "../components/LeftSidebar";
import ProfileTab from "../components/ProfileTab";
import EarlyAccess from "../components/EarlyAccess";
import Password from "../components/Password";
import Notifications from "../components/Notifications";

// Import icons
import ProfileIcon from '../assets/svg/UserIcon';
import PasswordIcon from "../assets/svg/LockIcon";
import NotificationsIcon from "../assets/svg/NotifyIcon";
import EarlyAccessIcon from "../assets/svg/EarlyAccessIcon";

const Profile = () => {
  const [activeTab, setActiveTab] = useState<string>("Profile"); // Track active tab

  const tabs = [
    { name: "Profile", icon: ProfileIcon },
    { name: "Password", icon: PasswordIcon },
    { name: "Notifications", icon: NotificationsIcon },
    { name: "Early Access", icon: EarlyAccessIcon },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Early Access":
        return <EarlyAccess />;
      case "Profile":
        return <ProfileTab />;
      case "Password":
        return <Password />;
      case "Notifications":
        return <Notifications />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row px-2">
      <LeftSidebar />
      <div className="px-4 w-full lg:w-4/5 lg:relative left-[18%]">
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <div className="fixed top-[60px] w-full z-30 lg:w-[10%] px-4 py-4 bg-white">
            <div className="relative bg-white py-4 flex flex-col gap-4 top-[50px]">
              {tabs.map((tab) => (
                <Button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex items-center gap-3 text-sm text-left ${activeTab === tab.name
                    ? "text-black font-medium"
                    : "text-gray-500 hover:text-black"
                    }`}
                >
                  <tab.icon
                    className={`w-5 h-5 ${activeTab === tab.name ? "text-black" : "text-gray-500"
                      }`}
                  />
                  {tab.name}
                </Button>
              ))}
            </div>
          </div>
          <div className="w-full mt-[140px] lg:mt-[0px] lg:ml-[150px] lg:w-4/5 px-2 py-4">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
