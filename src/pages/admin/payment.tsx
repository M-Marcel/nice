import LeftSidebar from "../../components/LeftSidebar";
import cashImg from "../../assets/cash-01.png";
import calenderImg from "../../assets/calendar-03.png";
import catalogueImg from "../../assets/catalogue.png";
import ellipesImg from "../../assets/Ellipse 1.png";
import AdminHeader from "../../components/admin/Header";
import { useAppSelector } from "../../hooks";
import { useDashboard } from "../../context/DashboardContext";
import { useEffect, useState } from "react";
import All from "../../components/All";
import Successful from "../../components/Successful";
import Pending from "../../components/Pending";
import Cancelled from "../../components/Cancelled";

const AdminPayment = () => {
  const { user } = useAppSelector((state) => state.adminauth);

  const { dashboardType, setDashboardType } = useDashboard();

  // Set the dashboardType when the user data changes
  useEffect(() => {
    if (user?.role === "admin") {
      setDashboardType("admin"); // Update the context with the new dashboardType
    }
    if (user?.role === "superadmin") {
      setDashboardType("superadmin");
    }
  }, [user, dashboardType, setDashboardType]);

  const [activeTab, setActiveTab] = useState<string>("All");
  const tabs = [
    { name: "All" },
    { name: "Successful" },
    { name: "Pending" },
    { name: "Cancelled" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "All":
        return <All />;
      case "Successful":
        return <Successful />;
      case "Pending":
        return <Pending />;
      case "Cancelled":
        return <Cancelled />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-black-300 h-screen">
      <div className="bg-black-800 mx-2 h-full rounded-[30px] flex gap-5 py-4 px-4">
        <LeftSidebar dashboardType={dashboardType} />
        <div
          className="mainDashboardFeatures bg-white h-[full] overflow-y-scroll rounded-[40px]  w-[100%] lg:w-[80%] 
                lg:relative md:z-30 lg:z-40 left-[20%] px-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-black-300"
        >
          <AdminHeader />
          <div className="relative top-[80px] ms-7">
            <div className="grid lg:grid-cols-1 gap-4">
              <div className="lg:col-span-2">
                <div className="mt-0">
                  <div className="font-medium text-black-500 text-sm pb-3 ">
                    Payments
                  </div>
                  <div className="flex justify-between  items-center ">
  
                      <ul className="flex flex-wrap text-sm font-medium  text-center text-gray-500 ">
                        <div className="flex gap-4  ">
                          {tabs.map((tab) => (
                            <li
                              key={tab.name}
                              onClick={() => setActiveTab(tab.name)}
                              className={`flex items-center gap-3 text-xs cursor-pointer text-black-500 text-left ${
                                activeTab === tab.name
                                  ? "text-white bg-black-600 px-4 py-2  rounded-full font-medium"
                                  : "text-black-500 border border-gray-100 rounded-full px-4 py-2  hover:text-black"
                              }`}
                            >
                              {tab.name}
                            </li>
                          ))}
                        </div>
                      </ul>
                    
                    <div className="flex gap-2 pb-2">
                      <div className="flex text-black-200 px-2 py-2 mt-2 bg-gray-700/85  text-xs rounded-xl border border-gray-100/85 hover:text-gray-600">
                        <img src={cashImg} alt="" width={15} height={15} />
                        <a className={`ps-2 `} href="/admin/payment/edit-plans">
                          Edit plans
                        </a>
                      </div>
                      <div className="flex text-black-200 px-2 py-2 mt-2 me-8 bg-gray-700/85  text-xs rounded-xl border border-gray-100/85 hover:text-gray-600">
                        <img
                          src={calenderImg}
                          alt=""
                          width={15}
                          height={15}
                          className=""
                        />

                        <p className="ps-2">Last month </p>
                        <svg
                          className="w-2.5 h-2.5 ms-3 mt-1 "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                <div className="w-full">{renderContent()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPayment;
