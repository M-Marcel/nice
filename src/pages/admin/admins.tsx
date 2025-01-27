import LeftSidebar from "../../components/LeftSidebar";
import AdminHeader from "../../components/admin/Header";
import UserEmoji from "../../assets/memoji.png"
import AdminMoreIcon from "../../assets/svg/admin/moreIcon";


// import { useAppSelector } from "../../hooks";


const Admins = () => {
    // const user = useAppSelector((state) => state.auth.user); 
    const userRole = "admin"

    return (
        <div className="bg-black-300 h-screen">
            <div className="bg-black-800 mx-2 h-full rounded-[30px] flex gap-5 py-4 px-4">
                <LeftSidebar userRole={userRole} />
                <div className="mainDashboardFeatures bg-white h-[full] overflow-y-scroll rounded-[40px] w-[100%] lg:w-[80%] 
                lg:relative md:z-30 lg:z-40 left-[20%] px-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-black-300">
                    <AdminHeader />
                    <div className="relative top-[90px] z-2">
                        <div className="mx-4">
                            <table className="table-auto text-left w-full border-collapse">
                                <thead className="">
                                    <tr>
                                        <th className="text-gray-960 font-medium text-sm py-3 px-8">User</th>
                                        <th className="text-gray-960 font-medium text-sm py-3 px-8 w-[50%]">Email</th>
                                        <th className="text-gray-960 font-medium text-sm py-3 px-8">Role</th>
                                        <th className="text-gray-960 font-medium text-sm py-3 px-8"></th>
                                    </tr>
                                </thead>
                                <tbody className="border border-gray-900">
                                    <tr className="bg-white shadow-custom-inset">
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-1">
                                                <img src={UserEmoji} alt="user" width={25} />
                                                <span className="text-sm text-black-950">Tam Giyu</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-7 w-[50%]">
                                            <span className="text-sm text-black-950">tamioka@gmail.com</span>
                                        </td>
                                        <td className="py-3 px-5">
                                            <span className="text-sm text-black-950 px-4">Admin</span>
                                        </td>
                                        <td className="py-3 px-4">
                                            <span>
                                                <AdminMoreIcon />
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="bg-white shadow-custom-inset">
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-1">
                                                <img src={UserEmoji} alt="user" width={25} />
                                                <span className="text-sm text-black-950">Tam Giyu</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-7 w-[50%]">
                                            <span className="text-sm text-black-950">tamioka@gmail.com</span>
                                        </td>
                                        <td className="py-3 px-5">
                                            <span className="text-sm text-black-950 px-4">Admin</span>
                                        </td>
                                        <td className="py-3 px-4">
                                            <span>
                                                <AdminMoreIcon />
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="bg-white shadow-custom-inset">
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-1">
                                                <img src={UserEmoji} alt="user" width={25} />
                                                <span className="text-sm text-black-950">Tam Giyu</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-7 w-[50%]">
                                            <span className="text-sm text-black-950">tamioka@gmail.com</span>
                                        </td>
                                        <td className="py-3 px-5">
                                            <span className="text-sm text-black-950 px-4">Admin</span>
                                        </td>
                                        <td className="py-3 px-4">
                                            <span>
                                                <AdminMoreIcon />
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="bg-white shadow-custom-inset">
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-1">
                                                <img src={UserEmoji} alt="user" width={25} />
                                                <span className="text-sm text-black-950">Tam Giyu</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-7 w-[50%]">
                                            <span className="text-sm text-black-950">tamioka@gmail.com</span>
                                        </td>
                                        <td className="py-3 px-5">
                                            <span className="text-sm text-black-950 px-4">Admin</span>
                                        </td>
                                        <td className="py-3 px-4">
                                            <span>
                                                <AdminMoreIcon />
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="bg-white shadow-custom-inset">
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-1">
                                                <img src={UserEmoji} alt="user" width={25} />
                                                <span className="text-sm text-black-950">Tam Giyu</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-7 w-[50%]">
                                            <span className="text-sm text-black-950">tamioka@gmail.com</span>
                                        </td>
                                        <td className="py-3 px-5">
                                            <span className="text-sm text-black-950 px-4">Admin</span>
                                        </td>
                                        <td className="py-3 px-4">
                                            <span>
                                                <AdminMoreIcon />
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="bg-white shadow-custom-inset">
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-1">
                                                <img src={UserEmoji} alt="user" width={25} />
                                                <span className="text-sm text-black-950">Tam Giyu</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-7 w-[50%]">
                                            <span className="text-sm text-black-950">tamioka@gmail.com</span>
                                        </td>
                                        <td className="py-3 px-5">
                                            <span className="text-sm text-black-950 px-4">Admin</span>
                                        </td>
                                        <td className="py-3 px-4">
                                            <span>
                                                <AdminMoreIcon />
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="bg-white shadow-custom-inset">
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-1">
                                                <img src={UserEmoji} alt="user" width={25} />
                                                <span className="text-sm text-black-950">Tam Giyu</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-7 w-[50%]">
                                            <span className="text-sm text-black-950">tamioka@gmail.com</span>
                                        </td>
                                        <td className="py-3 px-5">
                                            <span className="text-sm text-black-950 px-4">Admin</span>
                                        </td>
                                        <td className="py-3 px-4">
                                            <span>
                                                <AdminMoreIcon />
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="bg-white shadow-custom-inset">
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-1">
                                                <img src={UserEmoji} alt="user" width={25} />
                                                <span className="text-sm text-black-950">Tam Giyu</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-7 w-[50%]">
                                            <span className="text-sm text-black-950">tamioka@gmail.com</span>
                                        </td>
                                        <td className="py-3 px-5">
                                            <span className="text-sm text-black-950 px-4">Admin</span>
                                        </td>
                                        <td className="py-3 px-4">
                                            <span>
                                                <AdminMoreIcon />
                                            </span>
                                        </td>
                                    </tr>                   
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Admins;
