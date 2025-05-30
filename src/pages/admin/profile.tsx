import { useEffect, useState } from "react";
import Button from "../../components/Button";
import LeftSidebar from "../../components/LeftSidebar";
import ProfileTab from "../../components/ProfileTab";
import EarlyAccess from "../../components/EarlyAccess";
import Password from "../../components/Password";
import Notifications from "../../components/Notifications";

// Import icons
import ProfileIcon from '../../assets/svg/UserIcon';
import PasswordIcon from "../../assets/svg/LockIcon";
import { useAppSelector } from "../../hooks";
import { useDashboard } from "../../context/DashboardContext";
// import NotificationsIcon from "../assets/svg/NotifyIcon";
// import EarlyAccessIcon from "../assets/svg/EarlyAccessIcon";

const AdminProfile = () => {
  const [activeTab, setActiveTab] = useState<string>("Profile"); // Track active tab

  const tabs = [
    { name: "Profile", icon: ProfileIcon },
    { name: "Password", icon: PasswordIcon },
    // { name: "Notifications", icon: NotificationsIcon },
    // { name: "Early Access", icon: EarlyAccessIcon },
  ];

  const { user } = useAppSelector((state) => state.adminauth)

  const { dashboardType, setDashboardType } = useDashboard();

  // Set the dashboardType when the user data changes
  useEffect(() => {
    if (user?.role === "admin") {
      setDashboardType("admin"); // Update the context with the new dashboardType
    }
    if (user?.role === "superadmin") {
      setDashboardType("superadmin")
    }
  }, [user, dashboardType, setDashboardType]);

  const renderContent = () => {
    switch (activeTab) {
      case "Early Access":
        return <EarlyAccess />;
      case "Profile":
        return <ProfileTab dashboardType={dashboardType} />;
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
      <LeftSidebar dashboardType={dashboardType} />
      <div className="px-4 w-full lg:w-4/5 lg:relative left-[18%]">
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <div className="w-full lg:w-[15%] px-4 py-4 fixed bg-white z-30">
            <div className="relative flex flex-col gap-4 top-[50px] bg-white pb-4">
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
                    className={`w-5 h-5 ${activeTab === tab.name ? " text-black" : "text-gray-500"
                      }`}
                  />
                  {tab.name}
                </Button>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-4/5 px-2 lg:h-[75vh] py-4 relative mt-[40%] lg:mt-[0px] lg:left-[18%]">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
