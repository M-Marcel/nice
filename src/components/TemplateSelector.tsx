import { MouseEvent } from 'react';
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useEffect, useState } from "react";
import { getTemplates } from "../slices/template/templateSlice";
import LoaderIcon from "../assets/loader.svg";
import { toast } from "react-toastify";
import Button from "./Button";
import { createPortfolio } from "../slices/portfolio/portfolioSlice";
import Modal from "./Modal";
import Creative from "../templates/Creative";
import Minimalist from "../templates/Minmalist";
import Professional from "../templates/Professional";
import { Portfolio } from '../dataTypes';

  
const TemplateSelector = ({ setActiveModal }: any) => {
    const dispatch = useAppDispatch();
    const { templates, isLoading, isError, message } = useAppSelector((state) => state.template);
    const navigate = useNavigate();
    const [activeModal, setActiveModalState] = useState<string | null>(null);
    const [selectedTemplate, setSelectedTemplate] = useState<any>(null);

    useEffect(() => {
        if (templates.length === 0) {
            dispatch(getTemplates({ page: 1, pageSize: 5 }));
        }
    }, [dispatch, templates.length]);

    const handleCreatePortfolio = async (id: string) => {
        try {
            const portfolioData = {
                referenceTemplate: id
            };
            const response = await dispatch(createPortfolio(portfolioData));
            console.log("Create port resp", response)

            if (response) {
                const payload = response?.payload as any;
                console.log("port payload", payload)
                navigate(`/portfolio/${payload.portfolio?._id}`);
                setActiveModal(null);
            }
        } catch (error: any) {
            toast.error('Failed to create portfolio');
        }
    };

    const handleViewTemplate = (template: any) => {
        setSelectedTemplate(template);
        setActiveModalState("previewModal");
    };

    const closeModal = () => {
        setActiveModalState(null);
    };

    const PreviewModal = ({ onClose, template }: any) => {
        // Mock portfolio data for preview
        const mockPortfolioData: Portfolio = {
            _id: "preview-template-id",
            name: "Preview Portfolio",
            url: "preview-portfolio",
            slug: "preview-portfolio",
            userId: "preview-user-id",
            referenceTemplate: template._id,
            createdAt: new Date().toISOString(),
            lastUpdated: new Date().toISOString(),
            __v: 0,
            sections: [
                {
                    _id: "preview-section-1",
                    type: "Profile",
                    portfolioId: "preview-portfolio-id",
                    sectionId: "profile-section",
                    customContent: {
                        profileImage: "",
                        coverImg: "",
                        name: "John Doe",
                        email: "john.doe@example.com",
                        about: "This is a sample about section that would be filled with the user's information in the actual portfolio.",
                        location: "New York, USA",
                        socialLinks: [
                            {
                                x: "https://twitter.com",
                                linkedIn: "https://linkedin.com"
                            }
                        ]
                    },
                    createdAt: new Date().toISOString(),
                    lastUpdated: new Date().toISOString(),
                    __v: 0
                },
                {
                    _id: "preview-section-2",
                    type: "Skills",
                    portfolioId: "preview-portfolio-id",
                    sectionId: "skills-section",
                    customContent: {
                        skills: ["React", "TypeScript", "Node.js", "UI/UX Design"]
                    },
                    createdAt: new Date().toISOString(),
                    lastUpdated: new Date().toISOString(),
                    __v: 0
                },
                {
                    _id: "preview-section-3",
                    type: "Projects",
                    portfolioId: "preview-portfolio-id",
                    sectionId: "projects-section",
                    customContent: {
                        projects: [
                            {
                                projectName: "Sample Project",
                                myRole: "Lead Developer",
                                about: "This is a sample project description",
                                url: "https://example.com",
                                images: {
                                    image1: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
                                    image2: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
                                    image3: null
                                }
                            }
                        ]
                    },
                    createdAt: new Date().toISOString(),
                    lastUpdated: new Date().toISOString(),
                    __v: 0
                },
                {
                    _id: "preview-section-4",
                    type: "Work",
                    portfolioId: "preview-portfolio-id",
                    sectionId: "work-section",
                    customContent: {
                        work: [
                            {
                                role: "Sample Role",
                                company: "Sample Company",
                                startDate: "Jan 2020",
                                endDate: "Present",
                                isRoleActive: true,
                                description: "This is a sample work experience description."
                            }
                        ]
                    },
                    createdAt: new Date().toISOString(),
                    lastUpdated: new Date().toISOString(),
                    __v: 0
                },
                {
                    _id: "preview-section-5",
                    type: "Education",
                    portfolioId: "preview-portfolio-id",
                    sectionId: "education-section",
                    customContent: {
                        education: [
                            {
                                degree: "Sample Degree",
                                school: "Sample University",
                                startYear: 2015,
                                endYear: 2019,
                                isStudent: false
                            }
                        ]
                    },
                    createdAt: new Date().toISOString(),
                    lastUpdated: new Date().toISOString(),
                    __v: 0
                },
                {
                    _id: "preview-section-6",
                    type: "Certificates",
                    portfolioId: "preview-portfolio-id",
                    sectionId: "certificates-section",
                    customContent: {
                        certificates: [
                            {
                                name: "Sample Certificate",
                                issuedBy: "Sample Institution",
                                yearIssued: "2023"
                            }
                        ]
                    },
                    createdAt: new Date().toISOString(),
                    lastUpdated: new Date().toISOString(),
                    __v: 0
                }
            ]
        };
        const renderTemplate = () => {
            switch (template?.name) {
                case "Creative":
                    return <Creative templateId={template._id} templateData={mockPortfolioData} />;
                case "Minimalist":
                    return <Minimalist templateId={template._id} templateData={mockPortfolioData} />;
                case "Professional":
                    return <Professional templateId={template._id} templateData={mockPortfolioData} />;
                default:
                    return <p>Template not found</p>;
            }
        };

        return (
            <div className="relative h-[100vh] overflow-y-scroll scrollbar-none">
                {/* <Button
                    onClick={onClose}
                    className="absolute right-4 top-4 z-10 bg-white rounded-full p-2 shadow-lg"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </Button> */}
                {renderTemplate()}
            </div>
        );
    };

    return (
        <>
            <div className="flex relative justify-center items-center text-center">
                <Button
                    onClick={() => setActiveModal("createProjectModal")}
                    className="absolute left-5"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z" fill="#1D1B20" />
                    </svg>
                </Button>
                <h2 className="text-lg lg:text-3xl">Select a template to start with</h2>
            </div>
            <div className="mt-6 mb-6">
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
                        {templates && templates.length > 0 ? (
                            <div className="grid grid-cols-2 lg:grid-cols-3 w-full">
                                {templates.map((template) => (
                                    <div key={template._id} className="mb-2">
                                        <div className="px-2 lg:px-4 py-2 rounded-xl hover:scale-105 transform transition-transform duration-300">
                                            <div className="w-full h-[25vh] border border-gray-600 rounded-lg">
                                                {template.name === "Professional" && (
                                                    <img
                                                        src="https://plus.unsplash.com/premium_photo-1736165168647-e216dcd23720?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                        alt="frame"
                                                        className="w-full h-full object-cover"
                                                    />
                                                )}
                                                {template.name === "Creative" && (
                                                    <img
                                                        src="https://images.pexels.com/photos/5665104/pexels-photo-5665104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                        alt="frame"
                                                        className="w-full h-full object-cover"
                                                    />
                                                )}
                                                {template.name === "Minimalist" && (
                                                    <img
                                                        src="https://plus.unsplash.com/premium_photo-1670137142833-7e7ddd459501?q=80&w=1402&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                        alt="frame"
                                                        className="w-full h-full object-cover"
                                                    />
                                                )}
                                            </div>
                                            <div className="flex justify-between items-center mt-2">
                                                <div>
                                                    <h2 className="font-semibold text-sm">{template.name}</h2>
                                                    <p className="text-gray-500 text-xs">Ideal for creatives</p>
                                                </div>
                                                <div className="flex gap-2">
                                                    <button
                                                         onClick={(e:MouseEvent) => {
                                                            e.stopPropagation();
                                                            handleViewTemplate(template);
                                                        }}
                                                        className="px-2 py-1 text-sm border border-gray-600 rounded-xl lg:flex bg-white 
                                                        shadow-lg text-black-500 hover:scale-105 transform transition-transform duration-300"
                                                    >
                                                        View
                                                    </button>
                                                    <button
                                                         onClick={(e:MouseEvent) => {
                                                            e.stopPropagation(); // Prevent event from bubbling up
                                                            handleCreatePortfolio(template._id);
                                                        }}
                                                        className="px-2 py-1 text-sm border border-gray-600 rounded-xl lg:flex bg-black-500 
                                                        shadow-lg text-white hover:scale-105 transform transition-transform duration-300"
                                                    >
                                                        Use
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-400">No templates available. Add a new request!</p>
                        )}
                    </>
                )}
            </div>
            <Modal 
                isVisible={activeModal === "previewModal"} 
                className="bg-white w-full h-full px-0 py-0" 
                width="" 
                onClose={closeModal}
            >
                {selectedTemplate && <PreviewModal onClose={closeModal} template={selectedTemplate} />}
            </Modal>
        </>
    );
};

export default TemplateSelector;