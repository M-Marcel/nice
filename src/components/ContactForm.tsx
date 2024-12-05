import { useState } from "react"

const ContactForm = () => {

    const [formData, setFormData ] = useState({
        name:'',
        emailAddress:'',
        subject:'',
        message:'',
    })

    const {name, emailAddress, subject, message } = formData

    const onChange = (e:React.ChangeEvent<HTMLInputElement |  HTMLTextAreaElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]:e.target.value
        })
    )
}

    return (
        <div className="bg-white px-4 py-4 h-full mt-[40px]">
            <form className="h-[65vh] overflow-y-scroll hide-scrollbar">
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
            </form>
        </div>
    )
}

export default ContactForm