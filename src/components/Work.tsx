import { useState, useEffect, useCallback } from "react";
import { Portfolio } from "../dataTypes";
import Button from "./Button";
import AdminPlusIcon from "../assets/svg/admin/plusIcon";
import { toast } from "react-toastify";

type WorkProps = {
    portfolioData: Portfolio;
    updatePortfolioData: (updatedData: Partial<Portfolio>) => void;
    setActiveModal: (modal: string | null) => void;
    setWorkToEdit: (work: any) => void;
    isPublished: boolean;
};

const Work = ({ portfolioData, updatePortfolioData, setActiveModal, setWorkToEdit, isPublished }: WorkProps) => {
    const localStorageKey = `workDraft_${portfolioData._id}`;
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    // Get initial works - only from localStorage, never from backend initially
    const getInitialWorks = useCallback(() => {
        try {
            const savedDraft = localStorage.getItem(localStorageKey);
            if (savedDraft) return JSON.parse(savedDraft);
        } catch (e) {
            console.error("Failed to parse saved work draft", e);
        }
        return []; // Always return empty array if no localStorage data
    }, [localStorageKey]);

    const [works, setWorks] = useState<any[]>(getInitialWorks());

    // Initialize works state
    useEffect(() => {
        setWorks(getInitialWorks());
    }, [getInitialWorks]);

    // Handle work updates from modal
    useEffect(() => {
        const handleWorkUpdate = (e: CustomEvent) => {
            if (editingIndex !== null && editingIndex >= 0) {
                // Update existing work
                setWorks(prev => prev.map((work, index) =>
                    index === editingIndex ? e.detail : work
                ));
            } else {
                // Add new work
                setWorks(prev => [...prev, e.detail]);
            }
            setEditingIndex(null);
        };

        window.addEventListener('workUpdate', handleWorkUpdate as EventListener);
        return () => {
            window.removeEventListener('workUpdate', handleWorkUpdate as EventListener);
        };
    }, [editingIndex]);

    // Edit work handler
    const handleEditWork = (index: number) => {
        setEditingIndex(index);
        setWorkToEdit(works[index]);
        setActiveModal("createWorkModal");
    };

    // Remove work handler
    const handleRemoveWork = (index: number) => {
        setWorks(prev => prev.filter((_, i) => i !== index));
    };

    // Persist to localStorage
    useEffect(() => {
        try {
          localStorage.setItem(localStorageKey, JSON.stringify(works));
        } catch (e) {
          console.error("Failed to save to localStorage", e);
          // Optionally notify the user
          toast.error("Failed to save draft - your data might be too large");
        }
      }, [works, localStorageKey]);

    // Clear draft when published
    useEffect(() => {
        if (isPublished) localStorage.removeItem(localStorageKey);
    }, [isPublished, localStorageKey]);

    // Save to portfolio data
    const handleSave = () => {
        const worksSection = portfolioData.sections?.find(
            (section) => section.type === "Work"
        );

        if (!worksSection) {
            toast.error("Work section not found");
            return;
        }

        updatePortfolioData({
            sections: portfolioData.sections?.map(section =>
                section.type === "Work" ? {
                    ...section,
                    customContent: { ...section.customContent, work: works }
                } : section
            ) || [],
        });

        // Don't remove localStorage here - keep the draft until published
        toast.success('Changes saved successfully');
    };

    return (
        <>
                <div className="absolute -top-[44px] right-0 z-30">
                    <Button
                        onClick={handleSave}
                        className="lg:flex text-xs lg:text-sm items-center gap-2 bg-black-500 shadow-lg text-white px-2 py-2 lg:px-4 lg:py-2 rounded-xl"
                    >
                        Save Changes
                    </Button>
                </div>
        
            <div className="relative pt-5">
                <div className="mt-10">
                    <div className="flex lg:w-[85%] flex-col gap-4">
                        {works.length === 0 ? (
                            <div className="text-center py-8">
                                <p className="text-gray-500 mb-4">No work history added yet</p>
                                <div className="flex justify-center items-center">
                                    <Button
                                        onClick={() => {
                                            setEditingIndex(null);
                                            setWorkToEdit(null);
                                            setActiveModal("createWorkModal");
                                        }}
                                        className="flex justify-center bg-white items-center px-6 py-3 text-sm border border-gray-600 rounded-xl lg:flex shadow-lg text-black-50 gap-2"
                                    >
                                        <span><AdminPlusIcon /></span>
                                        <span>Add Your First Work</span>
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <>
                                {works.map((work, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <div className="flex gap-2 items-center w-[60%]">
                                            <span>
                                                <svg
                                                    width="24"
                                                    height="25"
                                                    viewBox="0 0 24 25"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M8 6.5H8.00635M8 12.5H8.00635M8 18.5H8.00635M15.9937 6.5H16M15.9937 12.5H16M15.9937 18.5H16"
                                                        stroke="#838594"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                            <div>
                                                <h2 className="text-md text-black-500 mb-1">
                                                    {work.role}
                                                </h2>
                                                <p className="text-xs text-gray-400">
                                                    {work.company} {work.startDate} - {work.isRoleActive ? "Present" : work.endDate}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center w-[20%]">
                                            <span
                                                className="px-2 rounded-full py-2 hover:scale-105 hover:bg-gray-600 cursor-pointer transform transition-transform duration-300"
                                                onClick={() => handleEditWork(index)}
                                            >
                                                <svg
                                                    width="20"
                                                    height="21"
                                                    viewBox="0 0 20 21"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M11.7284 3.7382C12.3494 3.06539 12.6599 2.72899 12.9898 2.53276C13.7859 2.05929 14.7662 2.04457 15.5756 2.49393C15.9111 2.68016 16.2311 3.00709 16.8712 3.66096C17.5113 4.31483 17.8313 4.64176 18.0136 4.98443C18.4535 5.81126 18.4391 6.81265 17.9756 7.62591C17.7835 7.96296 17.4542 8.28014 16.7956 8.9145L8.95918 16.4622C7.71106 17.6644 7.08699 18.2655 6.30704 18.5701C5.52709 18.8747 4.66966 18.8523 2.9548 18.8075L2.72147 18.8014C2.19941 18.7877 1.93838 18.7809 1.78665 18.6087C1.63491 18.4365 1.65563 18.1706 1.69706 17.6388L1.71956 17.35C1.83617 15.8533 1.89447 15.1049 2.18675 14.4322C2.47903 13.7594 2.98319 13.2132 3.99151 12.1207L11.7284 3.7382Z"
                                                        stroke="#141B34"
                                                        strokeWidth="1.5"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M10.834 3.83398L16.6673 9.66732"
                                                        stroke="#141B34"
                                                        strokeWidth="1.5"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M11.667 18.834L18.3337 18.834"
                                                        stroke="#141B34"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                            <span
                                                className="px-2 rounded-full py-2 hover:scale-105 hover:bg-gray-600 cursor-pointer transform transition-transform duration-300"
                                                onClick={() => handleRemoveWork(index)}
                                            >
                                                <svg
                                                    width="18"
                                                    height="19"
                                                    viewBox="0 0 18 19"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M15.25 4.08398L14.7336 12.4382C14.6016 14.5727 14.5356 15.6399 14.0006 16.4072C13.7361 16.7866 13.3955 17.1067 13.0006 17.3473C12.2018 17.834 11.1325 17.834 8.99395 17.834C6.8526 17.834 5.78192 17.834 4.98254 17.3464C4.58733 17.1054 4.24666 16.7847 3.98224 16.4047C3.4474 15.6361 3.38288 14.5674 3.25384 12.4299L2.75 4.08398"
                                                        stroke="#141B34"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                    />
                                                    <path
                                                        d="M1.5 4.08366H16.5M12.3798 4.08366L11.8109 2.9101C11.433 2.13054 11.244 1.74076 10.9181 1.49766C10.8458 1.44374 10.7692 1.39578 10.6892 1.35424C10.3283 1.16699 9.8951 1.16699 9.02877 1.16699C8.14069 1.16699 7.69665 1.16699 7.32974 1.36209C7.24842 1.40533 7.17082 1.45524 7.09774 1.5113C6.76803 1.76424 6.58386 2.16829 6.2155 2.97637L5.71077 4.08366"
                                                        stroke="#141B34"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                    />
                                                    <path
                                                        d="M6.91699 13.25L6.91699 8.25"
                                                        stroke="#141B34"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                    />
                                                    <path
                                                        d="M11.083 13.25L11.083 8.25"
                                                        stroke="#141B34"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                ))}
                                <div className="flex justify-center items-center">
                                    <Button
                                        onClick={() => {
                                            setEditingIndex(null);
                                            setWorkToEdit(null);
                                            setActiveModal("createWorkModal");
                                        }}
                                        className="mt-4 flex justify-center bg-white items-center px-6 py-3 text-sm border border-gray-600 rounded-xl lg:flex shadow-lg text-black-50 gap-2"
                                    >
                                        <span><AdminPlusIcon /></span>
                                        <span>Add Work History</span>
                                    </Button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>

    );
};

export default Work;