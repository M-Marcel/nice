import LeftSidebar from "../../components/LeftSidebar";
import Button from "../../components/Button";
import { communityBots } from "../../constants";
import AdminHeader from "../../components/admin/Header";



const AdminCommunity = () => {
    return (
        <div className="bg-black-300 h-screen">
            <div className="bg-black-800 mx-2 h-full rounded-[30px] flex gap-5 py-4 px-4">
                <LeftSidebar dashboardType="admin" />
                <div className="mainDashboardFeatures bg-white h-[full] overflow-y-scroll rounded-[40px] w-[100%] lg:w-[80%] 
                lg:relative md:z-30 lg:z-40 left-[20%] px-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-black-300">
                    <AdminHeader />
                    <div className="relative top-[80px] z-2">
                        <div className="">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                {
                                    communityBots.map((item) => (
                                        <div key={item.id}>
                                            <div className="flex flex-col border border-gray-600 rounded-xl
                                                px-4 py-4">
                                                <div className="w-[100%] purpose-bg">
                                                    <img
                                                        src={item.image}
                                                        alt="img"
                                                        className="w-[100%] m-auto block object-contain"
                                                    />
                                                </div>
                                                <div className="mt-5">
                                                    <div className="flex flex-col lg:flex-row justify-between lg:items-center mb-2">
                                                        <h2 className="text-black-300 text-md mb-2 lg:mb-0">{item.title}</h2>
                                                        <Button className="custom-bg rounded-lg px-4 py-4 text-white text-xs">{item.btnText}</Button>
                                                    </div>
                                                    <div>
                                                        <p className="flex gap-1 items-center mb-2">
                                                            <img src={item.elipse} alt="elipse" className="w-[10px] h-[10px]" />
                                                            <span className="text-black-400 text-xs">by</span>
                                                            <span className="text-black-300 text-sm">{item.author}</span>
                                                        </p>
                                                        <p className="flex items-center gap-1">
                                                            <img src={item.copy} alt="copy" className="w-[10px] h-[10px]" />
                                                            <span className="text-black-400 text-xs">{item.totalUsers}</span>
                                                            <span className="text-black-400 text-xs">users</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminCommunity;
