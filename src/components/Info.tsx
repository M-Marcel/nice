import { useState } from "react";
import UploadIcon from '../assets/upload.png'

const Info = () => {
    const [image, setImage] = useState<File | null>(null);

    const [formData, setFormData] = useState({
        profileImage: '',
        coverImage: '',
        name: '',
        email: '',
        about: '',
        location: ''
    })

    const { profileImage, coverImage, name, email, about, location } = formData

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        })
        )
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const file = event.target.files[0];
            if (file && file.size <= 10 * 1024 * 1024) { // 10MB size limit
                setImage(file);
            } else {
                alert("File is too large. Please upload a file smaller than 10MB.");
            }
        }
    };

    const handleRemoveImage = () => {
        setImage(null); 
    };

    return (
        <div className="overflow-y-scroll h-[85vh] lg:scrollbar-thin lg:scrollbar-thumb-gray-300 lg:scrollbar-track-gray-600 px-4">
            <div className="mt-20">
                <form className="mb-8">
                    <div className="flex flex-col mb-2">
                        <label className="text-sm mb-1 text-gray-400">Profile Image</label>
                        {!image ? (
                            <label
                                htmlFor="fileUploadInput"
                                className="cursor-pointer p-4 border border-dashed border-gray-600 rounded-lg w-full text-center"
                            >
                                <img
                                    src={UploadIcon}
                                    alt="upload icon"
                                    className="w-10 h-10 mb-2 mx-auto"
                                />
                                <p className="text-md text-black-500">Upload a file</p>
                                <p className="text-xs text-gray-500 ">PNG or JPG (Max 5mb)</p>
                            </label>
                        ) : (
                            <div className="relative w-32 h-32">
                                <img
                                    src={URL.createObjectURL(image)}
                                    alt="uploaded preview"
                                    className="object-cover w-full h-full rounded-lg"
                                />
                                <button
                                    type="button"
                                    onClick={handleRemoveImage}
                                    className="text-xs absolute top-0 right-0 bg-gray-600 text-white rounded-full p-1 w-[25px]"
                                >
                                    X
                                </button>
                            </div>
                        )}
                        <input
                            id="fileUploadInput"
                            type="file"
                            value={profileImage}
                            accept=".png, .jpg, .jpeg"
                            onChange={handleFileChange}
                            hidden
                        />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-sm mb-1 text-gray-400">Cover Image</label>
                        {!image ? (
                            <label
                                htmlFor="fileUploadInput"
                                className="cursor-pointer p-4 border border-dashed border-gray-600 rounded-lg w-full text-center"
                            >
                                <img
                                    src={UploadIcon}
                                    alt="upload icon"
                                    className="w-10 h-10 mb-2 mx-auto"
                                />
                                <p className="text-md text-black-500">Upload a file</p>
                                <p className="text-xs text-gray-500 ">PNG or JPG (Max 5mb)</p>
                            </label>
                        ) : (
                            <div className="relative w-32 h-32">
                                <img
                                    src={URL.createObjectURL(image)}
                                    alt="uploaded preview"
                                    className="object-cover w-full h-full rounded-lg"
                                />
                                <button
                                    type="button"
                                    onClick={handleRemoveImage}
                                    className="text-xs absolute top-0 right-0 bg-gray-600 text-white rounded-full p-1 w-[25px]"
                                >
                                    X
                                </button>
                            </div>
                        )}
                        <input
                            id="fileUploadInput"
                            type="file"
                            value={coverImage}
                            accept=".png, .jpg, .jpeg"
                            onChange={handleFileChange}
                            hidden
                        />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-xs mb-1 text-gray-400">Name</label>
                        <input type="text"
                            className="border border-gray-900 rounded-lg outline-0 py-1 px-1"
                            value={name}
                            onChange={onChange}
                        />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-xs mb-1 text-gray-400">Email</label>
                        <input type="text"
                            className="border border-gray-900 rounded-lg outline-0 py-1 px-1"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="flex flex-col gap-2 mb-3">
                    <label htmlFor="message" className="text-sm text-gray-400">
                        About
                    </label>
                    <textarea
                        name="message"
                        value={about}
                        onChange={onChange}
                        className="px-2 py-2 border border-gray-900 rounded-lg outline-none"
                    />
                </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-xs mb-1 text-gray-400">Location</label>
                        <input type="text"
                            className="border border-gray-900 rounded-lg outline-0 py-1 px-1"
                            value={location}
                            onChange={onChange}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Info;