import Button from "../components/Button"
import LeftSidebar from "../components/LeftSidebar"
import DashboardHero from "../assets/dashboardHero.png"
import BotDesign from '../assets/zrobot.png'
import ComputerIcon from '../assets/computer-white.png'
import Search from "../components/Search"
import VotedBots from "../components/VotedBots"



const Dashboard = () => {

    return (
        <div className="dashboard flex flex-col lg:flex-row px-2">
            <LeftSidebar />
            <div className="px-4 w-[100%] lg:w-[80%] lg:relative left-[18%]">
                <div className="flex items-center justify-between w-[90%] md:w-[92%] lg:w-[76%] bg-white py-4 px-2 fixed">
                    <Search />
                    <Button className="hidden lg:flex items-center gap-2 bg-black-500 text-sm text-white px-4 py-2
                     rounded-md">
                        <img src={ComputerIcon} alt="compIcon" width={18} height={18} />
                        Beta
                    </Button>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 mt-8">
                    <div className="w-[100%] lg:w-[65%] px-4 py-4 h-auto lg:h-[100vh]">
                        <div className="mt-10 mb-4">
                            <img src={DashboardHero} alt="dashboardHero" width={1000} />
                        </div>
                        <div className="flex justify-between px-2">
                            <div>
                                <p className="text-xs text-gray-500 w-[60%]">You're <span className="font-500 text-black-500">#45</span> out of <span className="font-500 text-black-500">1000</span> waiting to get access</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-xs w-[50%] text-black-500">Invite friends to move up the list!</p>
                                <Button className="bg-black-500 text-white text-xs px-4 py-2 rounded-full">14 votes</Button>
                            </div>
                        </div>
                        <div className="mt-8 py-10 purpose-bg flex justify-center items-center">
                            <img src={BotDesign} alt="dashboardHero" width={400} />
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="w-[80%] flex flex-col items-center">
                                <h1 className="text-center text-black-500 font-600 mb-2">View product progress</h1>
                                <p className="text-gray-400 text-sm w-[85%]">We are working really hard to get the product ready.
                                    View our progress and give us a feedback or suggest features to add</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[100%] lg:w-[35%] px-2 py-4 h-[100vh]">
                        <div className="flex justify-between mt-10">
                            <div>
                                <h2 className="text-sm mb- font-semibold">Feature requests</h2>
                                <p className="text-xs text-gray-400">Vote requests or add yours</p>
                            </div>
                            <Button className="custom-bg text-xs px-2 rounded-md text-white">Add request</Button>
                        </div>
                        <VotedBots />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Dashboard