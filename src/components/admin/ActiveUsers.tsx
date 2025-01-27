import UserEmoji from "../../assets/memoji.png"
import UserMore from "../../components/admin/UserMore";

const ActiveUsers = () => {
    return (
        <div className="mx-4">
            <table className="table-auto text-left w-full border-collapse">
                <thead className="">
                    <tr>
                        <th className="text-gray-960 font-medium text-sm py-3 px-8">User</th>
                        <th className="text-gray-960 font-medium text-sm py-3 px-8 w-[20%]">Email</th>
                        <th className="text-gray-960 font-medium text-sm py-3 px-8">Current Plan</th>
                        <th className="text-gray-960 font-medium text-sm py-3 px-8">Last Login</th>
                        <th className="text-gray-960 font-medium text-sm py-3 px-8">Joined</th>
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
                        <td className="py-3 px-7 w-[20%]">
                            <span className="text-sm text-black-950">tamioka@gmail.com</span>
                        </td>
                        <td className="py-3 px-5">
                            <span className="text-sm text-black-950 px-4">Premium</span>
                        </td>
                        <td className="py-3 px-8">
                            <span className="text-sm text-black-950">30/08/2025</span>
                        </td>
                        <td className="py-3 px-8">
                            <span className="text-sm text-black-950">30/08/2025</span>
                        </td>
                        <td className="py-3 px-4">
                            <UserMore />
                        </td>
                    </tr>
                    <tr className="bg-white shadow-custom-inset">
                        <td className="py-4 px-6">
                            <div className="flex items-center gap-1">
                                <img src={UserEmoji} alt="user" width={25} />
                                <span className="text-sm text-black-950">Tam Giyu</span>
                            </div>
                        </td>
                        <td className="py-3 px-7 w-[20%]">
                            <span className="text-sm text-black-950">tamioka@gmail.com</span>
                        </td>
                        <td className="py-3 px-5">
                            <span className="text-sm text-black-950 px-4">Premium</span>
                        </td>
                        <td className="py-3 px-8">
                            <span className="text-sm text-black-950">30/08/2025</span>
                        </td>
                        <td className="py-3 px-8">
                            <span className="text-sm text-black-950">30/08/2025</span>
                        </td>
                        <td className="py-3 px-4">
                            <UserMore />
                        </td>
                    </tr>
                    <tr className="bg-white shadow-custom-inset">
                        <td className="py-4 px-6">
                            <div className="flex items-center gap-1">
                                <img src={UserEmoji} alt="user" width={25} />
                                <span className="text-sm text-black-950">Tam Giyu</span>
                            </div>
                        </td>
                        <td className="py-3 px-7 w-[20%]">
                            <span className="text-sm text-black-950">tamioka@gmail.com</span>
                        </td>
                        <td className="py-3 px-5">
                            <span className="text-sm text-black-950 px-4">Premium</span>
                        </td>
                        <td className="py-3 px-8">
                            <span className="text-sm text-black-950">30/08/2025</span>
                        </td>
                        <td className="py-3 px-8">
                            <span className="text-sm text-black-950">30/08/2025</span>
                        </td>
                        <td className="py-3 px-4">
                            <UserMore />
                        </td>
                    </tr>
                    <tr className="bg-white shadow-custom-inset">
                        <td className="py-4 px-6">
                            <div className="flex items-center gap-1">
                                <img src={UserEmoji} alt="user" width={25} />
                                <span className="text-sm text-black-950">Tam Giyu</span>
                            </div>
                        </td>
                        <td className="py-3 px-7 w-[20%]">
                            <span className="text-sm text-black-950">tamioka@gmail.com</span>
                        </td>
                        <td className="py-3 px-5">
                            <span className="text-sm text-black-950 px-4">Premium</span>
                        </td>
                        <td className="py-3 px-8">
                            <span className="text-sm text-black-950">30/08/2025</span>
                        </td>
                        <td className="py-3 px-8">
                            <span className="text-sm text-black-950">30/08/2025</span>
                        </td>
                        <td className="py-3 px-4">
                            <UserMore />
                        </td>
                    </tr>
                    <tr className="bg-white shadow-custom-inset">
                        <td className="py-4 px-6">
                            <div className="flex items-center gap-1">
                                <img src={UserEmoji} alt="user" width={25} />
                                <span className="text-sm text-black-950">Tam Giyu</span>
                            </div>
                        </td>
                        <td className="py-3 px-7 w-[20%]">
                            <span className="text-sm text-black-950">tamioka@gmail.com</span>
                        </td>
                        <td className="py-3 px-5">
                            <span className="text-sm text-black-950 px-4">Premium</span>
                        </td>
                        <td className="py-3 px-8">
                            <span className="text-sm text-black-950">30/08/2025</span>
                        </td>
                        <td className="py-3 px-8">
                            <span className="text-sm text-black-950">30/08/2025</span>
                        </td>
                        <td className="py-3 px-4">
                            <UserMore />
                        </td>
                    </tr>
                    <tr className="bg-white shadow-custom-inset">
                        <td className="py-4 px-6">
                            <div className="flex items-center gap-1">
                                <img src={UserEmoji} alt="user" width={25} />
                                <span className="text-sm text-black-950">Tam Giyu</span>
                            </div>
                        </td>
                        <td className="py-3 px-7 w-[20%]">
                            <span className="text-sm text-black-950">tamioka@gmail.com</span>
                        </td>
                        <td className="py-3 px-5">
                            <span className="text-sm text-black-950 px-4">Premium</span>
                        </td>
                        <td className="py-3 px-8">
                            <span className="text-sm text-black-950">30/08/2025</span>
                        </td>
                        <td className="py-3 px-8">
                            <span className="text-sm text-black-950">30/08/2025</span>
                        </td>
                        <td className="py-3 px-4">
                            <UserMore />
                        </td>
                    </tr>
                    <tr className="bg-white shadow-custom-inset">
                        <td className="py-4 px-6">
                            <div className="flex items-center gap-1">
                                <img src={UserEmoji} alt="user" width={25} />
                                <span className="text-sm text-black-950">Tam Giyu</span>
                            </div>
                        </td>
                        <td className="py-3 px-7 w-[20%]">
                            <span className="text-sm text-black-950">tamioka@gmail.com</span>
                        </td>
                        <td className="py-3 px-5">
                            <span className="text-sm text-black-950 px-4">Premium</span>
                        </td>
                        <td className="py-3 px-8">
                            <span className="text-sm text-black-950">30/08/2025</span>
                        </td>
                        <td className="py-3 px-8">
                            <span className="text-sm text-black-950">30/08/2025</span>
                        </td>
                        <td className="py-3 px-4">
                            <UserMore />
                        </td>
                    </tr>
                    <tr className="bg-white shadow-custom-inset">
                        <td className="py-4 px-6">
                            <div className="flex items-center gap-1">
                                <img src={UserEmoji} alt="user" width={25} />
                                <span className="text-sm text-black-950">Tam Giyu</span>
                            </div>
                        </td>
                        <td className="py-3 px-7 w-[20%]">
                            <span className="text-sm text-black-950">tamioka@gmail.com</span>
                        </td>
                        <td className="py-3 px-5">
                            <span className="text-sm text-black-950 px-4">Premium</span>
                        </td>
                        <td className="py-3 px-8">
                            <span className="text-sm text-black-950">30/08/2025</span>
                        </td>
                        <td className="py-3 px-8">
                            <span className="text-sm text-black-950">30/08/2025</span>
                        </td>
                        <td className="py-3 px-4">
                            <UserMore />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ActiveUsers