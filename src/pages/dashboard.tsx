import Button from "../components/Button"
import LeftSidebar from "../components/LeftSidebar"
import DashboardHero from "../assets/dbherro.png"
import BotDesign from '../assets/zrobot.png'
import ComputerIcon from '../assets/computer-white.png'
import TelegramIcon from '../assets/telegram2.png'
import Search from "../components/Search"
import { useAppDispatch, useAppSelector } from "../hooks"
import { enablePageScroll } from "scroll-lock"
import Person from '../assets/person.png'
import { getAllFeatureRequest, setPage } from "../slices/feature/featureSlice"
import { useEffect } from "react"
import AllFeatureRequest from "../components/FeatureRequest"
import NextIcon from "../assets/svg/NextIcon"
import PrevIcon from "../assets/svg/PrevIcon"
import LoaderIcon from "../assets/loader.svg"
// import Progress from "../assets/progbar.png"
import Modal from "../components/Modal"
import RequestForm from "../components/RequestForm"
import { useModal } from "../context/ModalContext"
import TelegramModal from "../components/telegramModal"
import TawkTo from "../components/TawkTo"
import { useDashboard } from "../context/DashboardContext"


const Dashboard = () => {
    const dispatch = useAppDispatch();

    const user = useAppSelector((state) => state.auth.user);
    const { displayedFeatures = [], isLoading, isError, message, currentPage, totalPages, limit } = useAppSelector(
        (state) => state.feature
    );

        const { dashboardType,  setDashboardType } = useDashboard();
    
        // Set the dashboardType when the user data changes
        useEffect(() => {
            if (user) {
                setDashboardType("user"); // Update the context with the new dashboardType
            }
        }, [user, dashboardType, setDashboardType]);
    

    const { activeModal, setActiveModal } = useModal()

    const userId = user?._id;

    const enhancedFeatures = displayedFeatures.map((feature) => ({
        ...feature,
        isVoted: Array.isArray(feature.likedUsers) && userId
            ? feature.likedUsers.includes(userId)
            : false,
    }));

    useEffect(() => {
        dispatch(getAllFeatureRequest({ page: currentPage, pageSize: limit }));
        enablePageScroll()
        // setActiveModal("telegramModal")

    }, [dispatch, currentPage, limit]);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            dispatch(setPage(currentPage - 1));
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            dispatch(setPage(currentPage + 1));
            console.log('moved to next page')
        }
    };



    const closeModal = () => {
        setActiveModal(null);
        document.body.style.overflow = "auto";
        enablePageScroll()
    };



    return (
        <div className="dashboard flex flex-col lg:flex-row px-2">
            <LeftSidebar dashboardType={dashboardType} />
            <div className="px-4 w-[100%] lg:w-[80%] lg:relative md:z-30 lg:z-40 left-[18%]">
                <div className=" items-center justify-between hidden md:flex md:w-[92%] lg:w-[80%] bg-white py-4 px-2 fixed z-50">
                    <Search />
                    <div className="flex gap-2">
                        <a href="https://t.me/+iw2jh3VaeSg4MzBk" className="hidden lg:flex items-center gap-2 bg-gray-900 text-sm text-black-700 px-4 py-3 
                     rounded-xl">
                            <img src={TelegramIcon} alt="telIcon" width={18} height={18} />
                            Join Telegram
                        </a>
                        <Button className="hidden lg:flex items-center gap-2 bg-black-500 text-sm text-white px-4 py-3 me-10
                     rounded-xl">
                            <img src={ComputerIcon} alt="compIcon" width={18} height={18} />
                            Beta
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 mt-14 lg:mt-8">
                    <div className="w-[100%] lg:w-[65%] lg:px-4 relative z-10 lg:py-4 h-auto lg:h-[100vh]">
                        <div className="mt-10 mb-4 hidden md:block relative overflow-hidden">
                            <div className="mobile-dashboard-hero flex h-[auto]">
                                <img src={DashboardHero} alt="dhero" className="w-[100%]" />
                            </div>
                            <div className="absolute flex justify-between top-2 w-full">
                                <div className="px-3 py-2 lg:py-4 md:mt-[60px] lg:mt-[25px]">
                                    <p className="text-white text-3xl leading-9 font-medium w-[100%]">You’re on <br />the list {user?.firstName || "User"}!</p>
                                    <p className="mt-2 text-sm text-white font-500">Get Ready for the Launch</p>
                                    {/* <p className="text-sm text-white mt-8 flex gap-1 items-center">
                                        <img src={Alarm} alt="alarm" className="w-[30px]" />
                                        <span className="w-[60%] lg:w-[auto]">Launching in 14 days!</span>
                                    </p> */}
                                </div>
                                <div className="w-[60%]">
                                    <img className="w-[100%] mt-2 md:mt-0" src={Person} alt="Person" />
                                </div>

                            </div>
                        </div>
                        <div className="mt-10 mb-4 md:hidden relative overflow-hidden">
                            <div className="mobile-dashboard-hero flex h-[auto]">
                                <img src={DashboardHero} alt="dhero" className="w-[100%]" />
                            </div>
                            <div className="absolute flex justify-between top-1 w-full">
                                <div className="px-2 py-1 mt-5">
                                    <p className="text-white text-sm leading-4 font-medium w-[98%]">You’re on <br />the list {user?.firstName || "User"}!</p>
                                    <p className="mt-2 text-[10px] text-white font-500">Get Ready for the Launch</p>
                                    {/* <p className="text-[8px] text-white mt-1 mb-2 flex gap-1 items-center">
                                        <img src={Alarm} alt="alarm" className="w-[30px]" />
                                        <span className="w-[60%] lg:w-[auto]">Launching in 14 days!</span>
                                    </p> */}
                                </div>
                                <div className="w-[65%]">
                                    <img className="w-[100%] mt-2 md:mt-0" src={Person} alt="Person" />
                                </div>

                            </div>
                        </div>
                        {/* <div className="flex flex-col lg:flex-row justify-between px-2 mt-6">
                            <div className=" w-[100%] lg:w-[49%] border border-gray-600 px-4 py-4 rounded-2xl mb-4 lg:mb-0">
                                <p className="text-xs text-gray-500 w-[60%]">You're <span className="font-500 text-black-500">#45</span> out of <span className="font-500 text-black-500">1000</span> waiting to get access</p>
                                <div className="mt-4">
                                    <img src={Progress} alt="prog" className="w-[100%]" />
                                </div>
                            </div>
                            <div className="flex flex-col border border-gray-600 px-4 py-4 rounded-2xl w-[100%] lg:w-[49%]">
                                <div className="flex justify-between">
                                    <p className="text-xs w-[50%] text-black-500">Invite friends to move up the list!</p>
                                    <Button className="bg-black-500 text-white text-xs px-2 py-2 rounded-full">14 invites</Button>
                                </div>
                                <div className="flex justify-between gap-2 items-center mt-6">
                                    <p className="text-xs lg:text-sm text-gray-500">www.lanepact.com/{user?.firstName || "User"}</p>
                                    <Button className="bg-white border border-gray-100 rounded-full px-2 py-2 text-xs">Copy</Button>
                                </div>
                            </div>
                        </div> */}
                        <div className="mt-8 py-10 purpose-bg flex justify-center items-center">
                            <img src={BotDesign} alt="dashboardHero" width={400} />
                        </div>

                        <div className="flex justify-center items-center mt-[40px]">
                            <div className="w-[80%] flex flex-col items-center">
                                <h1 className="text-center text-black-500 font-600 mb-2">View product progress</h1>
                                <p className="text-gray-400 text-sm w-[85%] text-center">We are working really hard to get the product ready.
                                    View our progress and give us a feedback or suggest features to add</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[100%] lg:w-[35%] px-2 py-4 h-[100vh]">
                        <div className="flex justify-between gap-14 mt-10">
                            <div>
                                <h2 className="text-sm mb- font-semibold">Feature requests</h2>
                                <p className="text-xs text-gray-400 ">Vote request or add yours</p>
                            </div>
                            <Button
                                className="custom-bg text-xs  px-3 py-3 rounded-xl text-white"
                                onClick={() => setActiveModal("requestForm")}
                            >Add request
                            </Button>
                        </div>
                        <div className="mt-2 ">
                            {isLoading ? (
                                <div className="flex items-center justify-center gap-6 h-[60vh]">
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
                                            <AllFeatureRequest key={feature._id} feature={feature} />
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

            <TawkTo />
            
            <Modal isVisible={activeModal === "requestForm"} onClose={closeModal}>
                <RequestForm onNewFeature={() => { }} />
            </Modal>
            <Modal isVisible={activeModal === "telegramModal"} onClose={closeModal}>
                <TelegramModal />
            </Modal>
        </div>
    )
}

export default Dashboard