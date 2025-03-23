import LeftSidebar from "../../components/LeftSidebar";
import AdminHeader from "../../components/admin/Header";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import ActiveUsers from "../../components/admin/ActiveUsers";
import SuspendedUsers from "../../components/admin/SuspendedUsers";
import { useAppSelector } from "../../hooks";
import { useDashboard } from "../../context/DashboardContext";

const AdminUsers = () => {
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

    const [activeTab, setActiveTab] = useState<string>("Active"); // Track active tab

    const tabs = [
        { name: "Active" },
        { name: "Suspended" },
    ];
    const renderContent = () => {
        switch (activeTab) {
            case "Active":
                return <ActiveUsers />;
            case "Suspended":
                return <SuspendedUsers />;
            default:
                return null;
        }
    };

    return (
        <div className="bg-black-300 h-screen">
            <div className="bg-black-800 mx-2 h-full rounded-[30px] flex gap-5 py-4 px-4">
                <LeftSidebar dashboardType={dashboardType} />
                <div className="mainDashboardFeatures bg-white h-[full] overflow-y-scroll rounded-[40px] w-[100%] lg:w-[80%] 
                lg:relative md:z-30 lg:z-40 left-[20%] px-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-black-300">
                    <AdminHeader />
                    <div className="relative top-[90px] z-2">
                        <div className="mx-10">
                            <h2 className="mb-4 text-lg font-medium">Users</h2>
                            <div className="flex gap-4 mb-4">
                                {tabs.map((tab) => (
                                    <Button
                                        key={tab.name}
                                        onClick={() => setActiveTab(tab.name)}
                                        className={`flex items-center gap-3 text-xs text-black-500 text-left ${activeTab === tab.name
                                            ? "text-white bg-black-600 px-4 py-2 rounded-full font-medium"
                                            : "text-black-500 hover:text-black"
                                            }`}
                                    >
                                        {tab.name}
                                    </Button>
                                ))}
                            </div>
                        </div>
                        <div className="w-full">{renderContent()}</div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AdminUsers;
