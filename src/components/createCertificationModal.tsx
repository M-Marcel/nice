import { useState } from "react";
import Button from "./Button";

type CreateCertificationModalProps = {
    onAddCertification: (certification: any) => void; // Updated prop name and type
    onClose: () => void;
};

const CreateCertificationModal = ({ onAddCertification, onClose }: CreateCertificationModalProps) => {
    const [formData, setFormData] = useState({
        name: "",
        issuedBy : "",
        yearIssued: "",
    });

    const { name, issuedBy, yearIssued } = formData;

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

        // Prepare the certificate data to be added
        const CertificationData = {
            name,
            issuedBy,
            yearIssued
        };

        onAddCertification(CertificationData); // Pass the new work data to the parent
        onClose(); // Close the modal
    };

    return (
        <div className="px-4 h-[60vh] overflow-y-scroll lg:scrollbar-none lg:scrollbar-thumb-gray-300 lg:scrollbar-track-gray-600">
            <div className="">
                <form className="mb-8" onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-2">
                        <label className="text-xs mb-1 text-gray-400">Certificate name</label>
                        <input
                            type="text"
                            name="name"
                            className="border border-gray-900 rounded-lg outline-0 py-1 px-1"
                            value={name}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2 mb-3">
                        <label htmlFor="company" className="text-sm text-gray-400">
                            Certificate issued by
                        </label>
                        <textarea
                            name="issuedBy" // Fixed name attribute
                            value={issuedBy}
                            onChange={onChange}
                            className="px-2 py-2 border border-gray-900 rounded-lg outline-none"
                            required
                        />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-xs mb-1 text-gray-400">Year issued</label>
                        <input
                            type="date"
                            name="yearIssued"
                            className="border border-gray-900 rounded-lg outline-0 py-1 px-1"
                            value={yearIssued}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full lg:flex text-sm items-center text-center justify-center gap-2 custom-bg shadow-lg text-white px-6 py-3 rounded-xl"
                    >
                        Add Certificate
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default CreateCertificationModal;