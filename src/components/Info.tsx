import { useEffect, useState } from "react";
import UploadIcon from '../assets/upload.png';
import { Portfolio } from "../dataTypes";
import Button from "./Button";
import { toast } from "react-toastify";


type templateDataProps = {
    portfolioData: Portfolio;
    updatePortfolioData: (updatedData: Partial<Portfolio>) => void;
};

const Info = ({ portfolioData, updatePortfolioData }: templateDataProps) => {
    const [profileImageFile, setProfileImageFile] = useState<File | null>(null);
    const [coverImageFile, setCoverImageFile] = useState<File | null>(null);

    const [formData, setFormData] = useState({
        profileImage: '',
        coverImg: '',
        name: '',
        email: '',
        about: '',
        location: '',
    });

    useEffect(() => {
        if (portfolioData?.sections?.length > 0) {
            const designData = portfolioData.sections[0]?.customContent || {};
            setFormData(prevState => ({
                ...prevState,
                profileImage: designData.profileImage || prevState.profileImage,
                coverImage: designData.coverImg || prevState.coverImg,
                name: designData.name || prevState.name,
                email: designData.email || prevState.email,
                about: designData.about || prevState.about,
                location: designData.location || prevState.location,

            }));
        }
    }, [portfolioData]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    useEffect(() => {

        console.log("Updated profile image:", profileImageFile);
    }, [profileImageFile]);

    useEffect(() => {
        console.log("Updated cover image:", coverImageFile);
        console.log("new info data", portfolioData)
    }, [coverImageFile, portfolioData]);


    const handleProfileImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            if (file.size <= 10 * 1024 * 1024) { // 10MB size limit
                setProfileImageFile(file);
                const imageUrl = URL.createObjectURL(file);
                setFormData((prevState) => ({
                    ...prevState,
                    profileImage: imageUrl,
                }));
            } else {
                alert("File is too large. Please upload a file smaller than 10MB.");
            }
        }
    };

    const handleCoverImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            if (file.size <= 10 * 1024 * 1024) { // 10MB size limit
                setCoverImageFile(file);
                const imageUrl = URL.createObjectURL(file);
                setFormData((prevState) => ({
                    ...prevState,
                    coverImg: imageUrl,
                }));
            } else {
                alert("File is too large. Please upload a file smaller than 10MB.");
            }
        }
    };

    const handleRemoveProfileImage = () => {
        setProfileImageFile(null);
        setFormData((prevState) => ({
            ...prevState,
            profileImage: '',
        }));
    };

    const handleRemoveCoverImage = () => {
        setCoverImageFile(null);
        setFormData((prevState) => ({
            ...prevState,
            coverImage: '',
        }));
    };

    const handleSave = () => {
        updatePortfolioData({
            sections: [
                {
                    ...portfolioData.sections[0],
                    customContent: {
                        ...portfolioData.sections[0].customContent,
                        ...formData,
                    },
                },
            ],
        });
        toast.success('changes saved')
      
    };

    return (
        <div className="overflow-y-scroll scrollbar-none h-[75vh] lg:scrollbar-thin lg:scrollbar-thumb-gray-300 lg:scrollbar-track-gray-600 px-2">
            <div className="mt-20">
                <form className="mb-8 lg:-ml-2">
                    {/* Profile Image Section */}
                    <div className="flex flex-col mb-2">
                        <label className="text-sm mb-1 text-gray-400">Profile Image</label>
                        {!formData.profileImage ? (
                            <label htmlFor="profileImageInput" className="cursor-pointer p-4 border border-dashed border-gray-600 rounded-lg w-full text-center">
                                <img src={UploadIcon} alt="upload icon" className="w-10 h-10 mb-2 mx-auto" />
                                <p className="text-md text-black-500">Upload a file</p>
                                <p className="text-xs text-gray-500 ">PNG or JPG (Max 5mb)</p>
                            </label>
                        ) : (
                            <div className="relative w-32 left-10 rounded-full h-32">
                                <img src={formData.profileImage} alt="uploaded preview" className="object-cover rounded-full w-full h-full" />
                                <button type="button" onClick={handleRemoveProfileImage} className="text-xs absolute top-0 right-0 bg-gray-600 text-white rounded-full p-1 w-[25px]">X</button>
                            </div>
                        )}
                        <input id="profileImageInput" type="file" accept=".png, .jpg, .jpeg" onChange={handleProfileImageChange} hidden />
                    </div>

                    {/* Cover Image Section */}
                    <div className="flex flex-col mb-2">
                        <label className="text-sm mb-1 text-gray-400">Cover Image</label>
                        {!formData.coverImg ? (
                            <label htmlFor="coverImageInput" className="cursor-pointer p-4 border border-dashed border-gray-600 rounded-lg w-full text-center">
                                <img src={UploadIcon} alt="upload icon" className="w-10 h-10 mb-2 mx-auto" />
                                <p className="text-md text-black-500">Upload a file</p>
                                <p className="text-xs text-gray-500 ">PNG or JPG (Max 5mb)</p>
                            </label>
                        ) : (
                            <div className="relative w-full h-32">
                                <img src={formData.coverImg} alt="uploaded preview" className="object-cover w-full h-full rounded-lg" />
                                <button type="button" onClick={handleRemoveCoverImage} className="text-xs absolute top-0 right-0 bg-gray-600 text-white rounded-full p-1 w-[25px]">X</button>
                            </div>
                        )}
                        <input id="coverImageInput" type="file" accept=".png, .jpg, .jpeg" onChange={handleCoverImageChange} hidden />
                    </div>

                    {/* Other Fields (Name, Email, About, Location) */}
                    <div className="flex flex-col mb-2">
                        <label className="text-xs mb-1 text-gray-400">Name</label>
                        <input type="text" name="name" className="border border-gray-900 rounded-lg outline-0 py-1 px-1" value={formData.name} onChange={onChange} />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-xs mb-1 text-gray-400">Email</label>
                        <input type="text" name="email" className="border border-gray-900 rounded-lg outline-0 py-1 px-1" value={formData.email} onChange={onChange} />
                    </div>
                    <div className="flex flex-col gap-2 mb-3">
                        <label htmlFor="message" className="text-sm text-gray-400">About</label>
                        <textarea name="about" value={formData.about} onChange={onChange} className="px-2 py-2 border border-gray-900 rounded-lg outline-none" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-xs mb-1 text-gray-400">Location</label>
                        <input type="text" name="location" className="border border-gray-900 rounded-lg outline-0 py-1 px-1" value={formData.location} onChange={onChange} />
                    </div>
                </form>
                <Button onClick={handleSave} className="lg:flex text-xs lg:text-sm items-center gap-2 custom-bg shadow-lg text-white px-2 py-2 lg:px-6 lg:py-3 rounded-xl">
                    Save Changes
                </Button>
            </div>
        </div>
    );
};

export default Info;