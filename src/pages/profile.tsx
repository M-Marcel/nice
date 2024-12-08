import Button from "../components/Button"
import LeftSidebar from "../components/LeftSidebar"
import ComputerIcon from '../assets/computer-white.png'
import UserOneIcon from '../assets/user-single.png'
import LockIcon from '../assets/square-lock-02.png'
import CustomiseIcon from '../assets/customize.png'
import LaptopIcon from '../assets/laptop-programming.png'
import ProfileFrame from '../assets/dbFrame.png'
import Elipse from '../assets/Ellipse2.png'
import Pencil from '../assets/pencil.png'
import Dashboardicon from '../assets/dashboard.png'




const Profile = () => {

    return (
        <div className="flex flex-col lg:flex-row px-2">
            <LeftSidebar />
            <div className="px-4 w-[100%] lg:w-[80%] lg:relative left-[18%]">
                <div className="hidden lg:flex z-50 items-center justify-end w-[90%] md:w-[92%] lg:w-[76%] bg-white py-4 px-2 fixed">
                    <Button className="hidden lg:flex items-center gap-2 bg-black-500 text-sm text-white px-4 py-2
                     rounded-md">
                        <img src={ComputerIcon} alt="compIcon" width={18} height={18} />
                        Beta
                    </Button>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 mt-8">
                    <div className="w-[100%] lg:w-[15%] px-4 py-4 h-auto lg:h-[100vh]">
                        <div className="relative flex flex-col gap-3 top-[50px]">
                            <a href="/" className="flex items-center gap-2">
                                <img src={UserOneIcon} alt="userone" width={18} height={18} />
                                <span className="text-xs">Profile</span>
                            </a>
                            <a href="/" className="flex items-center gap-2">
                                <img src={LockIcon} alt="userone" width={18} height={18} />
                                <span className="text-xs text-gray-500">Password</span>
                            </a>
                            <a href="/" className="flex items-center gap-2">
                                <img src={CustomiseIcon} alt="userone" width={18} height={18} />
                                <span className="text-xs text-gray-500">Notifications</span>
                            </a>
                            <a href="/" className="flex items-center gap-2">
                                <img src={LaptopIcon} alt="userone" width={18} height={18} />
                                <span className="text-xs text-gray-500">Early actions</span>
                            </a>
                        </div>
                    </div>
                    <div className="w-[100%] lg:w-[80%] px-2 py-4 h-[100vh]">
                        <div className="relative top-[40px]">
                            <div className="mb-6 rounded-2xl">
                                <img className="rounded-3xl" src={ProfileFrame} alt="profile-frame" width={1000} height={1000} />
                            </div>
                            <div className="bg-white py-3 px-3">
                                <div className="mb-4 lg:absolute top-[24%] left-[30px]">
                                    <img src={Elipse} alt="elipse" width={65} height={65} />
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                    <div className="mb-5">
                                        <h2 className="text-sm mb-1">Tanjiro Kamado</h2>
                                        <p className="text-xs text-gray-500">tanshibuya@gmail.com</p>
                                    </div>
                                    <Button className="bg-white text-sm border border-gray-600 py-2 px-2 rounded-lg">Change image</Button>
                                </div>
                                <div className="flex flex-col lg:flex-row gap-4 justify-between">
                                    <form className="w-[100%] lg:w-[50%]">
                                        <div className="flex flex-col lg:flex-row justify-between items-center">
                                            <div className="flex w-[100%] lg:w-[70%] flex-col mb-3">
                                                <label className="mb-1 text-sm text-gray-500">Full name</label>
                                                <input type="text" className="border py-2 w-[100%] border-gray-600 outline-0 rounded-lg" />
                                            </div>
                                            <div className="w-[100%] lg:w-[25%] flex gap-2 items-center mt-4">
                                                <Button className="bg-white text-sm border px-4 py-2 rounded-lg text-gray-500 border-gray-600">Cancel</Button>
                                                <Button className="custom-bg px-4 py-2 rounded-lg text-white text-sm">Save</Button>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="flex w-[90%] flex-col mb-3">
                                                <label className="mb-1 text-sm text-gray-500">Role</label>
                                                <input type="text" className="border py-2 w-[100%] border-gray-600 outline-0 rounded-lg" />
                                            </div>
                                            <Button className="bg-white mt-3 gap-2 flex flex-row items-center border-none px-2 py-2">
                                                <img src={Pencil} alt="pencil" width={20} height={20} />
                                                <span className="text-gray-500 text-sm">Edit</span>
                                            </Button>
                                        </div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="flex w-[90%] flex-col mb-3">
                                                <label className="mb-1 text-sm text-gray-500">Experience level</label>
                                                <input type="text" className="border py-2 w-[100%] border-gray-600 outline-0 rounded-lg" />
                                            </div>
                                            <Button className="bg-white mt-3 gap-2 flex flex-row items-center border-none px-2 py-2">
                                                <img src={Pencil} alt="pencil" width={20} height={20} />
                                                <span className="text-gray-500 text-sm">Edit</span>
                                            </Button>
                                        </div>
                                    </form>
                                    <div className="w-[100%] lg:w-[35%]">
                                        <div className="mb-3 px-3 mt-4 border border-gray-600 py-4 rounded-lg">
                                            <div className="mb-3">
                                                <img src={Dashboardicon} alt="dashboardIcon" className="mb-2" width={20} height={20} />
                                                <p className="text-gray-500 text-sm">Account created</p>
                                            </div>
                                            <p className="text-sm">25th Nov, 2024</p>
                                        </div>
                                        <div className="mb-3 px-3 mt-4 border border-gray-600 py-4 rounded-lg">
                                            <div className="mb-3">
                                                <img src={Dashboardicon} alt="dashboardIcon" className="mb-2" width={20} height={20} />
                                                <p className="text-gray-500 text-sm">Account created</p>
                                            </div>
                                            <p className="text-sm">25th Nov, 2024</p>
                                        </div>
                                        <div className="mb-3 px-3 mt-4 border border-gray-600 py-4 rounded-lg">
                                            <div className="mb-3">
                                               <Button className="bg-black-500 text-xs text-white px-2 py-2 rounded-full">14 Invites</Button>
                                            </div>
                                            <p className="text-sm">www.lanepact.com/john</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Profile