import { useState } from "react";
import UploadIcon from "../assets/upload.png";
import Button from "./Button";

type CreateWorkModalProps = {
    onAddWork: (work: any) => void; // Updated prop name and type
    onClose: () => void;
};

const CreateWorkModal = ({ onAddWork, onClose }: CreateWorkModalProps) => {
    const [formData, setFormData] = useState({
        role: "",
        company: "",
        startDate: "",
        endDate: "",
        currentlyWorking: false, // Added state for checkbox
    });

    const { role, company, startDate, endDate, currentlyWorking } = formData;

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        // Handle checkbox separately
        if (type === "checkbox") {
            setFormData((prevState) => ({
                ...prevState,
                [name]: (e.target as HTMLInputElement).checked, // Cast to HTMLInputElement for checkbox
            }));
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Prepare the work data to be added
        const workData = {
            role,
            company,
            startDate,
            endDate: currentlyWorking ? "Present" : endDate, // Set endDate to "Present" if currently working
        };

        onAddWork(workData); // Pass the new work data to the parent
        onClose(); // Close the modal
    };

    return (
        <div className="px-4 h-[60vh] overflow-y-scroll lg:scrollbar-none lg:scrollbar-thumb-gray-300 lg:scrollbar-track-gray-600">
            <div className="">
                <form className="mb-8" onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-2">
                        <label className="text-xs mb-1 text-gray-400">Role</label>
                        <input
                            type="text"
                            name="role"
                            className="border border-gray-900 rounded-lg outline-0 py-1 px-1"
                            value={role}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2 mb-3">
                        <label htmlFor="company" className="text-sm text-gray-400">
                            Company
                        </label>
                        <textarea
                            name="company" // Fixed name attribute
                            value={company}
                            onChange={onChange}
                            className="px-2 py-2 border border-gray-900 rounded-lg outline-none"
                            required
                        />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-xs mb-1 text-gray-400">Start Date</label>
                        <input
                            type="date"
                            name="startDate"
                            className="border border-gray-900 rounded-lg outline-0 py-1 px-1"
                            value={startDate}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-xs mb-1 text-gray-400">End Date</label>
                        <input
                            type="date"
                            name="endDate"
                            className="border border-gray-900 rounded-lg outline-0 py-1 px-1"
                            value={endDate}
                            onChange={onChange}
                            disabled={currentlyWorking} // Disable if currently working
                            required={!currentlyWorking} // Make it optional if currently working
                        />
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                        <input
                            type="checkbox"
                            name="currentlyWorking"
                            checked={currentlyWorking}
                            onChange={onChange}
                        />
                        <span className="text-sm text-gray-400">I still work here</span>
                    </div>
                    <Button
                        type="submit"
                        className="w-full lg:flex text-sm items-center text-center justify-center gap-2 custom-bg shadow-lg text-white px-6 py-3 rounded-xl"
                    >
                        Add Work
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default CreateWorkModal;