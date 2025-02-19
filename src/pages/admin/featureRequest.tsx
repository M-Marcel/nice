import LeftSidebar from "../../components/LeftSidebar";
import Button from "../../components/Button";
import RequestForm from "../../components/RequestForm";
import AdminHeader from "../../components/admin/Header";
import { useState } from "react";
import AllFeatures from "../../components/admin/AllFeature";
import NewFeatures from "../../components/admin/NewFeature";
import CompletedFeatures from "../../components/admin/CompletedFeature";


const FeatureRequest = () => {
    const [activeTab, setActiveTab] = useState<string>("All"); // Track active tab

    const tabs = [
        { name: "All" },
        { name: "New" },
        { name: "Completed" }
    ];
    const renderContent = () => {
        switch (activeTab) {
            case "All":
                return <AllFeatures />;
            case "New":
                return <NewFeatures />;
            case "Completed":
                return <CompletedFeatures />;
            default:
                return null;
        }
    };
    return (
        <div className="bg-black-300 h-screen">
            <div className="bg-black-800 mx-2 h-full rounded-[30px] flex gap-5 py-4 px-4">
                <LeftSidebar dashboardType="admin" />
                <div className="mainDashboardFeatures bg-white h-[full] overflow-y-scroll rounded-[40px] w-[100%] lg:w-[80%] 
                lg:relative md:z-30 lg:z-40 left-[20%] px-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-black-300">
                    <AdminHeader />
                    <div className="relative top-[80px]">
                        <div className="grid lg:grid-cols-3 gap-5">
                            <div className="lg:col-span-2">
                                <div className="mt-0">
                                    <div className="flex justify-between items-center">
                                        <div className="font-medium text-black-500 text-sm">Feature requests</div>
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
                                </div>
                                <div className="mt-4 h-[80vh] overflow-y-scroll scrollbar-none lg:px-4 lg:scrollbar-thin lg:scrollbar-thumb-gray-300 lg:scrollbar-track-gray-600">
                                    <div className="w-full">{renderContent()}</div>
                                </div>
                            </div>
                            <div className="lg:col-span-1">
                                <div className="flex flex-col">
                                    <div className="signups h-[75vh] overflow-y-scroll hide-scrollbar lg:mt-8">
                                        <RequestForm onNewFeature={() => { }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureRequest;
