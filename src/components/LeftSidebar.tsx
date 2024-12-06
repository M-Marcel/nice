import Logo from "./Logo"
import Elipse from "../assets/elipse.png"
import UnfoldIcon from "../assets/unfold.png"
import UserIcon from "../assets/user.png"
import { SidebarLinks } from "../constants"
import { useState } from "react"

const LeftSidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <button
                onClick={toggleSidebar}
                className="fixed text-xs top-4 right-4 z-50 bg-gray-800 text-white px-2 py-3 rounded-md lg:hidden"
            >
                {sidebarOpen ? "Close" : "Menu"}
            </button>
            <div className={`fixed top-0 left-0 h-[100vh] bg-white border-r border-gray-600 z-50 shadow-lg transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                } lg:translate-x-0 transition-transform duration-300 lg:w-[18%] flex flex-col gap-4 px-4 py-4`}>
                <div className="py-4">
                    <Logo />
                </div>
                <div className="flex justify-between items-center border border-gray-900 py-4 px-2
            rounded-xl">
                    <div className="flex gap-2 items-center">
                        <img src={Elipse} alt="elipse" width={18} height={18} />
                        <p className="text-sm">Tanjiro Kamado</p>
                    </div>
                    <img src={UnfoldIcon} alt="unfold" width={15} height={15} />
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


            </div>

        </>

    )
}

export default LeftSidebar