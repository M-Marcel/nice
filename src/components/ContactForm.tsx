import { useState } from "react"
import UploadIcon from '../assets/upload.png'
import Button from "./Button";

const ContactForm = () => {

    const [image, setImage] = useState<File | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        emailAddress: '',
        subject: '',
        message: '',
        file:'',
    })

    const { name, emailAddress, subject, message, file } = formData

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
        <div className="bg-white w-full lg:w-[30%] px-4 py-6 h-full mt-[40px] rounded-2xl">
            <form className="h-[auto] overflow-y-scroll hide-scrollbar">
                <div className="flex flex-col gap-2 mb-3">
                    <label htmlFor="name" className="text-sm text-gray-400">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={onChange}
                        className="px-4 py-2 border border-gray-600 rounded-lg outline-none"
                    />
                </div>
                <div className="flex flex-col gap-2 mb-3">
                    <label htmlFor="emailAddress" className="text-sm text-gray-400">
                        Email Address
                    </label>
                    <input
                        type="text"
                        name="emailAddress"
                        value={emailAddress}
                        onChange={onChange}
                        className="px-4 py-2 border border-gray-600 rounded-lg outline-none"
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
                    />
                </div>
                <div className="flex flex-col gap-2 mb-3">
                    <label htmlFor="message" className="text-sm text-gray-400">
                        Message
                    </label>
                    <textarea
                        name="message"
                        value={message}
                        onChange={onChange}
                        className="px-4 py-2 border border-gray-600 rounded-lg outline-none"
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
                    <Button className="mt-4 custom-bg px-4 py-2 w-full text-white rounded-lg text-md">Send Message</Button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm