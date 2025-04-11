import { useEffect, useState } from "react";
import Button from "./Button";

type CreateWorkModalProps = {
    onAddWork: (work: any) => void;
    onUpdateWork: (work: any) => void;
    onClose: () => void;
    workToEdit?: any;
};

const CreateWorkModal = ({ onAddWork, onUpdateWork, onClose, workToEdit }: CreateWorkModalProps) => {
    const [formData, setFormData] = useState({
        role: "",
        company: "",
        description: "",
        startDate: "",
        endDate: "",
        isRoleActive: false,
    });

    const { role, company, description, startDate, endDate, isRoleActive } = formData;

    // Initialize form with workToEdit data
    useEffect(() => {
        if (workToEdit) {
            setFormData({
                role: workToEdit.role,
                company: workToEdit.company,
                description: workToEdit.description,
                startDate: workToEdit.startDate,
                endDate: workToEdit.endDate === "Present" ? "" : workToEdit.endDate,
                isRoleActive: workToEdit.endDate === "Present",
            });
        }
    }, [workToEdit]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" 
                ? (e.target as HTMLInputElement).checked 
                : value
        }));
    };

    const formatDateToMonthYear = (dateString: string): string => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric'
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const workData = {
            role,
            company,
            description,
            startDate: formatDateToMonthYear(startDate),
            endDate: formatDateToMonthYear(endDate),
            isRoleActive: Boolean(isRoleActive)
        };

        if (workToEdit) {
            onUpdateWork(workData);
        } else {
            onAddWork(workData);
        }
    };

    return (
        <div className="px-4 h-[60vh] overflow-y-scroll lg:scrollbar-none">
            <div className="">
                <h2 className="text-3xl mb-4 mt-4 text-black-500">
                    {workToEdit ? "Edit Work" : "Add Work"}
                </h2>
                <form className="mb-8" onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-2">
                        <label className="text-xs mb-1 text-gray-400">Role</label>
                        <input
                            type="text"
                            name="role"
                            className="border border-gray-900 rounded-lg outline-0 py-1 px-1"
                            value={role}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2 mb-3">
                        <label htmlFor="company" className="text-sm text-gray-400">
                            Company
                        </label>
                        <textarea
                            name="company"
                            value={company}
                            onChange={handleInputChange}
                            className="px-2 py-2 border border-gray-900 rounded-lg outline-none"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2 mb-3">
                        <label htmlFor="description" className="text-sm text-gray-400">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={description}
                            onChange={handleInputChange}
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
                            onChange={handleInputChange}
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
                            onChange={handleInputChange}
                            disabled={isRoleActive}
                            required={!isRoleActive}
                        />
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                        <input
                            type="checkbox"
                            name="isRoleActive"
                            checked={isRoleActive}
                            onChange={handleInputChange}
                        />
                        <span className="text-sm text-gray-400">I still work here</span>
                    </div>
                    <Button
                        type="submit"
                        className="w-full lg:flex text-sm items-center text-center justify-center gap-2 custom-bg shadow-lg text-white px-6 py-3 rounded-xl"
                    >
                        {workToEdit ? "Update Work" : "Add Work"}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default CreateWorkModal;