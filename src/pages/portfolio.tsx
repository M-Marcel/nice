import { useEffect, useState } from "react";
import UntitledIcon from "../assets/svg/Untitledicon";
import Button from "../components/Button";
import Logo from "../components/Logo";
import PortfolioSetup from "../components/PortfolioSetup";
import Modal from "../components/Modal";
import CreateProject from "../components/CreateProject";
import { useParams } from "react-router-dom";
import LoaderIcon from "../assets/loader.svg";

import { useAppDispatch, useAppSelector } from "../hooks";
import { getTemplateById, reset } from "../slices/template/templateSlice";
import templateMap from "../templates/templateMap";
import { toast } from "react-toastify";

const PortfolioBuilder = () => {
    const { templateId } = useParams(); // Get the templateId from the URL
    const dispatch = useAppDispatch();
    const { template, isLoading, isSuccess, isError, message } = useAppSelector((state) => state.template);
    const [activeModal, setActiveModal] = useState<string | null>(null);

    console.log("Template ID from URL:", templateId);

    useEffect(() => {
        if (templateId) {
            dispatch(getTemplateById(templateId));
        }
    }, [dispatch, templateId]);

    useEffect(() => {
        if (isSuccess) {
            console.log("Template Data from API:", template);
            console.log("Template ID from API:", template?._id);
            toast.success("Exact template fetched");
            dispatch(reset());
        }
    }, [isSuccess, dispatch, template]);

    const closeModal = () => {
        setActiveModal(null);
        document.body.style.overflow = "auto";
    };

    // Get the corresponding template component from the templateMap
    const TemplateComponent = templateId ? templateMap[templateId] : null;
    console.log("Template Component:", TemplateComponent);

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
                    <Button className="lg:flex text-sm items-center gap-2 custom-bg shadow-lg text-white px-6 py-3 rounded-xl">
                        Publish
                    </Button>
                </div>
            </div>
            <div className="flex justify-between mx-4">
                <div className="myTemplate px-4 w-[75%] h-[85vh] fixed left-2 border rounded-xl border-gray-600 mt-20">
                    {/* Loading, Error, and Template Rendering Logic */}
                    {isLoading ? (
                        <div className="flex items-center justify-center gap-6 h-[60vh]">
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
                        <>
                            {TemplateComponent && templateId && template ? (
                               
                                <TemplateComponent templateId={templateId} templateData={template} />
                            ) : (
                                <p className="text-gray-400">Template component not found.</p>
                            )}
                        </>
                    )}
                </div>
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
    );
};

export default PortfolioBuilder;