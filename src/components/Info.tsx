import { useState, useRef, useEffect } from "react";
import UploadIcon from '../assets/upload.png';
import { Portfolio } from "../dataTypes";
import Button from "./Button";
import { toast } from "react-toastify";
import { getTemplateIds } from "../config/templates";

type templateDataProps = {
    portfolioData: Portfolio;
    updatePortfolioData: (updatedData: Partial<Portfolio>) => void;
    isPublished: boolean
    templateName?: string;
};

type FormData = {
    profileImage: string;
    coverImg: string;
    name: string;
    email: string;
    about: string;
    location: string;
    socialLinks: {
        x: string;
        linkedIn: string;
        facebook: string;
        tiktok: string;
        dribble: string;
        github: string;
        instagram: string;
        pinterest: string;
        threads: string;
        telegram: string;
        whatsapp: string;
    };
};

const Info = ({ portfolioData, updatePortfolioData, isPublished, templateName }: templateDataProps) => {
    const templateIds = getTemplateIds();
    // Create a unique localStorage key based on portfolio ID
    const localStorageKey = `infoDraft_${portfolioData._id}`;

    // Initialize empty form state but check localStorage for drafts
    // Initialize form state
    const [formData, setFormData] = useState<FormData>(() => {
        // 1. Check for unsaved draft in localStorage
        const savedDraft = localStorage.getItem(localStorageKey);
        if (savedDraft) return JSON.parse(savedDraft);

        // 2. If no draft, check for existing portfolio data
        const existingData = portfolioData?.sections?.[0]?.customContent || {};
        const socialLinks = existingData?.socialLinks?.[0] || {};
        return {
            profileImage: existingData?.profileImage || '',
            coverImg: existingData?.coverImg || '', // Always include coverImg in state
            name: existingData?.name || '',
            email: existingData?.email || '',
            about: existingData?.about || '',
            location: existingData?.location || '',
            socialLinks: {
                x: socialLinks?.x || '',
                linkedIn: socialLinks?.linkedIn || '',
                facebook: socialLinks?.facebook || '',
                tiktok: socialLinks?.tiktok || '',
                dribble: socialLinks?.dribble || '',
                github: socialLinks?.github || '',
                instagram: socialLinks?.instagram || '',
                pinterest: socialLinks?.pinterest || '',
                threads: socialLinks?.threads || '',
                telegram: socialLinks?.telegram || '',
                whatsapp: socialLinks?.whatsapp || ''
            }
        };
    });
    const [tempName, setTempName] = useState(portfolioData.name || '');
    const [isEditingName, setIsEditingName] = useState(false);
    const profileInputRef = useRef<HTMLInputElement>(null);
    const coverInputRef = useRef<HTMLInputElement>(null);
    const supportsCoverImage = portfolioData.referenceTemplate === templateIds.Professional;

    // Save to localStorage when formData changes
   useEffect(() => {
        try {
          localStorage.setItem(localStorageKey, JSON.stringify(formData));
        } catch (e) {
          console.error("Failed to save to localStorage", e);
          // Optionally notify the user
          toast.error("Failed to save draft - your data might be too large");
        }
      }, [formData, localStorageKey]);


    // Clear draft when portfolio is published
    useEffect(() => {
        if (isPublished) {
            localStorage.removeItem(localStorageKey);
        }
    }, [isPublished, localStorageKey]);

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: 'profile' | 'cover') => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (file.size > 10 * 1024 * 1024) {
            toast.error("File size exceeds 10MB limit");
            resetFileInput(type);
            return;
        }

        if (!file.type.match('image.*')) {
            toast.error("Please select an image file");
            resetFileInput(type);
            return;
        }

        try {
            const base64 = await readFileAsDataURL(file);
            if (type === 'profile') {
                setFormData((prev: FormData) => ({ ...prev, profileImage: base64 }));
            } else {
                setFormData((prev: FormData) => ({ ...prev, coverImg: base64 }));
            }
        } catch (error) {
            console.error("Error reading file:", error);
            toast.error("Error processing image");
            resetFileInput(type);
        }
    };

    const readFileAsDataURL = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = () => reject(reader.error);
            reader.readAsDataURL(file);
        });
    };

    const resetFileInput = (type: 'profile' | 'cover') => {
        const ref = type === 'profile' ? profileInputRef : coverInputRef;
        if (ref.current) ref.current.value = '';
    };

    const handleRemoveImage = (type: 'profile' | 'cover') => {
        setFormData((prev: FormData) => ({
            ...prev,
            [type === 'profile' ? 'profileImage' : 'coverImg']: ''
        }));
        resetFileInput(type);
    };

    const triggerFileInput = (type: 'profile' | 'cover') => {
        const ref = type === 'profile' ? profileInputRef : coverInputRef;
        ref.current?.click();
    };

    const onSocialLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev: FormData) => ({
            ...prev,
            socialLinks: { ...prev.socialLinks, [name]: value }
        }));
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev: FormData) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        updatePortfolioData({
            sections: [{
                ...portfolioData.sections[0],
                customContent: {
                    ...portfolioData.sections[0].customContent,
                    ...formData,
                    socialLinks: [{
                        x: formData.socialLinks.x,
                        linkedIn: formData.socialLinks.linkedIn,
                        facebook: formData.socialLinks.facebook,
                        tiktok: formData.socialLinks.tiktok,
                        dribble: formData.socialLinks.dribble,
                        github: formData.socialLinks.github,
                        instagram: formData.socialLinks.instagram,
                        pinterest: formData.socialLinks.pinterest,
                        threads: formData.socialLinks.threads,
                        telegram: formData.socialLinks.telegram,
                        whatsapp: formData.socialLinks.whatsapp
                    }]
                },
            }],
        });

        // Clear draft after successful save
        localStorage.removeItem(localStorageKey);
        toast.success('Changes saved successfully');
    };

    return (
        <>
            <div className="absolute -top-[44px] right-0 z-30">
                <Button onClick={handleSave} className="lg:flex text-xs lg:text-sm items-center gap-2 bg-black-500 shadow-lg text-white px-2 py-2 lg:px-4 lg:py-2 rounded-xl">
                    Save Changes
                </Button>
            </div>
            <div className="overflow-y-scroll scrollbar-none h-[75vh] lg:scrollbar-none lg:scrollbar-thumb-gray-300 lg:scrollbar-track-gray-600 px-2">

                <div className="mt-20">
                    <form className="mb-8 lg:-ml-2" onSubmit={(e) => e.preventDefault()}>
                        {/* Profile Image Section */}
                        <div className="flex flex-col mb-2">
                            <label className="text-sm mb-1 text-gray-400">Profile Image</label>
                            {!formData.profileImage ? (
                                <div className="cursor-pointer p-4 border border-dashed border-gray-600 rounded-lg w-full text-center"
                                    onClick={() => triggerFileInput('profile')}>
                                    <img src={UploadIcon} alt="upload icon" className="w-10 h-10 mb-2 mx-auto" />
                                    <p className="text-md text-black-500">Upload a file</p>
                                    <p className="text-xs text-gray-500">PNG or JPG (Max 10mb)</p>
                                </div>
                            ) : (
                                <div className="relative w-32 h-32 mx-auto rounded-full">
                                    <img src={formData.profileImage} alt="Profile preview" className="object-cover rounded-full w-full h-full" />
                                    <button type="button" onClick={() => handleRemoveImage('profile')} className="text-xs absolute top-0 right-0 bg-gray-600 text-white rounded-full p-1 w-[25px]">
                                        X
                                    </button>
                                </div>
                            )}
                            <input ref={profileInputRef} type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'profile')} hidden />
                        </div>

                        {/* Cover Image Section */}
                        {supportsCoverImage && (
                            <div className="flex flex-col mb-2">
                                <label className="text-sm mb-1 text-gray-400">Cover Image</label>
                                {!formData.coverImg ? (
                                    <div className="cursor-pointer p-4 border border-dashed border-gray-600 rounded-lg w-full text-center"
                                        onClick={() => triggerFileInput('cover')}>
                                        <img src={UploadIcon} alt="upload icon" className="w-10 h-10 mb-2 mx-auto" />
                                        <p className="text-md text-black-500">Upload a file</p>
                                        <p className="text-xs text-gray-500">PNG or JPG (Max 10mb)</p>
                                    </div>
                                ) : (
                                    <div className="relative w-full h-32">
                                        <img src={formData.coverImg} alt="Cover preview" className="object-cover w-full h-full rounded-lg" />
                                        <button type="button" onClick={() => handleRemoveImage('cover')} className="text-xs absolute top-0 right-0 bg-gray-600 text-white rounded-full p-1 w-[25px]">
                                            X
                                        </button>
                                    </div>
                                )}
                                <input ref={coverInputRef} type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'cover')} hidden />
                            </div>
                        )}

                        {/* Form Fields */}
                        <div className="flex flex-col mb-6 mt-6">
                            <label className="text-sm mb-2 text-gray-400">Portfolio Name</label>
                            {isEditingName ? (
                                <input
                                    type="text"
                                    value={tempName}
                                    onChange={(e) => setTempName(e.target.value)}
                                    onKeyUp={(e) => {
                                        updatePortfolioData({ name: tempName });
                                    }}
                                    onBlur={() => {
                                        setIsEditingName(false);
                                    }}
                                    autoFocus
                                    className="border border-gray-900 text-black-500 font-light rounded-lg outline-0 py-1 px-1"
                                />
                            ) : (
                                <>
                                    <div className="flex items-center">
                                        <div className="text-lg font-medium flex-1">
                                            {portfolioData.name || 'Untitled Portfolio'}
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setTempName(portfolioData.name || '');
                                                setIsEditingName(true);
                                            }}
                                            className="px-2 rounded-full py-2 hover:scale-105 hover:bg-gray-600 cursor-pointer transform transition-transform duration-300"
                                            aria-label="Edit portfolio name"
                                        >
                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 20 21"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M11.7284 3.7382C12.3494 3.06539 12.6599 2.72899 12.9898 2.53276C13.7859 2.05929 14.7662 2.04457 15.5756 2.49393C15.9111 2.68016 16.2311 3.00709 16.8712 3.66096C17.5113 4.31483 17.8313 4.64176 18.0136 4.98443C18.4535 5.81126 18.4391 6.81265 17.9756 7.62591C17.7835 7.96296 17.4542 8.28014 16.7956 8.9145L8.95918 16.4622C7.71106 17.6644 7.08699 18.2655 6.30704 18.5701C5.52709 18.8747 4.66966 18.8523 2.9548 18.8075L2.72147 18.8014C2.19941 18.7877 1.93838 18.7809 1.78665 18.6087C1.63491 18.4365 1.65563 18.1706 1.69706 17.6388L1.71956 17.35C1.83617 15.8533 1.89447 15.1049 2.18675 14.4322C2.47903 13.7594 2.98319 13.2132 3.99151 12.1207L11.7284 3.7382Z"
                                                    stroke="#141B34"
                                                    strokeWidth="1.5"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M10.834 3.83398L16.6673 9.66732"
                                                    stroke="#141B34"
                                                    strokeWidth="1.5"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M11.667 18.834L18.3337 18.834"
                                                    stroke="#141B34"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="text-xs mb-1 text-gray-400">Name</label>
                            <input type="text" name="name" className="border border-gray-900 rounded-lg outline-0 py-1 px-1"
                                value={formData.name} onChange={onChange} required placeholder="Enter your name" />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label className="text-xs mb-1 text-gray-400">Email</label>
                            <input type="email" name="email" className="border border-gray-900 rounded-lg outline-0 py-1 px-1"
                                value={formData.email} onChange={onChange} required placeholder="Enter your email" />
                        </div>

                        <div className="flex flex-col gap-2 mb-4">
                            <label htmlFor="about" className="text-sm text-gray-400">About</label>
                            <textarea name="about" value={formData.about} onChange={onChange}
                                className="px-2 py-2 border border-gray-900 rounded-lg outline-none" rows={4}
                                required placeholder="Tell us about yourself" />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label className="text-xs mb-1 text-gray-400">Location</label>
                            <input type="text" name="location" className="border border-gray-900 rounded-lg outline-0 py-1 px-1"
                                value={formData.location} onChange={onChange} required placeholder="Enter your location" />
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-col gap-4 mb-4 mt-4">
                            <h3 className="text-sm text-gray-400">Social Links</h3>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col mb-4">
                                    <label className="text-xs mb-1 text-gray-400">X (Twitter)</label>
                                    <input type="url" name="x" className="border border-gray-900 rounded-lg outline-0 py-1 px-1"
                                        value={formData.socialLinks.x} onChange={onSocialLinkChange} placeholder="https://twitter.com/username" />
                                </div>
                                <div className="flex flex-col mb-4">
                                    <label className="text-xs mb-1 text-gray-400">LinkedIn</label>
                                    <input type="url" name="linkedIn" className="border border-gray-900 rounded-lg outline-0 py-1 px-1"
                                        value={formData.socialLinks.linkedIn} onChange={onSocialLinkChange} placeholder="https://linkedin.com/in/username" />
                                </div>
                                <div className="flex flex-col mb-4">
                                    <label className="text-xs mb-1 text-gray-400">Facebook</label>
                                    <input type="url" name="facebook" className="border border-gray-900 rounded-lg outline-0 py-1 px-1"
                                        value={formData.socialLinks.facebook} onChange={onSocialLinkChange} placeholder="https://facebook.com/username" />
                                </div>
                                {/* TikTok */}
                                <div className="flex flex-col">
                                    <label className="text-xs mb-1 text-gray-400">TikTok</label>
                                    <input
                                        type="url"
                                        name="tiktok"
                                        className="border border-gray-900 rounded-lg outline-0 py-1 px-1"
                                        value={formData.socialLinks.tiktok}
                                        onChange={onSocialLinkChange}
                                        placeholder="https://tiktok.com/@username"
                                    />
                                </div>

                                {/* Dribbble */}
                                <div className="flex flex-col">
                                    <label className="text-xs mb-1 text-gray-400">Dribbble</label>
                                    <input
                                        type="url"
                                        name="dribble"
                                        className="border border-gray-900 rounded-lg outline-0 py-1 px-1"
                                        value={formData.socialLinks.dribble}
                                        onChange={onSocialLinkChange}
                                        placeholder="https://dribbble.com/username"
                                    />
                                </div>

                                {/* GitHub */}
                                <div className="flex flex-col">
                                    <label className="text-xs mb-1 text-gray-400">GitHub</label>
                                    <input
                                        type="url"
                                        name="github"
                                        className="border border-gray-900 rounded-lg outline-0 py-1 px-1"
                                        value={formData.socialLinks.github}
                                        onChange={onSocialLinkChange}
                                        placeholder="https://github.com/username"
                                    />
                                </div>

                                {/* Instagram */}
                                <div className="flex flex-col">
                                    <label className="text-xs mb-1 text-gray-400">Instagram</label>
                                    <input
                                        type="url"
                                        name="instagram"
                                        className="border border-gray-900 rounded-lg outline-0 py-1 px-1"
                                        value={formData.socialLinks.instagram}
                                        onChange={onSocialLinkChange}
                                        placeholder="https://instagram.com/username"
                                    />
                                </div>

                                {/* Pinterest */}
                                <div className="flex flex-col">
                                    <label className="text-xs mb-1 text-gray-400">Pinterest</label>
                                    <input
                                        type="url"
                                        name="pinterest"
                                        className="border border-gray-900 rounded-lg outline-0 py-1 px-1"
                                        value={formData.socialLinks.pinterest}
                                        onChange={onSocialLinkChange}
                                        placeholder="https://pinterest.com/username"
                                    />
                                </div>

                                {/* Threads */}
                                <div className="flex flex-col">
                                    <label className="text-xs mb-1 text-gray-400">Threads</label>
                                    <input
                                        type="url"
                                        name="threads"
                                        className="border border-gray-900 rounded-lg outline-0 py-1 px-1"
                                        value={formData.socialLinks.threads}
                                        onChange={onSocialLinkChange}
                                        placeholder="https://threads.net/@username"
                                    />
                                </div>

                                {/* Telegram */}
                                <div className="flex flex-col">
                                    <label className="text-xs mb-1 text-gray-400">Telegram</label>
                                    <input
                                        type="url"
                                        name="telegram"
                                        className="border border-gray-900 rounded-lg outline-0 py-1 px-1"
                                        value={formData.socialLinks.telegram}
                                        onChange={onSocialLinkChange}
                                        placeholder="https://t.me/username"
                                    />
                                </div>

                                {/* WhatsApp */}
                                <div className="flex flex-col">
                                    <label className="text-xs mb-1 text-gray-400">WhatsApp</label>
                                    <input
                                        type="url"
                                        name="whatsapp"
                                        className="border border-gray-900 rounded-lg outline-0 py-1 px-1"
                                        value={formData.socialLinks.whatsapp}
                                        onChange={onSocialLinkChange}
                                        placeholder="https://wa.me/phone-number"
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>

    );
};

export default Info;