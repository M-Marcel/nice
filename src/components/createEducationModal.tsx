import { useEffect, useState } from "react";
import Button from "./Button";

type CreateEducationModalProps = {
    onAddEducation: (education: any) => void;
    onUpdateEducation: (education: any) => void;
    onClose: () => void;
    educationToEdit?: any;
};

const CreateEducationModal = ({ onAddEducation, onUpdateEducation, onClose, educationToEdit }: CreateEducationModalProps) => {
    const [formData, setFormData] = useState({
        degree: "",
        school: "",
        startYear: 2000,
        endYear: 2005,
        isStudent: false, // Added state for checkbox
    });

    const { degree, school, startYear, endYear, isStudent } = formData;

    // Initialize form with educationToEdit data
    useEffect(() => {
        if (educationToEdit) {
            setFormData({
                degree: educationToEdit.degree,
                school: educationToEdit.school,
                startYear: educationToEdit.startYear as number,
                endYear: educationToEdit.endYear as number,
                isStudent: educationToEdit.isStudent === "student",
            });
        }
    }, [educationToEdit]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" 
                ? (e.target as HTMLInputElement).checked 
                : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const educationData = {
            degree,
            school,
            startYear,
            endYear, // Set endYear to "Student" if currently schooling
            isStudent
        };

        if (educationToEdit) {
            onUpdateEducation(educationData);
        } else {
            onAddEducation(educationData);
        }
    };

    return (
        <div className="px-4 h-[60vh] overflow-y-scroll lg:scrollbar-none">
            <div className="">
                <h2 className="text-3xl mb-4 mt-4 text-black-500">
                    {educationToEdit ? "Edit Education" : "Add Education"}
                </h2>
                <form className="mb-8" onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-2">
                        <label className="text-xs mb-1 text-gray-400">Degree</label>
                        <input
                            type="text"
                            name="degree"
                            className="border border-gray-900 rounded-lg outline-0 py-1 px-1"
                            value={degree}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2 mb-3">
                        <label htmlFor="school" className="text-sm text-gray-400">
                            School
                        </label>
                        <textarea
                            name="school"
                            value={school}
                            onChange={handleInputChange}
                            className="px-2 py-2 border border-gray-900 rounded-lg outline-none"
                            required
                        />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-xs mb-1 text-gray-400">Start Year</label>
                        <input
                            type="number"
                            name="startYear"
                            className="border border-gray-900 rounded-lg outline-0 py-1 px-1"
                            value={startYear}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-xs mb-1 text-gray-400">Graduation Year</label>
                        <input
                            type="number"
                            name="endYear"
                            className="border border-gray-900 rounded-lg outline-0 py-1 px-1"
                            value={endYear}
                            onChange={handleInputChange}
                            disabled={isStudent}
                            required={!isStudent}
                        />
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                        <input
                            type="checkbox"
                            name="isStudent"
                            checked={isStudent}
                            onChange={handleInputChange}
                        />
                        <span className="text-sm text-gray-400">Not graduated yet</span>
                    </div>
                    <Button
                        type="submit"
                        className="w-full lg:flex text-sm items-center text-center justify-center gap-2 custom-bg shadow-lg text-white px-6 py-3 rounded-xl"
                    >
                        {educationToEdit ? "Update Education" : "Add Education"}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default CreateEducationModal;