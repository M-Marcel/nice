import { useEffect, useState } from "react";
import Button from "./Button";

type CreateCertificationModalProps = {
    onAddCertification: (certification: any) => void;
    onUpdateCertification: (certification: any) => void;
    onClose: () => void;
    certificationToEdit?: any;
};

const CreateCertificationModal = ({ onAddCertification, onUpdateCertification, onClose, certificationToEdit }: CreateCertificationModalProps) => {
    const [formData, setFormData] = useState({
        name: "",
        issuedBy: "",
        yearIssued: "",
    });

    const { name, issuedBy, yearIssued } = formData;

    // Initialize form with certificationToEdit data
    useEffect(() => {
        if (certificationToEdit) {
            setFormData({
                name: certificationToEdit.name,
                issuedBy: certificationToEdit.issuedBy,
                yearIssued: certificationToEdit.yearIssued,
            });
        }
    }, [certificationToEdit]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const certificationData = {
            name,
            issuedBy,
            yearIssued
        };

        if (certificationToEdit) {
            onUpdateCertification(certificationData);
        } else {
            onAddCertification(certificationData);
        }
    };

    return (
        <div className="px-4 h-[60vh] overflow-y-scroll lg:scrollbar-none">
            <div className="">
                <h2 className="text-3xl mb-4 mt-4 text-black-500">
                    {certificationToEdit ? "Edit Certification" : "Add Certification"}
                </h2>
                <form className="mb-8" onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-2">
                        <label className="text-xs mb-1 text-gray-400">Certificate Name</label>
                        <input
                            type="text"
                            name="name"
                            className="border border-gray-900 rounded-lg outline-0 py-1 px-1"
                            value={name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2 mb-3">
                        <label htmlFor="issuedBy" className="text-sm text-gray-400">
                            Issued By
                        </label>
                        <textarea
                            name="issuedBy"
                            value={issuedBy}
                            onChange={handleInputChange}
                            className="px-2 py-2 border border-gray-900 rounded-lg outline-none"
                            required
                        />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-xs mb-1 text-gray-400">Year Issued</label>
                        <input
                            type="date"
                            name="yearIssued"
                            className="border border-gray-900 rounded-lg outline-0 py-1 px-1"
                            value={yearIssued}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full lg:flex text-sm items-center text-center justify-center gap-2 custom-bg shadow-lg text-white px-6 py-3 rounded-xl"
                    >
                        {certificationToEdit ? "Update Certification" : "Add Certification"}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default CreateCertificationModal;