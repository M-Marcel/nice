import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks"
import { SidebarLinks } from "../constants"
import { logout } from "../slices/auth/authSlice"
import Button from "./Button"
import Logo from "./Logo"
import Elipse from "../assets/elipse.png"
import UserIcon from "../assets/user.png"
import Logout from "../assets/svg/Logout"
import ComputerIcon from "../assets/computer-white.png"
import LogoutModal from "./LogoutModal"


const LeftSidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [logoutModalOpen, setLogoutModalOpen] = useState(false);

    const user = useAppSelector((state) => state.auth.user);


    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const openLogoutModal = () => {
        setLogoutModalOpen(true);
    };

    const closeLogoutModal = () => {
        setLogoutModalOpen(false);
    };

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handleLogout = () => {
        // Dispatch the logout action
        dispatch(logout());

        // Redirect the user to the login page
        navigate('/');
    };

    return (
        <>
            <div className="bg-white z-50 fixed py-4 w-full block lg:hidden">
                <div className="flex justify-between">
                    <div className="flex items-center gap-2 ml-4">
                        <a href="/">
                            <Logo />
                        </a>
                      
                        <Button className="flex items-center gap-2 bg-black-500 text-xs text-white px-4 py-2
                     rounded-md">
                            <img src={ComputerIcon} alt="compIcon" width={18} height={18} />
                            Beta
                        </Button>
                    </div>
                    <button
                        onClick={toggleSidebar}
                        className="text-xs z-50 mr-4 text-white px-2 py-3 rounded-md lg:hidden"
                    >
                        {sidebarOpen ?

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1A1C1F" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                            :

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1A1C1F" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        }
                    </button>
                </div>
            </div>

            <div className={`fixed top-0 left-0 h-[100%] bg-white border-r border-gray-600 z-50 shadow-lg transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                } lg:translate-x-0 transition-transform duration-300 lg:w-[18%] flex flex-col gap-4 px-4 py-4`}>
                <div className="py-4">
                    <a href="/"> <Logo /></a>
                </div>
                <div className="flex justify-between items-center border border-gray-900 py-4 px-2
            rounded-xl">
                    <div className="flex gap-2 items-center">
                        <img src={Elipse} alt="elipse" width={18} height={18} />
                        <a href="/profile">
                            <p className="text-sm">{user?.lastName} {user?.firstName}</p>
                        </a>
                    </div>
                    {/* <img src={UnfoldIcon} alt="unfold" width={15} height={15} /> */}
                </div>
                {
                    SidebarLinks.map((item) => (
                        <a key={item.id} href={item.url} className="text-gray-500 hover:text-black-500 hover:bg-gray-910 
                    px-2 py-3">
                            <div className="flex gap-2 items-center">
                                <img src={item.image} alt="dashboard" width={18} height={18} />
                                <p className="text-sm">{item.title}</p>
                            </div>
                        </a>

                    ))
                }
                <a href="/contact-us" className="flex gap-2 items-center mt-auto
            text-gray-500 hover:text-black-500 hover:bg-gray-910 px-2 py-3">
                    <img src={UserIcon} alt="dashboard" width={18} height={18} />
                    <p className="text-sm">Contact us</p>
                </a>

                <Button onClick={openLogoutModal} className="flex gap-2 items-center bg-white text-sm">
                    <Logout />
                    <span className="text-red-600">Log out</span>
                </Button>
            </div>
            {logoutModalOpen && (
                <LogoutModal onClose={closeLogoutModal} onConfirm={handleLogout} />
            )}

        </>

    )
}

export default LeftSidebar