import Search from "../../assets/svg/Search";
import SearchSide from "../../assets/svg/SearchSide";
import LeftSidebar from "../../components/LeftSidebar";
import AdminAvatar from "../../assets/adminAvatar.png"
import BotOverview from "../../components/admin/BotOverview";
import UserOverview from "../../components/admin/UserOverview";
import FeatureRequestOverview from "../../components/admin/FeatureRequestOverview";
import NewSignUps from "../../components/admin/NewSignUps";
import Button from "../../components/Button";
import Elipse from '../../assets/elipse.png';
import { votedBots } from "../../constants";

// import { useAppSelector } from "../../hooks";


const AdminDashboard = () => {
    // const user = useAppSelector((state) => state.auth.user); 
  
    return (
        <div className="bg-black-300 h-screen">
            <div className="bg-black-800 mx-2 h-full rounded-[30px] flex gap-5 py-4 px-4">
                <LeftSidebar userRole = "admin" />
                <div className="mainDashboardFeatures bg-white h-[full] overflow-y-scroll rounded-[40px] w-[100%] lg:w-[80%] 
                lg:relative md:z-30 lg:z-40 left-[20%] px-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-black-300">
                    <div className="w-[75%] fixed left-[22%] top-5 h-10vh hidden lg:block py-4 px-2">
                        <div className="flex justify-between items-center">
                            <div className="relative w-[27%]">
                                <input type="text" placeholder="Search" className="text-sm border border-gray-900 rounded-lg py-2 outline-none pl-7" />
                                <div className="absolute top-[8px] left-[6px] text-gray-500">
                                    <Search />
                                </div>
                                <div className="absolute right-[22px] top-[11px]">
                                    <SearchSide />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <div>
                                        <img src={AdminAvatar} alt="adminavatar" width={40} height={40} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-black-910">John Mraz</p>
                                        <p className="text-xs text-gray-940">Admin</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative top-[80px]">
                        <div className="grid lg:grid-cols-3 gap-5">
                            <div className="lg:col-span-2">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                                    <BotOverview />
                                    <UserOverview />
                                    <FeatureRequestOverview />
                                </div>
                                <div className="mt-6">
                                    <div className="flex justify-between items-center">
                                        <div className="font-medium text-black-500 text-sm">Feature requests</div>
                                        <div className="flex gap-2">
                                            <Button type="button" className="text-xs bg-black-500 text-white rounded-lg px-3 py-[5px]">All</Button>
                                            <Button type="button" className="text-xs text-gray-930">New</Button>
                                            <Button type="button" className="text-xs text-gray-930">Completed</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 h-[50vh] overflow-y-scroll scrollbar-none lg:px-4 lg:scrollbar-thin lg:scrollbar-thumb-gray-300 lg:scrollbar-track-gray-600">
                                    {
                                        votedBots.map((feature) => (
                                            <div
                                                key={feature.id}
                                                className="flex flex-col rounded-2xl border bg-gray-700/100 border-gray-100/85 px-4 py-2 mb-4"
                                            >
                                                <div className="flex gap-4 items-center py-1">
                                                    <button
                                                        className={`border flex flex-col items-center justify-center px-3 py-3 rounded-lg transition-all duration-300 
                                                            border-gray-500/90 bg-gray-600/100 text-gray-500 cursor-pointer hover:bg-gray-600" `}
                                                       
                                                    >
                                                        <p className="text-xs mt-1">
                                                           Vote
                                                        </p>
                                                    </button>
                                                    <div>
                                                        <p className="text-xs text-gray-500 mb-1">
                                                            {new Date(feature.createdAt).toLocaleDateString()}
                                                        </p>
                                                        <p className="text-sm text-gray-300 font-medium">{feature.botName}</p>
                                                    </div>
                                                </div>
                                                <div className="flex py-1 gap-4 items-center">
                                                    <div
                                                        className="border border-gray-600 flex flex-col items-center justify-center
                                                    px-5 py-3 rounded-lg"
                                                    >
                                                        <p className="text-xs text-gray-300">{feature.voteCount}</p>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <img src={Elipse} alt="elipse" width={20} height={20} />
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-gray-500 text-sm">by</span>
                                                            <p className="text-sm text-gray-300">
                                                                {feature.author || 'Unknown'}{' '}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="lg:col-span-1">
                                <div className="flex flex-col">
                                    <h2 className="text-black-940 font-semibold lg:fixed lg:mb-3">New Signups</h2>
                                    <div className="signups h-[75vh] overflow-y-scroll hide-scrollbar lg:mt-8">
                                        <NewSignUps />
                                        <NewSignUps />
                                        <NewSignUps />
                                        <NewSignUps />
                                        <NewSignUps />
                                        <NewSignUps />
                                        <NewSignUps />
                                        <NewSignUps />
                                        <NewSignUps />
                                        <NewSignUps />
                                        <NewSignUps />
                                        <NewSignUps />
                                        <NewSignUps />
                                        <NewSignUps />
                                        <NewSignUps />
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

export default AdminDashboard;
