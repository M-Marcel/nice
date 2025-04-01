import { useEffect, useState } from "react";
import Button from "./Button";

type CreateEducationModalProps = {
    onAddEducation: (education: any) => void; // Updated prop name and type
    onUpdateEducation: (education: any) => void;
    onClose: () => void;
    educationToEdit?: any;
};

const CreateEducationModal = ({ onAddEducation, onUpdateEducation, onClose, educationToEdit }: CreateEducationModalProps) => {
    const [formData, setFormData] = useState({
        degree: "",
        school: "",
        startYear: 0,
        endYear: 0,
        isStudent: false, // Added state for checkbox
    });

    const { degree, school, startYear, endYear, isStudent } = formData;

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


    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        // Handle checkbox separately
        if (type === "checkbox") {
            setFormData((prevState) => ({
                ...prevState,
                [name]: (e.target as HTMLInputElement).checked,
            }));
        }
        // Convert number fields to numbers
        else if (name === "startYear" || name === "endYear") {
            setFormData((prevState) => ({
                ...prevState,
                [name]: value === "" ? 0 : parseInt(value, 10),
            }));
        }
        // For all other fields
        else {
            setFormData((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Prepare the work data to be added
        const educationData = {
            degree,
            school,
            startYear,
            endYear, // Set endYear to "Student" if currently schooling
            isStudent
        };
        if (educationToEdit) {
            onUpdateEducation(educationData); // Call update function if editing
        } else {
            onAddEducation(educationData); // Call add function if creating
        }
        onClose(); // Close the modal
    };

    return (
        <div className="px-4 h-[60vh] overflow-y-scroll lg:scrollbar-none lg:scrollbar-thumb-gray-300 lg:scrollbar-track-gray-600">
            <div className="">
                <h2 className="text-3xl mb-4 mt-4 text-black-500">{educationToEdit ? "Edit Education" : "Add Education"}</h2>
                <form className="mb-8" onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-2">
                        <label className="text-xs mb-1 text-gray-400">Degree</label>
                        <input
                            type="text"
                            name="degree"
                            className="border border-gray-900 rounded-lg outline-0 py-1 px-1"
                            value={degree}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2 mb-3">
                        <label htmlFor="company" className="text-sm text-gray-400">
                            School
                        </label>
                        <textarea
                            name="school" // Fixed name attribute
                            value={school}
                            onChange={onChange}
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
                            onChange={onChange}
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
                            onChange={onChange}
                            disabled={isStudent} // Disable if currently schooling
                            required={!isStudent} // Make it optional if currently schooling
                        />
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                        <input
                            type="checkbox"
                            name="isStudent"
                            checked={isStudent}
                            onChange={onChange}
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