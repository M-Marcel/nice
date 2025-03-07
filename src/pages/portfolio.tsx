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
import templateMap from "../templates/templateMap";
import { Portfolio } from "../dataTypes";
import { getPortfolioById } from "../slices/portfolio/portfolioSlice";
import CreateWorkModal from "../components/createWorkModal";
import CreateEducationModal from "../components/createEducationModal";
import CreateCertificationModal from "../components/createCertificationModal";

const PortfolioBuilder = () => {
    const { portfolioId } = useParams();
    const dispatch = useAppDispatch();
    const { portfolio, isLoading, isSuccess, isError, message } = useAppSelector((state) => state.portfolio);
    const [activeModal, setActiveModal] = useState<string | null>(null);
    const [portfolioData, setPortfolioData] = useState<Portfolio | null>(null);

    // Load portfolio data from localStorage on initial render
    useEffect(() => {
        const savedPortfolioData = localStorage.getItem("portfolioData");
        if (savedPortfolioData) {
            setPortfolioData(JSON.parse(savedPortfolioData));
        }
    }, []);

    useEffect(() => {
        if (portfolioId) {
            dispatch(getPortfolioById(portfolioId));
        }
    }, [dispatch, portfolioId]);

    useEffect(() => {
        if (isSuccess) {
            console.log("Initializing templateData with fetched template:", portfolio);
            setPortfolioData(portfolio);
        }
    }, [portfolio, isSuccess]);

    // Persist portfolioData to localStorage whenever it changes
    useEffect(() => {
        if (portfolioData) {
            localStorage.setItem("portfolioData", JSON.stringify(portfolioData));
        }
    }, [portfolioData]);

    const closeModal = () => {
        setActiveModal(null);
        document.body.style.overflow = "auto";
    };

    const updatePortfolioData = (updatedData: Partial<Portfolio>) => {
        if (portfolioData) {
            console.log("Updating PortfolioData:", updatedData);
            setPortfolioData((prev) => ({
                ...prev!, // Preserve the existing state
                ...updatedData, // Merge the updated data
                sections: prev!.sections.map((section) => {
                    // Find the updated section in the new data
                    const updatedSection = updatedData.sections?.find(
                        (s) => s.type === section.type
                    );
                    if (updatedSection) {
                        return {
                            ...section,
                            customContent: {
                                ...section.customContent,
                                ...updatedSection.customContent,
                            },
                        };
                    }
                    return section; // Return the original section if no updates
                }),
            }));
        } else {
            console.error("portfolioData is null. Cannot update.");
        }
    };

    // Get the corresponding template component from the templateMap
    const TemplateComponent = portfolioData?.referenceTemplate ? templateMap[portfolioData.referenceTemplate] : null;

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
                <div className="myTemplate px-4 py-4 w-[75%] h-[100vh] overflow-y-scroll left-2 border lg:scrollbar-none lg:scrollbar-thumb-gray-300 lg:scrollbar-track-gray-600 rounded-xl border-gray-600 mt-20">
                    {/* Loading, Error, and Template Rendering Logic */}
                    {isLoading ? (
                        <div className="flex items-center justify-center gap-6 h-[60vh]">
                            <img src={LoaderIcon} alt="loader" width={24} height={24} className="animate-spin" />
                            Loading ...
                        </div>
                    ) : isError ? (
                        <p className="text-red-500">{message}</p>
                    ) : (
                        <>
                            <div>
                                {portfolioData ? (
                                    <div className="mt-2">
                                        {/* Render Template Frame */}
                                        {TemplateComponent && portfolioData ? (
                                            <TemplateComponent
                                                key={portfolioData._id} // Ensure re-render
                                                templateId={portfolioData.referenceTemplate}
                                                templateData={portfolioData}
                                            />
                                        ) : (
                                            <p className="text-gray-400">Template component not found.</p>
                                        )}
                                    </div>
                                ) : (
                                    // Render "Portfolio not found" message if no portfolio
                                    <p className="text-gray-400">Portfolio not found.</p>
                                )}
                            </div>
                        </>
                    )}
                </div>
                <div className="w-[24%] h-[80vh] fixed right-0">
                    {isLoading ? (
                        <div className="flex items-center justify-center h-full">
                            <img src={LoaderIcon} alt="loader" width={24} height={24} className="animate-spin" />
                            <p className="ml-2">Loading...</p>
                        </div>
                    ) : portfolioData ? (
                        <PortfolioSetup
                            activeModal={activeModal}
                            setActiveModal={setActiveModal}
                            portfolioData={portfolioData}
                            updatePortfolioData={updatePortfolioData}
                        />
                    ) : (
                        <p className="text-gray-400">No portfolio data available.</p>
                    )}
                </div>
            </div>
            <Modal isVisible={activeModal === "createProject"} onClose={closeModal}>
                <CreateProject
                    onAddProject={(newProject) => {
                        // Handle adding the new project to the portfolioData
                        const updatedProjects = [...(portfolioData?.sections.find(section => section.type === "Projects")?.customContent?.projects || []), newProject];
                        updatePortfolioData({
                            sections: portfolioData?.sections.map(section =>
                                section.type === "Projects"
                                    ? { ...section, customContent: { ...section.customContent, projects: updatedProjects } }
                                    : section
                            ) || [],
                        });
                        closeModal();
                    }}
                    onClose={closeModal}
                />
            </Modal>
            <Modal isVisible={activeModal === "createWorkModal"} onClose={closeModal}>
                <CreateWorkModal
                    onAddWork={(newWork) => {
                        const updatedWorks = [...(portfolioData?.sections.find(section => section.type === "Work")?.customContent?.work || []), newWork]; // Use `work` instead of `works`
                        updatePortfolioData({
                            sections: portfolioData?.sections.map(section =>
                                section.type === "Work"
                                    ? { ...section, customContent: { ...section.customContent, work: updatedWorks } } // Use `work` instead of `works`
                                    : section
                            ) || [],
                        });
                        closeModal();
                    }}
                    onClose={closeModal}
                />
            </Modal>
            <Modal isVisible={activeModal === "createEducationModal"} onClose={closeModal}>
                <CreateEducationModal
                    onAddEducation={(newEducation) => {
                        const updatedEducations = [...(portfolioData?.sections.find(section => section.type === "Education")?.customContent?.education || []), newEducation];
                        updatePortfolioData({
                            sections: portfolioData?.sections.map(section =>
                                section.type === "Education"
                                    ? { ...section, customContent: { ...section.customContent, education: updatedEducations } }
                                    : section
                            ) || [],
                        });
                        closeModal();
                    }}
                    onClose={closeModal}
                />
            </Modal>
            <Modal isVisible={activeModal === "createCertificationModal"} onClose={closeModal}>
                <CreateCertificationModal
                    onAddCertification={(newCertificates) => {
                        const updatedCertifications = [...(portfolioData?.sections.find(section => section.type === "Certificates")?.customContent?.certificates || []), newCertificates];
                        updatePortfolioData({
                            sections: portfolioData?.sections.map(section =>
                                section.type === "Certificates"
                                    ? { ...section, customContent: { ...section.customContent, certificates: updatedCertifications } }
                                    : section
                            ) || [],
                        });
                        closeModal();
                    }}
                    onClose={closeModal}
                />
            </Modal>
        </div>
    );
};

export default PortfolioBuilder;