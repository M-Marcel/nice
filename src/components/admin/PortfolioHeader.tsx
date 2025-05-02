import Search from "../../assets/svg/Search";
import SearchSide from "../../assets/svg/SearchSide";
import AdminAvatar from "../../assets/adminAvatar.png";
import { useAppSelector } from "../../hooks";

const PortfolioAdminHeader = () => {
  const { user } = useAppSelector((state) => state.adminauth);
  return (
    <div className="w-[75%] z-30 p-5 fixed left-[22%] top-[10px] h-10vh hidden lg:block py-4 px-2">
      <div className="flex justify-between items-center bg-white -mt-[5px] py-3">
        <div className="relative w-[27%]">
          <input
            type="text"
            placeholder="Search"
            className="text-sm border border-gray-900 rounded-lg py-2 outline-none pl-7"
          />
          <div className="absolute top-[8px] left-[6px] text-gray-500">
            <Search />
          </div>
          <div className="absolute right-[22px] top-[11px]">
            <SearchSide />
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex items-center justify-center">
            <button className="flex items-center justify-center gap-2 font-medium border-0 outline-0">
              <span className="">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 16L6 12"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M11 16L11 6"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M16 16L16 10"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M1.5 11C1.5 6.52166 1.5 4.28249 2.89124 2.89124C4.28249 1.5 6.52166 1.5 11 1.5C15.4783 1.5 17.7175 1.5 19.1088 2.89124C20.5 4.28249 20.5 6.52166 20.5 11C20.5 15.4783 20.5 17.7175 19.1088 19.1088C17.7175 20.5 15.4783 20.5 11 20.5C6.52166 20.5 4.28249 20.5 2.89124 19.1088C1.5 17.7175 1.5 15.4783 1.5 11Z"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span className="text-sm text-black-500">Analytics</span>
            </button>
          </div>
          <div>
            <a href="/admin/profile">
              <div className="flex items-center gap-2">
                <div>
                  <img
                    src={AdminAvatar}
                    alt="adminavatar"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-black-910">
                    {user?.firstName} {user?.lastName}
                  </p>
                  <p className="text-xs text-gray-940">Admin</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioAdminHeader;
