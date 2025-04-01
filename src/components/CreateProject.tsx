// CreateProject.tsx

import { useEffect, useState } from "react";
import UploadIcon from "../assets/upload.png";
import Button from "./Button";

type CreateProjectProps = {
    onAddProject: (project: any) => void;
    onUpdateProject: (project: any) => void;
    onClose: () => void;
    projectToEdit?: any;
};


type ImageKey = 'image1' | 'image2' | 'image3';
type ImageType = File | string | null;
type ImagesState = {
    [key in ImageKey]: ImageType;
};
const CreateProject = ({ onAddProject, onUpdateProject, onClose, projectToEdit }: CreateProjectProps) => {
    const [images, setImages] = useState<ImagesState>({
        image1: null,
        image2: null,
        image3: null,
    });

    const [formData, setFormData] = useState({
        projectName: "",
        myRole: "",
        about: "",
        url: "",
        images: {
            image1: null,
            image2: null,
            image3: null,
        },
    });

    const { projectName, myRole, about, url } = formData;

    useEffect(() => {
        if (projectToEdit) {
            setFormData({
                projectName: projectToEdit.projectName,
                myRole: projectToEdit.myRole,
                about: projectToEdit.about,
                url: projectToEdit.url,
                images: projectToEdit.images || {
                    image1: null,
                    image2: null,
                    image3: null,
                },
            });
            setImages(projectToEdit.images || {
                image1: null,
                image2: null,
                image3: null,
            });
        }
    }, [projectToEdit]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, imageKey: string) => {
        if (event.target.files) {
            const file = event.target.files[0];
            if (file && file.size <= 10 * 1024 * 1024) {
                // Update images state with File object for preview
                setImages(prevState => ({
                    ...prevState,
                    [imageKey]: file
                }));

                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                    setFormData(prevState => ({
                        ...prevState,
                        images: {
                            ...prevState.images,
                            [imageKey]: reader.result, // Store Base64 string
                        },
                    }));
                };
            } else {
                alert("File is too large. Please upload a file smaller than 10MB.");
            }
        }
    };

    const handleRemoveImage = (imageKey: string) => {
        setImages((prevState) => ({
            ...prevState,
            [imageKey]: null,
        }));
        setFormData((prevState) => ({
            ...prevState,
            images: {
                ...prevState.images,
                [imageKey]: null,
            },
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (projectToEdit) {
            onUpdateProject(formData);
        } else {
            onAddProject(formData);
        }
        onClose();
    };

    const getImageUrl = (image: ImageType): string => {
        if (!image) return '';
        if (typeof image === 'string') return image;
        return URL.createObjectURL(image);
    };

    return (
        <div className="px-4 h-[60vh] overflow-y-scroll lg:scrollbar-none lg:scrollbar-thumb-gray-300 lg:scrollbar-track-gray-600">
            <div className="">
                <h2 className="text-3xl mb-4 mt-4 text-black-500">{projectToEdit ? "Edit Project" : "Add Project"}</h2>
                <form className="mb-8" onSubmit={handleSubmit}>
                    <label className="text-sm mb-4 text-black-500">Images</label>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                        {(["image1", "image2", "image3"] as ImageKey[]).map((imageKey) => (
                            <div className="flex flex-col mb-2" key={imageKey}>
                                {!images[imageKey] ? (
                                    <label
                                        htmlFor={`fileUploadInput-${imageKey}`}
                                        className="cursor-pointer p-4 border border-dashed border-gray-600 rounded-lg w-full text-center"
                                    >
                                        <img
                                            src={UploadIcon}
                                            alt="upload icon"
                                            className="w-10 h-10 mb-2 mx-auto"
                                        />
                                        <p className="text-xs text-gray-500 ">PNG or JPG (Max 5mb)</p>
                                    </label>
                                ) : (
                                    <div className="relative w-32 h-32">
                                         <img
                                            src={getImageUrl(images[imageKey])}
                                            alt="uploaded preview"
                                            className="object-cover w-full h-full rounded-lg"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveImage(imageKey)}
                                            className="text-xs absolute top-0 right-0 bg-gray-600 text-white rounded-full p-1 w-[25px]"
                                        >
                                            X
                                        </button>
                                    </div>
                                )}
                                <input
                                    id={`fileUploadInput-${imageKey}`}
                                    type="file"
                                    accept=".png, .jpg, .jpeg"
                                    onChange={(e) => handleFileChange(e, imageKey)}
                                    hidden
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-xs mb-1 text-gray-400">Project Name</label>
                        <input
                            type="text"
                            name="projectName"
                            className="border border-gray-900 rounded-lg outline-0 py-1 px-1"
                            value={projectName}
                            onChange={onChange}
                        />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-xs mb-1 text-gray-400">Role</label>
                        <input
                            type="text"
                            name="myRole"
                            className="border border-gray-900 text-black-500 rounded-lg outline-0 py-1 px-1"
                            value={myRole}
                            onChange={onChange}
                        />
                    </div>
                    <div className="flex flex-col gap-2 mb-3">
                        <label htmlFor="message" className="text-sm text-gray-400">
                            About
                        </label>
                        <textarea
                            name="about"
                            value={about}
                            onChange={onChange}
                            className="px-2 py-2 border border-gray-900 rounded-lg outline-none"
                        />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-xs mb-1 text-gray-400">Url</label>
                        <input
                            type="text"
                            name="url"
                            className="border border-gray-900 rounded-lg outline-0 py-1 px-1"
                            value={url}
                            onChange={onChange}
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full lg:flex text-sm items-center text-center justify-center gap-2 custom-bg shadow-lg text-white px-6 py-3 rounded-xl"
                    >
                        {projectToEdit ? "Update Project" : "Add Project"}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default CreateProject;