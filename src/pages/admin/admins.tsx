import LeftSidebar from "../../components/LeftSidebar";
import AdminHeader from "../../components/admin/Header";
import Button from "../../components/Button";


import { useAppSelector } from "../../hooks";
import AdminTable from "../../components/admin/AdminList";


const Admins = () => {
    const { user }= useAppSelector((state) => state.adminauth); 
    const userRole = user?.role

    return (
        <div className="bg-black-300 h-screen">
            <div className="bg-black-800 mx-2 h-full rounded-[30px] flex gap-5 py-4 px-4">
                <LeftSidebar userRole={userRole} />
                <div className="mainDashboardFeatures bg-white h-[full] overflow-y-scroll rounded-[40px] w-[100%] lg:w-[80%] 
                lg:relative md:z-30 lg:z-40 left-[20%] px-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-black-300">
                    <AdminHeader />
                    <div className="relative top-[90px] z-2">
                         <div className="flex items-end justify-end">
                             <Button className="custom-bg">Create Admin</Button>
                         </div>
                        <div className="mx-4">
                            <AdminTable />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Admins;
