import UserEmoji from "../../assets/memoji.png";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import { getAllUsers, setPage } from "../../slices/admin/users/userSlice";
import LoaderIcon from "../../assets/loader.svg";
import PrevIcon from "../../assets/svg/PrevIcon";
import NextIcon from "../../assets/svg/NextIcon";
import AdminMoreIcon from "../../assets/svg/admin/moreIcon";

const AdminTable = () => {
    const dispatch = useAppDispatch();
    const { displayedUsers, isLoading, isError, message, currentPage, totalPages, limit } = useAppSelector((state) => state.adminuser);

    useEffect(() => {
        dispatch(getAllUsers({ page: currentPage, pageSize: limit }));
    }, [dispatch, currentPage, limit]);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            dispatch(setPage(currentPage - 1));
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            dispatch(setPage(currentPage + 1));
        }
    };

    // Filter users with role 'admin'
    const adminUsers = displayedUsers.filter(user => user.role === 'admin');

    return (
        <div className="mx-4">
            <table className="table-auto text-left w-full border-collapse">
                <thead className="">
                    <tr>
                        <th className="text-gray-960 font-medium text-sm py-3 px-8 w-[20%]">User</th>
                        <th className="text-gray-960 font-medium text-sm py-3 px-8 w-[30%]">Email</th>
                        <th className="text-gray-960 font-medium text-sm py-3 px-8">Role</th>
                        <th className="text-gray-960 font-medium text-sm py-3 px-8"></th>
                    </tr>
                </thead>
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
                    <tbody className="border border-gray-900">
                        {adminUsers.length > 0 ? (
                            adminUsers.map((user) => (
                                <tr key={user?._id} className="bg-white shadow-custom-inset">
                                    <td className="py-4 px-6 w-[20%]">
                                        <div className="flex items-center gap-1">
                                            <img src={UserEmoji} alt="user" width={25} />
                                            <span className="text-sm text-black-950">{user?.firstName} {user?.lastName}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-7 w-[30%]">
                                        <span className="text-sm text-black-950">{user?.email}</span>
                                    </td>
                                    <td className="py-3 px-5">
                                        <span className="text-sm text-black-950 px-4">{user?.role}</span>
                                    </td>
                                    <td className="py-3 px-4">
                                        <span>
                                            <AdminMoreIcon />
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <p className="text-gray-400">No admin users available</p>
                        )}
                    </tbody>
                )}
            </table>
            <div className="pagination-buttons flex justify-between mt-4">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage <= 1}
                    className="px-4 py-2  text-gray-500 rounded-md disabled:opacity-50"
                >
                    <PrevIcon />
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage >= totalPages}
                    className="px-4 py-2 text-gary-500 rounded-md disabled:opacity-50"
                >
                    <NextIcon />
                </button>
            </div>
        </div>
    );
};

export default AdminTable;