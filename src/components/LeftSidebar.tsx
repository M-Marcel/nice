import Logo from "./Logo"
import Elipse from "../assets/elipse.png"
import DashboardIcon from "../assets/dashboard.png"
import UnfoldIcon from "../assets/unfold.png"
import UserIcon from "../assets/user.png"

const LeftSidebar = () => {
    return (
        <div className="leftSidebar h-[100vh] w-[18%] flex flex-col gap-4 px-4 py-4 border-2 border-gray-600">
            <div className="py-4">
                <Logo />
            </div>
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <img src={Elipse} alt="elipse" width={20} height={20} />
                    <p>Tanjiro Kamado</p>
                </div>
                <img src={UnfoldIcon} alt="unfold" width={20} height={20} />
            </div>
            <div className="flex gap-2 items-center">
                <img src={DashboardIcon} alt="dashboard" width={20} height={20} />
                <p>Dashboard</p>
            </div>
            <div className="flex gap-2 items-center">
                <img src={UserIcon} alt="dashboard" width={20} height={20} />
                <p>Community</p>
            </div>
            <div className="flex gap-2 items-center mt-auto">
                    <img src={UserIcon} alt="dashboard" width={20} height={20} />
                    <p>Contact us</p>
            </div>
        
        </div>
    )
}

export default LeftSidebar