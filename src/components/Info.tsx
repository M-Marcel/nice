import { useState, useRef, useEffect, useCallback } from "react";
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

    const getInitialFormData = useCallback(() => {
        try {
            const savedDraft = localStorage.getItem(localStorageKey);
            if (savedDraft) return JSON.parse(savedDraft);
        } catch (e) {
            console.error("Failed to parse saved info draft", e);
        }
        
        // If no draft, use empty/default values
        return {
            profileImage: '',
            coverImg: '',
            name: '',
            email: '',
            about: '',
            location: '',
            socialLinks: {
                x: '',
                linkedIn: '',
                facebook: '',
                tiktok: '',
                dribble: '',
                github: '',
                instagram: '',
                pinterest: '',
                threads: '',
                telegram: '',
                whatsapp: ''
            }
        };
    }, [localStorageKey]);

    const [formData, setFormData] = useState<FormData>(getInitialFormData);
    const profileInputRef = useRef<HTMLInputElement>(null);
    const coverInputRef = useRef<HTMLInputElement>(null);
    const supportsCoverImage = portfolioData.referenceTemplate === templateIds.Professional;

    useEffect(() => {
        setFormData(getInitialFormData());
    }, [getInitialFormData]);

   
    useEffect(() => {
        if (portfolioData?.sections?.[0]?.customContent) {
            const existingData = portfolioData.sections[0].customContent;
            const socialLinks = existingData?.socialLinks?.[0] || {};
            
            // Only update if our current state is empty (no changes made yet)
            const hasNoChanges = Object.values(formData).every(val => val === '' || (typeof val === 'object' && Object.values(val).every(v => v === '')));

            if (hasNoChanges) {
                setFormData({
                    profileImage: existingData?.profileImage || '',
                    coverImg: existingData?.coverImg || '',
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
                });
            }
        }
        // eslint-disable-next-line
    }, [portfolioData]); 

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
                        {/* Portfolio Name form Input */}
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