import { useEffect, useState, useMemo } from "react";
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
import UpdateModal from "../components/UpdateModal";
import PublishModal from "../components/publishModal";
import PreviewModal from "../components/PreviewModal";

const PortfolioBuilder = () => {
    const { portfolioId } = useParams();
    const dispatch = useAppDispatch();
    const { portfolio, isLoading, isSuccess, isError, message } = useAppSelector((state) => state.portfolio);
    const [activeModal, setActiveModal] = useState<string | null>(null);
    const [portfolioData, setPortfolioData] = useState<Portfolio | null>(null);
    const [isMobileEditVisible, setIsMobileEditVisible] = useState(false); // State to control mobile edit visibility
    const [projectToEdit, setProjectToEdit] = useState<any | null>(null);
    const [workToEdit, setWorkToEdit] = useState<any | null>(null);
    const [educationToEdit, setEducationToEdit] = useState<any | null>(null);
    const [certificationToEdit, setCertificationToEdit] = useState<any | null>(null);
    const [isEditingName, setIsEditingName] = useState(false);
    const [tempName, setTempName] = useState(portfolio?.name || '');



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

    // Memoize portfolioData to prevent unnecessary re-renders
    const memoizedPortfolioData = useMemo(() => portfolioData, [portfolioData]);
    // Get the corresponding template component from the templateMap
    const TemplateComponent = portfolioData?.referenceTemplate ? templateMap[portfolioData.referenceTemplate] : null;

    return (
        <div className="h-[100vh] overflow-y-scroll lg:scrollbar-none">
            <div className="grid grid-cols-2 lg:grid-cols-3 px-4 fixed w-full bg-white z-30 py-4 items-center">
                <div className="hidden lg:block">
                    <a href="/dashboard">
                        <Logo />
                    </a>

                </div>
                <div className="flex items-center lg:justify-center gap-1">
                    <UntitledIcon />
                    {isEditingName ? (
                        <input
                            type="text"
                            value={tempName}
                            onChange={(e) => setTempName(e.target.value)}
                            onBlur={() => {
                                updatePortfolioData({ name: tempName });
                                setIsEditingName(false);
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    updatePortfolioData({ name: tempName });
                                    setIsEditingName(false);
                                }
                            }}
                            autoFocus
                            className="border-b border-gray-400 outline-none"
                        />
                    ) : (
                        <p onClick={() => {
                            setTempName(memoizedPortfolioData?.name || '');
                            setIsEditingName(true);
                        }} className="cursor-pointer">
                            {memoizedPortfolioData?.name}
                        </p>
                    )}
                </div>
                <div className="flex items-center gap-4 justify-end">
                    <div className="flex">
                        <span className="text-gray-400 text-xs lg:text-sm">Status</span>
                    </div>
                    <Button
                        onClick={() => setActiveModal("previewModal")}
                        className="px-2 py-2 lg:px-6 lg:py-3 text-xs lg:text-sm border 
                    border-gray-600 rounded-xl lg:flex bg-white text-black-500
                    hover:scale-105 transform transition-transform duration-300 "
                    >
                        Preview
                    </Button>
                    <Button
                        onClick={() => portfolioData?.url ? setActiveModal("updateModal") : setActiveModal("publishModal")}
                        className="lg:flex text-xs lg:text-sm items-center gap-2 custom-bg shadow-lg text-white px-6 py-3 rounded-xl"
                    >
                        {portfolioData?.url ? "Update" : "Publish"}
                    </Button>
                </div>
            </div>

            {/* Edit Button for Mobile */}
            <div className="lg:hidden fixed bottom-2 right-2 z-50">
                <Button
                    onClick={() => setIsMobileEditVisible(!isMobileEditVisible)}
                    className="bg-black-500 text-xs text-white px-4 py-4 rounded-xl shadow-lg"
                >
                    {isMobileEditVisible ? "View Changes" : "Edit"}
                </Button>
            </div>

            <div className="flex justify-between mx-2 lg:mx-4">
                <div className="myTemplate  lg:px-4 py-2 w-[100%] lg:w-[75%] h-[100vh] overflow-y-scroll left-2 lg:border scrollbar-none lg:scrollbar-none lg:scrollbar-thumb-gray-300 lg:scrollbar-track-gray-600 rounded-xl border-gray-600 mt-20">
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
                                {memoizedPortfolioData ? (
                                    <div className="mt-2">
                                        {/* Render Template Frame */}
                                        {TemplateComponent && memoizedPortfolioData ? (
                                            <TemplateComponent
                                                key={memoizedPortfolioData._id} // Ensure re-render
                                                templateId={memoizedPortfolioData.referenceTemplate}
                                                templateData={memoizedPortfolioData}
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

                {/* PortfolioSetup for Desktop */}
                <div className="hidden lg:block w-[24%] h-[80vh] fixed right-0">
                    {isLoading ? (
                        <div className="flex items-center justify-center h-full">
                            <img src={LoaderIcon} alt="loader" width={24} height={24} className="animate-spin" />
                            <p className="ml-2">Loading...</p>
                        </div>
                    ) : memoizedPortfolioData ? (
                        <PortfolioSetup
                            activeModal={activeModal}
                            setActiveModal={setActiveModal}
                            portfolioData={memoizedPortfolioData}
                            updatePortfolioData={updatePortfolioData}
                            setProjectToEdit={setProjectToEdit}
                            setWorkToEdit={setWorkToEdit}
                            setEducationToEdit={setEducationToEdit}
                            setCertificationToEdit={setCertificationToEdit}
                        />
                    ) : (
                        <p className="text-gray-400">No portfolio data available.</p>
                    )}
                </div>

                {/* PortfolioSetup for Mobile */}
                {isMobileEditVisible && memoizedPortfolioData && (
                    <div className="lg:hidden fixed inset-0 bg-white z-40 overflow-y-auto">
                        <PortfolioSetup
                            activeModal={activeModal}
                            setActiveModal={setActiveModal}
                            portfolioData={memoizedPortfolioData}
                            updatePortfolioData={updatePortfolioData}
                            onClose={() => setIsMobileEditVisible(false)} // Pass the onClose prop
                            setProjectToEdit={setProjectToEdit}
                            setWorkToEdit={setWorkToEdit}
                            setEducationToEdit={setEducationToEdit}
                            setCertificationToEdit={setCertificationToEdit}
                        />
                    </div>
                )}
            </div>

            {/* Modals */}
            <Modal isVisible={activeModal === "createProject"} onClose={closeModal}>
                <CreateProject
                    onAddProject={(newProject) => {
                        // Handle adding a new project
                        const updatedProjects = [...(memoizedPortfolioData?.sections.find(section => section.type === "Projects")?.customContent?.projects || []), newProject];
                        updatePortfolioData({
                            sections: memoizedPortfolioData?.sections.map(section =>
                                section.type === "Projects"
                                    ? { ...section, customContent: { ...section.customContent, projects: updatedProjects } }
                                    : section
                            ) || [],
                        });
                        closeModal();
                    }}
                    onUpdateProject={(updatedProject) => {
                        // Handle updating an existing project
                        const projectsSection = memoizedPortfolioData?.sections?.find(section => section.type === "Projects");
                        const existingProjects = projectsSection?.customContent?.projects || [];

                        const updatedProjects = existingProjects.map(project =>
                            project === projectToEdit ? updatedProject : project
                        );
                        updatePortfolioData({
                            sections: memoizedPortfolioData?.sections.map(section =>
                                section.type === "Projects"
                                    ? { ...section, customContent: { ...section.customContent, projects: updatedProjects } }
                                    : section
                            ) || [],
                        });
                        closeModal();
                    }}
                    onClose={closeModal}
                    projectToEdit={projectToEdit} // Pass the project to edit (if any)
                />
            </Modal>
            <Modal isVisible={activeModal === "createWorkModal"} onClose={closeModal}>
                <CreateWorkModal
                    onAddWork={(newWork) => {
                        const updatedWorks = [...(portfolioData?.sections.find(section => section.type === "Work")?.customContent?.work || []), newWork];
                        updatePortfolioData({
                            sections: portfolioData?.sections.map(section =>
                                section.type === "Work"
                                    ? { ...section, customContent: { ...section.customContent, work: updatedWorks } }
                                    : section
                            ) || [],
                        });
                        closeModal();
                    }}
                    onUpdateWork={(updatedWork) => {
                        const worksSection = portfolioData?.sections?.find(section => section.type === "Work");
                        const existingWorks = worksSection?.customContent?.work || [];

                        const updatedWorks = existingWorks.map(work =>
                            work === workToEdit ? updatedWork : work
                        );
                        updatePortfolioData({
                            sections: portfolioData?.sections.map(section =>
                                section.type === "Work"
                                    ? { ...section, customContent: { ...section.customContent, work: updatedWorks } }
                                    : section
                            ) || [],
                        });
                        closeModal();
                    }}
                    onClose={closeModal}
                    workToEdit={workToEdit} // Pass the work to edit (if any)
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
                    onUpdateEducation={(updatedEducation) => {
                        const educationsSection = portfolioData?.sections?.find(section => section.type === "Education");
                        const existingEducations = educationsSection?.customContent?.education || [];

                        const updatedEducations = existingEducations.map(education =>
                            education === educationToEdit ? updatedEducation : education
                        );
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
                    educationToEdit={educationToEdit} // Pass the education to edit (if any)
                />
            </Modal>
            <Modal isVisible={activeModal === "createCertificationModal"} onClose={closeModal}>
                <CreateCertificationModal
                    onAddCertification={(newCertification) => {
                        const updatedCertifications = [...(portfolioData?.sections.find(section => section.type === "Certificates")?.customContent?.certificates || []), newCertification];
                        updatePortfolioData({
                            sections: portfolioData?.sections.map(section =>
                                section.type === "Certificates"
                                    ? { ...section, customContent: { ...section.customContent, certificates: updatedCertifications } }
                                    : section
                            ) || [],
                        });
                        closeModal();
                    }}
                    onUpdateCertification={(updatedCertification) => {
                        const certificatesSection = portfolioData?.sections?.find(section => section.type === "Certificates");
                        const existingCertificates = certificatesSection?.customContent?.certificates || [];

                        const updatedCertificates = existingCertificates.map(certificate =>
                            certificate === certificationToEdit ? updatedCertification : certificate
                        );
                        updatePortfolioData({
                            sections: portfolioData?.sections.map(section =>
                                section.type === "Certificates"
                                    ? { ...section, customContent: { ...section.customContent, certificates: updatedCertificates } }
                                    : section
                            ) || [],
                        });
                        closeModal();
                    }}
                    onClose={closeModal}
                    certificationToEdit={certificationToEdit} // Pass the certification to edit 
                />
            </Modal>

            <Modal isVisible={activeModal === "updateModal"} className="publish-section bg-white" onClose={closeModal}>
                <UpdateModal onClose={closeModal} portfolioData={memoizedPortfolioData} />
            </Modal>

            <Modal isVisible={activeModal === "publishModal"} className="publish-section bg-white" onClose={closeModal}>
                <PublishModal onClose={closeModal} portfolioData={memoizedPortfolioData} />
            </Modal>

            <Modal isVisible={activeModal === "previewModal"} className="bg-white w-full px-0 py-0" width="" onClose={closeModal}>
                <PreviewModal onClose={closeModal} portfolioData={memoizedPortfolioData} />
            </Modal>

        </div>
    );
};

export default PortfolioBuilder;