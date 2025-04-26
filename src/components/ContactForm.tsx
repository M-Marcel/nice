import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store"; // Adjust the path as needed
import { sendContactMessage} from "../slices/contact/contactSlice";
import UploadIcon from '../assets/upload.png';
import Button from "./Button";

const ContactForm = () => {
    const dispatch: AppDispatch = useDispatch();
    const { isLoading } = useSelector((state: RootState) => state.contact);

    const [image, setImage] = useState<File | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        file: '',
    });

    const { name, email, subject, message: formMessage, file } = formData;

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!name || !email || !subject || !formMessage) {
            alert("Please fill in all required fields");
            return;
        }

        const contactData = {
            name,
            email,
            subject,
            message: formMessage,
            files: image || undefined
        };

        dispatch(sendContactMessage(contactData))
            .unwrap()
            .then(() => {
                // Reset form on success
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                    file: '',
                });
                setImage(null);
                // The success message will be shown by the toast in the slice
            })
            .catch((error) => {
                // Error handling is already done in the slice
                console.error("Failed to send message:", error);
            });
    };

    return (
        <div className="bg-white w-[100%] md:w-[50%] lg:w-[35%] px-8 lg:px-8 py-6 h-auto mt-[120px] lg:mt-[40px] rounded-2xl">
            <form onSubmit={handleSubmit} className="h-[auto] relative z-10 overflow-y-scroll hide-scrollbar">
                <div className="flex flex-col gap-2 mb-8">
                    <label htmlFor="name" className="text-sm text-gray-400">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={onChange}
                        className="px-4 py-2 border border-gray-600 rounded-lg outline-none"
                        required
                    />
                </div>
                <div className="flex flex-col gap-2 mb-3">
                    <label htmlFor="emailAddress" className="text-sm text-gray-400">
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        className="px-4 py-2 border border-gray-600 rounded-lg outline-none"
                        required
                    />
                </div>
                <div className="flex flex-col gap-2 mb-3">
                    <label htmlFor="subject" className="text-sm text-gray-400">
                        Subject
                    </label>
                    <input
                        type="text"
                        name="subject"
                        value={subject}
                        onChange={onChange}
                        className="px-4 py-2 border border-gray-600 rounded-lg outline-none"
                        required
                    />
                </div>
                <div className="flex flex-col gap-2 mb-3">
                    <label htmlFor="message" className="text-sm text-gray-400">
                        Message
                    </label>
                    <textarea
                        name="message"
                        value={formMessage}
                        onChange={onChange}
                        className="px-4 py-2 border border-gray-600 rounded-lg outline-none"
                        required
                    />
                </div>
                <div className="flex flex-col gap-2 mb-3">
                    <label htmlFor="fileUpload" className="text-sm text-gray-400">
                        File Upload (Optional)
                    </label>
                    <div className="flex flex-col items-center">
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
                            value={file}
                            accept=".png, .jpg, .jpeg"
                            onChange={handleFileChange}
                            hidden
                        />
                    </div>
                    <Button 
                        type="submit"
                        className="mt-4 custom-bg px-4 py-2 w-full text-white rounded-lg text-md"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Sending...' : 'Send Message'}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;