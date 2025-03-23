// PublishModal.tsx

import { useAppDispatch } from "../hooks";
import { updatePortfolio } from "../slices/portfolio/portfolioSlice";
import { useState } from "react";
import { toast } from "react-toastify";
import Button from "./Button";
import { Portfolio } from "../dataTypes";
import { useNavigate } from "react-router-dom";


const PublishModal = ({ onClose, portfolioData }: { onClose: () => void, portfolioData: Portfolio | null }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const [isPublishing, setIsPublishing] = useState(false);


    const handlePublish = async () => {
        if (portfolioData) {
            // Clean up the sections to remove unwanted properties
            const cleanedSections = portfolioData.sections.map((section) => ({
                sectionId: section.sectionId,
                customContent: section.customContent,
            }));
            // Create the payload with only the required data
            const payload = {
                sections: cleanedSections,
            };

            console.log("Cleaned portfolio data for publishing:", payload);
            setIsPublishing(true);
            try {
                await dispatch(updatePortfolio({ id: portfolioData._id, portfolioData: payload })).unwrap();
                toast.success("Portfolio published successfully!");
                navigate('/dashboard')
                onClose();
            } catch (error) {
                toast.error("Failed to publish portfolio.");
            } finally {
                setIsPublishing(false);
            }
        }
    };

    return (
        <div className="py-4 flex flex-col justify-center items-center ">
            <div className="flex flex-col gap-4 justify-center items-center">
                <div className="py-3 bg-white rounded-lg px-3">
                    <span className="">
                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.5477 2.05293C17.3697 -0.292637 0.986483 5.4532 1.00001 7.551C1.01535 9.92987 7.39809 10.6617 9.16722 11.1581C10.2311 11.4565 10.516 11.7625 10.7613 12.8781C11.8723 17.9305 12.4301 20.4435 13.7014 20.4996C15.7278 20.5892 21.6733 4.342 19.5477 2.05293Z" stroke="#141B34" stroke-width="1.5" />
                            <path d="M10 11.5L13.5 8" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                </div>
                <p className="text-black-500 text-2xl w-[100%] text-center font-semibold leading-7">Publish project</p>
                <p>My portfolio v1</p>
            </div>
            <p className="text-left mt-6 flex gap-1 items-center text-gray-930 text-xs w-[auto] lg:w-[70%]">
                <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.6027 17.672C13.8278 18.9682 11.6583 19.6089 9.46392 19.4849C7.26955 19.3608 5.18607 18.4798 3.56847 16.9918C1.95088 15.5038 0.899262 13.501 0.592803 11.3246C0.286343 9.14822 0.744003 6.93289 1.8878 5.05609C3.0316 3.17929 4.79077 1.75715 6.86557 1.03198C8.94037 0.306815 11.2024 0.323491 13.2663 1.07917C15.3302 1.83484 17.0682 3.28277 18.1842 5.17623C19.3002 7.06968 19.7252 9.29153 19.3866 11.4632" stroke="url(#paint0_linear_13251_34873)" />
                        <defs>
                            <linearGradient id="paint0_linear_13251_34873" x1="16.4" y1="5.2" x2="20" y2="16.4" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#1BC55F" />
                                <stop offset="1" stop-color="#1BC55F" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
                Setting up your domain
            </p>
            <p className="text-left flex gap-1 items-center mt-6 text-gray-930 text-xs w-[auto] lg:w-[70%]">
                <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.6027 17.672C13.8278 18.9682 11.6583 19.6089 9.46392 19.4849C7.26955 19.3608 5.18607 18.4798 3.56847 16.9918C1.95088 15.5038 0.899262 13.501 0.592803 11.3246C0.286343 9.14822 0.744003 6.93289 1.8878 5.05609C3.0316 3.17929 4.79077 1.75715 6.86557 1.03198C8.94037 0.306815 11.2024 0.323491 13.2663 1.07917C15.3302 1.83484 17.0682 3.28277 18.1842 5.17623C19.3002 7.06968 19.7252 9.29153 19.3866 11.4632" stroke="url(#paint0_linear_13251_34873)" />
                        <defs>
                            <linearGradient id="paint0_linear_13251_34873" x1="16.4" y1="5.2" x2="20" y2="16.4" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#1BC55F" />
                                <stop offset="1" stop-color="#1BC55F" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
                Optimizing performance
            </p>
            <div className="flex gap-2 w-full px-2 mt-6">
                <Button onClick={onClose} className="px-6 w-full flex-1 py-3 items-center text-sm border border-gray-600 rounded-xl bg-white shadow-lg text-black-500">Cancel</Button>
                <Button onClick={handlePublish} disabled={isPublishing} className="w-full flex-1 text-sm items-center gap-2 custom-bg shadow-lg text-white px-6 py-3 rounded-xl">
                    {isPublishing ? "Publishing..." : "Publish"}
                </Button>
            </div>
        </div>
    );
};

export default PublishModal;