import { useState } from "react";
import Button from "./Button";
import Info from "./Info";
import Skills from "./Skills";


const PortfolioSetup = () => {

    const [activeTab, setActiveTab] = useState<string>("Info"); // Track active tab

    const tabs = [
        { name: "Info" },
        { name: "Skills" },
        { name: "Projects" },
        { name: "Work" },
        { name: "Education" },
        { name: "Certification" },
    ];
    const renderContent = () => {
        switch (activeTab) {
            case "Info":
                return <Info />;
            case "Skills":
                return <Skills />;
            default:
                return null;
        }
    };


    return (
        <div className="px-2 py-2">
            <div className="mt-8">
                <form>
                    <div className="relative">
                        <input
                            type="text"
                            className="border border-gray-900 outline-0 pl-6 rounded-lg py-1"
                            placeholder="Search for anything"
                        />
                        <span className="absolute left-1 top-[6px]">
                            <svg width="15" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.5 16.5L21 21" stroke="#838594" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19C14.9706 19 19 14.9706 19 10Z" stroke="#838594" stroke-width="1.5" stroke-linejoin="round" />
                            </svg>
                        </span>
                        <span className="absolute right-5 top-[6px]">
                            <svg width="15" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 10C1 6.31087 1 4.4663 1.81382 3.15877C2.1149 2.67502 2.48891 2.25427 2.91891 1.91554C4.08116 1 5.72077 1 9 1H13C16.2792 1 17.9188 1 19.0811 1.91554C19.5111 2.25427 19.8851 2.67502 20.1862 3.15877C21 4.4663 21 6.31087 21 10C21 13.6891 21 15.5337 20.1862 16.8412C19.8851 17.325 19.5111 17.7457 19.0811 18.0845C17.9188 19 16.2792 19 13 19H9C5.72077 19 4.08116 19 2.91891 18.0845C2.48891 17.7457 2.1149 17.325 1.81382 16.8412C1 15.5337 1 13.6891 1 10Z" stroke="#141B34" stroke-width="1.5" />
                                <path d="M13.5 1L13.5 19" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round" />
                                <path d="M17 5H18M17 8H18" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                    </div>
                </form>
            </div>
            <div className="relative top-[5px] z-20">
                <div className="">
                    <div className="flex fixed z-20 w-[18%] bg-white  gap-4 py-2 overflow-x-scroll lg:scrollbar-none lg:scrollbar-thumb-gray-300 lg:scrollbar-track-gray-600 mb-4">
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
    )
}

export default PortfolioSetup