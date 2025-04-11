import { useAppDispatch } from "../hooks";
import { updatePortfolio } from "../slices/portfolio/portfolioSlice";
import { useState } from "react";
import { toast } from "react-toastify";
import Button from "./Button";
import { Portfolio } from "../dataTypes";
import { useNavigate } from "react-router-dom";
import LoaderIcon from "../assets/loader.svg";

type UpdateModalProps = {
  onClose: () => void;
  portfolioData: Portfolio | null;
  onSuccess?: () => void; // Added onSuccess prop
};

const UpdateModal = ({ onClose, portfolioData, onSuccess }: UpdateModalProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [isUpdating, setIsUpdating] = useState(false);

    const handleUpdate = async () => {
        if (!portfolioData) return;

        try {
            setIsUpdating(true);
            
            // Prepare the updated portfolio data
            const cleanedSections = portfolioData.sections.map((section) => ({
                sectionId: section.sectionId,
                customContent: section.customContent,
            }));
            
            const payload = {
                name: portfolioData.name, 
                sections: cleanedSections,
            };

            // Only update the portfolio without publishing
            await dispatch(updatePortfolio({ 
                id: portfolioData._id, 
                portfolioData: payload 
            })).unwrap();
            
            toast.success("Portfolio updated successfully");
            
            // Call onSuccess if provided
            if (onSuccess) {
                onSuccess();
            }
            
            navigate('/dashboard');
            onClose();
        } catch (error) {
            toast.error("Failed to update portfolio");
        } finally {
            setIsUpdating(false);
        }
    };

    return (
        <div className="py-4 flex flex-col justify-center items-center ">
            <div className="flex flex-col gap-4 justify-center items-center">
                <div className="py-3 bg-white rounded-lg px-3">
                    <span className="">
                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.5477 2.05293C17.3697 -0.292637 0.986483 5.4532 1.00001 7.551C1.01535 9.92987 7.39809 10.6617 9.16722 11.1581C10.2311 11.4565 10.516 11.7625 10.7613 12.8781C11.8723 17.9305 12.4301 20.4435 13.7014 20.4996C15.7278 20.5892 21.6733 4.342 19.5477 2.05293Z" stroke="#141B34" strokeWidth="1.5" />
                            <path d="M10 11.5L13.5 8" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </div>
                <p className="text-black-500 text-2xl w-[100%] text-center font-semibold leading-7">Update project</p>
                <p>{portfolioData?.name || "My Portfolio"}</p>
            </div>
            <p className="text-left mt-6 flex gap-1 items-center text-gray-930 text-xs w-[auto] lg:w-[70%]">
                {isUpdating ? (
                    <img src={LoaderIcon} alt="loader" width={20} height={20} className="animate-spin" />
                ) : (
                    <span className="text-green-500">✓</span>
                )}
                Updating portfolio data
            </p>
            <p className="text-left flex gap-1 items-center mt-6 text-gray-930 text-xs w-[auto] lg:w-[70%]">
                <span className="text-gray-400">-</span>
                Keeping existing portfolio URL
            </p>
            <div className="flex gap-2 w-full px-2 mt-6">
                <Button 
                    onClick={onClose} 
                    className="px-6 w-full flex-1 py-3 items-center text-sm border border-gray-600 rounded-xl bg-white shadow-lg text-black-500"
                    disabled={isUpdating}
                >
                    Cancel
                </Button>
                <Button 
                    onClick={handleUpdate} 
                    disabled={isUpdating}
                    className="w-full flex-1 text-sm items-center gap-2 custom-bg shadow-lg text-white px-6 py-3 rounded-xl"
                >
                    {isUpdating ? "Updating..." : "Update"}
                </Button>
            </div>
        </div>
    );
};

export default UpdateModal;