import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { SidebarLinks } from "../constants";
import { logout } from "../slices/auth/authSlice";
import Button from "./Button";
import Logo from "./Logo";
import UserIcon from "../assets/user.png";
import MaleAvatar from '../assets/malee-avatae.png'
import FemaleAvatar from '../assets/female-avatar.jpeg'
import Logout from "../assets/svg/Logout";
import ComputerIcon from "../assets/computer-white.png";
import LogoutModal from "./LogoutModal";
import AdminLogo from "./AdminLogo";

const LeftSidebar = ({ userRole }: { userRole?: string }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const user = useAppSelector((state) => state.auth?.user);
  const role = userRole || user?.role;
  const dispatch = useAppDispatch();

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const openLogoutModal = () => {
    setLogoutModalOpen(true);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setSidebarOpen(false);
      }

    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
    
  }, []);

  return (
    <>
      <div
        className={`${role === "admin" ? "bg-none w-[88%] top-[20px]" : "bg-white w-full"
          } z-50 fixed py-4 block lg:hidden`}
      >
        <div className="flex justify-between">
          <div className="flex items-center gap-2 ml-4 bg-white">
            <a href="/">
              <Logo />
            </a>

            <Button
              className={`${role === "admin" ? "hidden" : "flex"
                } items-center gap-2 bg-black-500 text-xs text-white px-4 py-2 rounded-md`}
            >
              <img src={ComputerIcon} alt="compIcon" width={18} height={18} />
              Beta
            </Button>
          </div>
          <button
            onClick={(event) => {
              event.stopPropagation();
              toggleSidebar();
            }}
            className={`${role === "admin" ? "absolute right-0" : "mr-4"
              } text-xs z-50 text-white px-2 py-3 rounded-md lg:hidden`}
          >
            {sidebarOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#1A1C1F"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#1A1C1F"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-[100%] ${role === "admin"
            ? "bg-black-800 text-white border-none"
            : "bg-white border-r border-gray-600"
          } z-50 shadow-lg transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 transition-transform duration-300 lg:w-[18%] flex flex-col gap-3 px-4 py-4`}
      >
        <div className={`py-4 ${role === "admin" ? "ml-8 mt-4" : "ml-0"}`}>
          <a href="/">
            {role === "admin" ? <AdminLogo /> : <Logo />}
          </a>
        </div>
        <div
          className={`justify-between items-center ${role === "admin" ? "hidden" : "flex"
            } border border-gray-900 py-4 px-2 rounded-xl`}
        >
          <div
            className={`gap-2 items-center ${role === "admin" ? "hidden" : "flex"
              }`}
          >
            <img
              src={
                user?.gender === "Male"
                  ? MaleAvatar
                  : user?.gender === "Female"
                    ? FemaleAvatar
                    : MaleAvatar
              }
              alt="Profile"
              width={25}
              height={25}
              className="rounded-full"
            />
            <a href="/profile">
              <p className="text-sm">
                {user?.lastName} {user?.firstName}
              </p>
            </a>
          </div>
        </div>
        {SidebarLinks.map((item) => {          if (role === "user" && !item.isAdmin) {
            return (
              <a
                key={item.id}
                href={item.url}
                className={`text-black-500/55 hover:text-black-500 hover:bg-gray-910 rounded-lg px-2 py-3 ${location.pathname === item.url ? "bg-gray-910 rounded-lg text-black-500" : ""
                  }`}
              >
                <div className="flex gap-2 items-center">
                  <item.icon />
                  <p className="text-sm">{item.title}</p>
                </div>
              </a>
            );
          }
          if (role === "admin" && item.isAdmin) {
            return (
              <a
                key={item.id}
                href={item.url}
                className={`hover:text-white text-sm hover:bg-black-300 rounded-lg px-4 py-3 ml-4 ${location.pathname === item.url
                    ? "bg-black-300 rounded-lg text-white"
                    : "text-white/55"
                  }`}
              >
                <div className="flex gap-2 items-center">
                  <item.icon />
                  <p className="text-sm">{item.title}</p>
                </div>
              </a>
            );
          }
          return null;
        })}
        <a
          href="/contact-us"
          className={`${role === "admin" ? "hidden" : "flex"
            } gap-2 items-center mt-auto text-gray-500 hover:text-black-500 hover:bg-gray-910 px-2 py-3`}
        >
          <img src={UserIcon} alt="dashboard" width={18} height={18} />
          <p className="text-sm">Contact us</p>
        </a>
        <Button
          onClick={openLogoutModal}
          className={`flex ${role === "admin" ? "mt-auto ml-4" : "mt-0 bg-white"
            } gap-2 items-center text-sm`}
        >
          <Logout />
          <span className="text-red-600">Log out</span>
        </Button>
      </div>
      {logoutModalOpen && (
        <LogoutModal
          onConfirm={handleLogout}
          onClose={() => setLogoutModalOpen(false)}
        />
      )}
    </>
  );
};

export default LeftSidebar;
