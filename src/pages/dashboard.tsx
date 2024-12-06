import Search from "../assets/svg/Search"
import Button from "../components/Button"
import LeftSidebar from "../components/LeftSidebar"
import { votedBots } from "../constants"
import DashboardHero from "../assets/dashboardHero.png"
import BotDesign from '../assets/zrobot.png'



const Dashboard = () => {
   
    return (
        <div className="dashboard flex flex-col lg:flex-row px-2">
            <LeftSidebar />
            <div className="px-4 w-[100%] lg:w-[83%] relative lg:left-[225px]">
                <div className="flex items-center justify-between w-[90%] md:w-[92%] lg:w-[79%] bg-white py-4 px-2 fixed">
                    <div className="relative">
                        <input type="text" placeholder="Search for anything" className="border border-gray-600 outline-0 rounded-lg
                         px-7 py-2 ml-3" />
                        <div className="absolute top-[11px] left-[16px]">
                            <Search />
                        </div>
                    </div>
                    <Button className="hidden lg:block bg-black-500 text-sm text-white px-4 py-2
                     rounded-md">Beta</Button>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 mt-8">
                    <div className="w-[100%] lg:w-[65%] px-4 py-4 lg:h-[100vh]">
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
                    <div className="w-[100%] lg:w-[35%] px-4 py-4 h-[100vh]">
                        <div className="flex justify-between mt-10">
                            <div>
                                <h2 className="text-sm mb- font-semibold">Feature requests</h2>
                                <p className="text-xs text-gray-400">Vote requests or add yours</p>
                            </div>
                            <Button className="custom-bg text-xs px-2 rounded-md text-white">Add request</Button>
                        </div>
                        <div className="mt-6">
                            {votedBots.map((item) => (
                                <div className="flex flex-col rounded-2xl border bg-gray-700/100 border-gray-100/85 px-4 py-2 mb-4">
                                    <div className="flex gap-4 items-center py-1">
                                        <div className="border border-gray-600/90 flex flex-col items-center justify-center
                                        px-3 py-3 rounded-lg">
                                            <img src={item.thumb} alt="thumbs" width={15} height={15} />
                                            <p className="text-sm text-gray-500">{item.btnText}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">{item.createdAt}</p>
                                            <p className="text-sm text-black-500 font-500">{item.botName}</p>
                                        </div>
                                    </div>
                                    <div className="flex py-1 gap-4 items-center">
                                        <div className="border border-gray-600 flex flex-col items-center justify-center
                                        px-5 py-3 rounded-lg">
                                            <p className="text-xs">{item.voteCount}</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <img src={item.image} alt="elipse" width={20} height={20} />
                                            <div className="flex items-center gap-2">
                                                <span className="text-gray-500 text-sm">by</span>
                                                <p className="text-sm">{item.author}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Dashboard