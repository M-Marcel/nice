import { Link } from "react-router-dom";
import Button from "../components/Button"
import LeftSidebar from "../components/LeftSidebar"
import DashboardHero from "../assets/dbherro.png"
import BotDesign from '../assets/zrobot.png'
import TelegramIcon from '../assets/telegram2.png'
import Search from "../components/Search"
import { useAppDispatch, useAppSelector } from "../hooks"
import { enablePageScroll } from "scroll-lock"
import Person from '../assets/dbavatar.png'
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
// import TawkTo from "../components/TawkTo"
import { useDashboard } from "../context/DashboardContext"
import FileIcon from "../assets/svg/fileIcon"
import CreateProjectModal from "../components/CreateProjectModal"
import TemplateSelector from "../components/TemplateSelector"
import { getAllPortfolios } from "../slices/portfolio/portfolioSlice"
import CopyButton from "../components/CopyButton";



const Dashboard = () => {
    const dispatch = useAppDispatch();

    const user = useAppSelector((state) => state.auth.user);
    const { portfolios, isLoading: isPortfolioLoading } = useAppSelector(
        (state) => state.portfolio
    );
    const { displayedFeatures = [], isLoading, isError, message, currentPage, totalPages, limit } = useAppSelector(
        (state) => state.feature
    );

    const { dashboardType, setDashboardType } = useDashboard();


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

    useEffect(() => {
        dispatch(getAllPortfolios());


    }, [dispatch]);


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
        <div className="dashboard flex flex-col h-[100vh] overflow-y-scroll lg:scrollbar-none lg:flex-row px-2">
            <LeftSidebar dashboardType={dashboardType} />
            <div className="px-4 w-[100%] lg:w-[82%] lg:relative md:z-30  lg:z-40 left-[18%]">
                <div className=" items-center justify-between hidden md:flex md:w-[92%] lg:w-[82%] bg-white py-4 px-2 fixed z-50">
                    <Search />
                    <div className="flex gap-2">
                        <a
                            href="https://t.me/+iw2jh3VaeSg4MzBk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden lg:flex items-center gap-2 bg-gray-900 text-sm text-black-700 px-4 py-3 
                         rounded-xl hover:scale-105 transform transition-transform duration-300 "
                        >
                            <img src={TelegramIcon} alt="telIcon" width={18} height={18} />
                            Join Telegram
                        </a>
                        <Button
                            onClick={() => setActiveModal("createProjectModal")}
                            className="hidden lg:flex items-center gap-2 custom-bg text-sm text-white px-4 py-3 me-10
                        rounded-xl">
                            Create new
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 mt-14 lg:mt-8">
                    <div className="w-[100%] lg:w-[65%] lg:px-4 relative z-10 lg:py-4 h-auto lg:h-[100vh] lg:overflow-y-scroll
                    lg:scrollbar-none lg:scrollbar-thumb-gray-300 lg:scrollbar-track-gray-600">
                        <div className="mt-10 mb-4 hidden md:block relative overflow-hidden">
                            <div className="desktop-dashboard-hero flex h-[auto]">
                                <img src={DashboardHero} alt="dhero" className="w-[100%]" />
                            </div>
                            <div className="absolute flex justify-between top-2 w-full">
                                <div className="px-3 py-2 lg:py-4 md:mt-[60px] lg:mt-[2px]">
                                    <p className="text-white text-xl leading-9 font-medium w-[100%]">Welcome {user?.firstName || "User"}</p>
                                    <p className="text-white text-xl leading-6 font-medium w-[100%] lg:w-[90%]">Are you ready for your solution creation journey?</p>
                                    <div className="flex items-center mt-10 gap-2">
                                        <span>
                                            <FileIcon />
                                        </span>
                                        <p className="text-sm text-white font-medium w-[100%] lg:w-[60%]">start by creating your personal portfolio</p>
                                    </div>

                                </div>
                                <div className="w-[60%]">
                                    <img className="w-[100%] mt-2 md:mt-0" src={Person} alt="Person" />
                                </div>

                            </div>
                        </div>
                        <div className="mt-10 mb-4 md:hidden relative overflow-hidden">
                            <div className="mobile-dashboard-hero flex h-[auto] py-2">
                                <img src={DashboardHero} alt="dhero" className="w-[100%]" />
                            </div>
                            <div className="absolute flex justify-between top-1 w-full">
                                <div className="px-2 py-1 mt-1">
                                    <p className="text-white text-sm leading-4 font-medium w-[98%] mb-1">Welcome {user?.firstName || "User"}</p>
                                    <p className="text-white text-sm leading-4 font-medium w-[98%]">Are you ready for your solution creation journey?</p>
                                    <div className="flex items-center mt-5 gap-2">
                                        <span>
                                            <FileIcon />
                                        </span>
                                        <p className="text-xs text-white font-medium w-[80%] lg:w-[60%]">start by creating your personal portfolio</p>
                                    </div>
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
                        <div className="mt-10 flex items-center justify-between">
                            <h2 className="text-black-500 text-lg font-semibold">My projects</h2>
                            <Button
                                onClick={() => setActiveModal("createProjectModal")}
                                className="lg:hidden items-center gap-2 custom-bg text-xs text-white px-2 py-2 
                                rounded-xl">
                                Create new
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {isPortfolioLoading ? (
                                <div className="flex items-center lg:ml-[200px] justify-center gap-6 h-[60vh]">
                                    <img src={LoaderIcon} alt="loader" width={24} height={24} className="animate-spin" />
                                    Loading
                                </div>
                            ) : isError ? (
                                <p className="text-red-500">{message}</p>
                            ) : portfolios && portfolios.length > 0 ? (
                                portfolios.map((portfolio) => (
                                    <div key={portfolio._id} className="group hover:scale-105 mb-4 transition-transform duration-300 w-full flex flex-col h-full">
                                        <Link to={`/portfolio/display/${portfolio._id}`} className="flex flex-col h-full">
                                            <div className="mt-8 purpose-bg flex flex-col flex-grow">
                                                {/* Image container with fixed aspect ratio and consistent height */}
                                                <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl mb-4 flex-shrink-0">
                                                    <img
                                                        src={portfolio.sections.find(section => section.type === "Info")?.customContent?.profileImage || BotDesign}
                                                        alt="portfolio"
                                                        className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-300"
                                                    />
                                                </div>

                                                {/* Text content that takes remaining space */}
                                                <div className="flex flex-col flex-grow">
                                                    <p className="text-sm font-semibold text-black-500 line-clamp-2">
                                                        {portfolio?.name || 'Untitled Portfolio'}
                                                    </p>
                                                    <p className="text-xs text-gray-500 mt-1">
                                                        Last edited: {new Date(portfolio.createdAt).toLocaleDateString()}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>

                                        {portfolio.url && (
                                            <div className="mt-auto p-2 bg-gray-900 rounded-lg">
                                                <p className="text-xs font-medium mb-[2px]">Published URL:</p>
                                                <div className="flex items-center gap-1">
                                                    <a
                                                        href={portfolio.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-xs bg-gray-900 py-2 rounded-sm break-all"
                                                    >
                                                        {portfolio.url}
                                                    </a>
                                                    <CopyButton textToCopy={portfolio.url} />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-400">No portfolios found. Create a new one!</p>
                            )}
                        </div>
                    </div>
                    <div className="w-[100%] lg:w-[35%] px-4 py-4 h-[100vh] lg:overflow-y-scroll lg:scrollbar-none lg:scrollbar-thumb-gray-300 lg:scrollbar-track-gray-600">
                        <div className="flex justify-between mt-10 mb-4">
                            <div className="w-[50%]">
                                <h2 className="text-sm mb- font-semibold">Feature requests</h2>
                                <p className="text-xs text-gray-400 ">Vote request or add yours</p>
                            </div>
                            <Button
                                className="text-xs flex gap-1 items-center px-2 py-4 rounded-xl border border-gray-600  bg-white text-black-500 hover:scale-105  transform transition-transform duration-300"
                                onClick={() => setActiveModal("requestForm")}
                            >
                                <span>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 12H18" stroke="#1A1C1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12 18V6" stroke="#1A1C1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </span>
                                <span>Add request</span>
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

            {/* <TawkTo /> */}

            <Modal isVisible={activeModal === "requestForm"} onClose={closeModal}>
                <RequestForm onNewFeature={() => { }} />
            </Modal>
            <Modal isVisible={activeModal === "telegramModal"} onClose={closeModal}>
                <TelegramModal />
            </Modal>
            <Modal isVisible={activeModal === "createProjectModal"} width="500px" onClose={closeModal}>
                <CreateProjectModal
                    activeModal={activeModal}
                    setActiveModal={setActiveModal}
                />
            </Modal>
            <Modal isVisible={activeModal === "selectTemplateModal"} width="650px" onClose={closeModal}>
                <TemplateSelector
                    activeModal={activeModal}
                    setActiveModal={setActiveModal}
                />
            </Modal>
        </div>
    )
}

export default Dashboard