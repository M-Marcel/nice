import LeftSidebar from "../../components/LeftSidebar";
import AdminHeader from "../../components/admin/Header";
import Button from "../../components/Button";
import AdminTable from "../../components/admin/AdminList";
import Modal from "../../components/Modal";
import CreateAdmin from "../../components/admin/CreateAdminForm";
import { enablePageScroll } from "scroll-lock";
import { useModal } from "../../context/ModalContext";


const Admins = () => {
 
    const { activeModal, setActiveModal } = useModal()

    const closeModal = () => {
        setActiveModal(null);
        document.body.style.overflow = "auto";
        enablePageScroll()
    };


    return (
        <div className="bg-black-300 h-screen">
            <div className="bg-black-800 mx-2 h-full rounded-[30px] flex gap-5 py-4 px-4">
                <LeftSidebar dashboardType="admin" />
                <div className="mainDashboardFeatures bg-white h-[full] overflow-y-scroll rounded-[40px] w-[100%] lg:w-[80%] 
                lg:relative md:z-30 lg:z-40 left-[20%] px-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-black-300">
                    <AdminHeader />
                    <div className="relative top-[90px] z-2">
                        <div className="flex items-end justify-end">
                            <Button
                                className="custom-bg"
                                onClick={() => setActiveModal("createAdmin")}
                            >Create Admin
                            </Button>
                        </div>
                        <div className="mx-4">
                            <AdminTable />
                        </div>
                    </div>
                </div>
            </div>
            <Modal isVisible={activeModal === "createAdmin"} onClose={closeModal}>
                <CreateAdmin />
            </Modal>


        </div>

    );
};

export default Admins;
