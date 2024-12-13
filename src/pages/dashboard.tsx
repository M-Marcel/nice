import Button from "../components/Button"
import LeftSidebar from "../components/LeftSidebar"
import DashboardHero from "../assets/dbherro.png"
import BotDesign from '../assets/zrobot.png'
import ComputerIcon from '../assets/computer-white.png'
import Search from "../components/Search"
import { useAppDispatch, useAppSelector } from "../hooks"
import Person from '../assets/person.png'
import Alarm from '../assets/alarm.png'
import { getAllFeatureRequest } from "../slices/feature/featureSlice"
import { useEffect, useState } from "react"
import FeatureRequest from "../components/FeatureRequest"
import NextIcon from "../assets/svg/NextIcon"
import PrevIcon from "../assets/svg/PrevIcon"
import LoaderIcon from "../assets/loader.svg"



const Dashboard = () => {

    const dispatch = useAppDispatch();

    const user = useAppSelector((state) => state.auth.user);
    const { features, isLoading, isError, message, totalPages } = useAppSelector(
        (state) => state.feature
    );
    const [currentPage, setCurrentPage] = useState(1);

    const userId = user?._id;

    const enhancedFeatures = features.map((feature) => ({
        ...feature,
        isVoted: userId ? feature.likedUsers.includes(userId) : false
    }));

    useEffect(() => {
        dispatch(getAllFeatureRequest(currentPage));
    }, [currentPage, dispatch]);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

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
                        <div className="mt-10 mb-4 relative">
                            <img src={DashboardHero} alt="dashboardHero" className="" />
                            <p className="text-white absolute top-[10%] left-4 md:left-6 text-sm leading-5 md:leading-7 md:text-2xl w-[40%] md:w-[30%] font-semibold">You’re on the list  {user?.firstName || "User"}!</p>
                            <p className="mt-2 text-xs md:text-sm text-white font-500 top-[40%] left-4 md:left-6 absolute">Get Ready for the Launch</p>
                            <p className="text-xs md:text-sm text-white absolute top-[70%] md:top-[80%] left-4 md:left-6 flex gap-1 items-center md:items-center ">
                                <img src={Alarm} alt="alarm" className="w-[30px]" />
                                <span className="w-[60%] lg:w-[auto]">Launching in 14 days!</span>
                            </p>
                            <img className="w-[170px] md:w-[350px] lg:w-[300px]  absolute -top-[2%] md:-top-[2%] right-2 md:right-4" src={Person} alt="Person" />

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

                        <div className="flex justify-center items-center mt-[40px]">
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
                                <p className="text-xs text-gray-400">Vote request or add yours</p>
                            </div>
                            <Button className="custom-bg text-xs px-2 rounded-md text-white">Add request</Button>
                        </div>
                        <div className="mt-8">
                            {isLoading ? (
                                <div className="flex items-center justify-center gap-4 h-[60vh]">
                                    <img
                                        src={LoaderIcon}
                                        alt="loader"
                                        width={24}
                                        height={24}
                                        className="animate-spin"
                                    />
                                    Loading ...
                                </div>
                            ) : isError ? (
                                <p className="text-red-500">{message}</p>
                            ) : (
                                <>
                                    {enhancedFeatures && enhancedFeatures.length > 0 ? (
                                        enhancedFeatures.map((feature) => (
                                            <FeatureRequest key={feature._id} feature={feature} />
                                        ))
                                    ) : (
                                        <p className="text-gray-400">No features available. Add a new request!</p>
                                    )}

                                    <div className="pagination-buttons flex justify-between mt-4">
                                        <button
                                            onClick={handlePreviousPage}
                                            disabled={currentPage <= 1}
                                            className="px-4 py-2 text-sm text-gray-500 rounded-md disabled:opacity-50"
                                        >
                                            <PrevIcon />
                                        </button>
                                        <button
                                            onClick={handleNextPage}
                                            disabled={currentPage >= totalPages}
                                            className="px-4 py-2 text-sm text-gray-500 rounded-md disabled:opacity-50"
                                        >
                                            <NextIcon />
                                        </button>
                                    </div>
                                </>

                            )}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Dashboard