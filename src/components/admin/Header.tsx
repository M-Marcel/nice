import Search from "../../assets/svg/Search"
import SearchSide from "../../assets/svg/SearchSide"
import AdminAvatar from "../../assets/adminAvatar.png"

const AdminHeader = () => {
    return(
            <div className="w-[75%] z-30 p-5 fixed left-[22%] top-[10px] h-10vh hidden lg:block py-4 px-2">
                        <div className="flex justify-between items-center bg-white -mt-[5px] py-3">
                            <div className="relative w-[27%]">
                                <input type="text" placeholder="Search" className="text-sm border border-gray-900 rounded-lg py-2 outline-none pl-7" />
                                <div className="absolute top-[8px] left-[6px] text-gray-500">
                                    <Search />
                                </div>
                                <div className="absolute right-[22px] top-[11px]">
                                    <SearchSide />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <div>
                                        <img src={AdminAvatar} alt="adminavatar" width={40} height={40} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-black-910">John Mraz</p>
                                        <p className="text-xs text-gray-940">Admin</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}

export default AdminHeader