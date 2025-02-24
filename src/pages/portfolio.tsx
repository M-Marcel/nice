import { useState } from "react"
import UntitledIcon from "../assets/svg/Untitledicon"
import Button from "../components/Button"
import Logo from "../components/Logo"
import PortfolioSetup from "../components/PortfolioSetup"
import Modal from "../components/Modal"
import CreateProject from "../components/CreateProject"

const PortfolioBuilder = () => {

    const [activeModal, setActiveModal] = useState<string | null>(null);

    const closeModal = () => {
        setActiveModal(null);
        document.body.style.overflow = "auto";
    };

    return (
        <div className="h-[100vh] overflow-y-scroll lg:scrollbar-none">
            <div className="grid grid-cols-3 px-2 fixed w-full bg-white z-30 py-4 items-center">
                <div>
                    <Logo />
                </div>
                <div className="flex items-center gap-1">
                    <UntitledIcon />
                    <p>untitled</p>
                </div>
                <div className="flex items-center gap-4 justify-end">
                    <div className="flex">
                        <span className="text-gray-400 text-sm">Status</span>
                    </div>
                    <Button className="px-6 py-3 text-sm border border-gray-600 rounded-xl lg:flex bg-white shadow-lg text-black-500">Preview</Button>
                    <Button className="lg:flex text-sm items-center gap-2 custom-bg shadow-lg text-white px-6 py-3
                    rounded-xl">
                        Publish
                    </Button>
                </div>
            </div>
            <div className="flex justify-between mx-4">
                <div className="w-[75%] h-[85vh] fixed left-2 border rounded-xl border-gray-600 mt-20"></div>
                <div className="w-[24%] h-[80vh] fixed right-0 ">
                    <PortfolioSetup
                          activeModal={activeModal}
                          setActiveModal={setActiveModal}
                    />
                </div>
            </div>
            <Modal isVisible={activeModal === "createProject"} onClose={closeModal}>
                <CreateProject />
            </Modal>
        </div>
    )
}

export default PortfolioBuilder