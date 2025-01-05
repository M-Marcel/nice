import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getProfile, updateProfile } from "../slices/auth/authSlice";
import Button from "../components/Button";
import ProfileFrame from "../assets/dbFrame.png";
import Elipse from '../assets/avatarprofile.jpeg'
import Pencil from '../assets/pencil.png'
import Dashboardicon from '../assets/dashboard.png'
import { useNavigate } from "react-router-dom";

const ProfileTab = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const { isFetchProfileSuccess, user, isUpdateProfileSuccess, isLoading, message } = useAppSelector((state) => state.auth);

    const [formData, setFormData] = useState({
        fullName: `${user?.firstName || ""} ${user?.lastName || ""}`,
        workRole: user?.userWorkRole || "",
        experienceLevel: user?.userTechnicalExperience || "",
        email: user?.email || "",
        createdAt: user?.createdAt ? new Date(user.createdAt).toLocaleString() : "",
    });

    const [isEditable, setIsEditable] = useState(false);

    // Fetch user profile
    useEffect(() => {
        if (!user) dispatch(getProfile());

        if (isFetchProfileSuccess) toast.success("Profile loaded successfully");

        return () => {

        };
    }, [dispatch, isFetchProfileSuccess, user]);

    useEffect(() => {

        if (isUpdateProfileSuccess) {
            toast.success("Profile updated successfully!");
            setIsEditable(false);
            navigate("/dashboard")

        }
    }, [isUpdateProfileSuccess, navigate]);

    const handleEditToggle = () => {
        setIsEditable(true);
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        const [firstName, lastName] = formData.fullName.split(" ");
        const updatedData = {
            firstName: firstName || "",
            lastName: lastName || "",
            userTechnicalExperience: formData.experienceLevel,
            userWorkRole: formData.workRole,
        };
        dispatch(updateProfile(updatedData));
        if (isUpdateProfileSuccess) {
            toast.success("Profile updated successfully!");
            setIsEditable(false);
            navigate("/dashboard")

        }

    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex flex-col lg:flex-row px-2">
            <div className="px-4 w-full lg:relative left-[0%]">
                <div className="mt-8">
                    <div className="w-full lg:w-full px-2 py-4">
                        <div>
                            <img src={ProfileFrame} alt="profile-frame" className="rounded-3xl mb-6" />
                            <div className="bg-white py-3 px-3">
                                <div className="mb-4 lg:absolute top-[26%]">
                                    <img
                                        src={Elipse}
                                        alt="Profile"
                                        width={65}
                                        height={65}
                                        className="rounded-full"
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h2 className="text-sm mt-4">{formData.fullName}</h2>
                                        <p className="text-xs text-gray-500 mb-4">{formData.email}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row gap-4 justify-between">
                                    <form className="w-[100%] lg:w-[50%]" onSubmit={handleSave}>
                                        {message && <p className="text-red-500 text-sm mt-2">{message}</p>}
                                        <div className="flex flex-col lg:flex-row justify-between items-center">
                                            <div className="flex w-[100%] lg:w-[70%] flex-col mb-3">
                                                <label className="mb-1 text-sm text-gray-500">Full name</label>
                                                <input
                                                    type="text"
                                                    name="fullName"
                                                    value={formData.fullName}
                                                    onChange={handleInputChange}
                                                    disabled={!isEditable}
                                                    className="border py-2 px-2 w-[100%] border-gray-600 outline-0 rounded-lg"
                                                />
                                            </div>
                                            <div className="w-[100%] lg:w-[25%] flex gap-6 items-center mt-4">
                                                {!isEditable && (
                                                    <Button
                                                        onClick={handleEditToggle}
                                                        type="button"
                                                        className="bg-white mt-3 gap-2 flex flex-row items-center border-none px-2 py-2"
                                                    >
                                                        <img src={Pencil} alt="pencil" width={20} height={20} />
                                                        <span className="text-gray-500 text-sm">Edit</span>
                                                    </Button>
                                                )}
                                                {isEditable && (
                                                    <Button className="custom-bg px-4 py-2 rounded-lg text-white text-sm" type="submit" disabled={isLoading}>
                                                        {isLoading ? "Saving..." : "Save"}
                                                    </Button>
                                                )}


                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="flex w-[90%] flex-col mb-3">
                                                <label className="mb-1 text-sm text-gray-500">Role</label>
                                                <input
                                                    type="text"
                                                    name="workRole"
                                                    value={formData.workRole}
                                                    onChange={handleInputChange}
                                                    disabled={!isEditable}
                                                    className="border px-2 py-2 w-[100%] border-gray-600 outline-0 rounded-lg"
                                                />
                                            </div>

                                        </div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="flex w-[90%] flex-col mb-3">
                                                <label className="mb-1 text-sm text-gray-500">Experience level</label>
                                                <input
                                                    type="text"
                                                    name="experienceLevel"
                                                    value={formData.experienceLevel}
                                                    onChange={handleInputChange}
                                                    disabled={!isEditable}
                                                    className="px-2 border py-2 w-[100%] border-gray-600 outline-0 rounded-lg"

                                                />
                                            </div>
                                        </div>
                                    </form>
                                    <div className="w-[100%] lg:w-[35%]">
                                        <div className="mb-3 px-3 mt-4 border border-gray-600 py-4 rounded-lg">
                                            <div className="mb-3">
                                                <img src={Dashboardicon} alt="dashboardIcon" className="mb-2" width={20} height={20} />
                                                <p className="text-gray-500 text-sm">Account created</p>
                                            </div>
                                            <p className="text-sm">{formData?.createdAt}</p>
                                        </div>
                                        <div className="mb-3 px-3 mt-4 border border-gray-600 py-4 rounded-lg">
                                            <div className="mb-3">
                                                <img src={Dashboardicon} alt="dashboardIcon" className="mb-2" width={20} height={20} />
                                                <p className="text-gray-500 text-sm">Account created</p>
                                            </div>
                                            <p className="text-sm">{formData?.createdAt}</p>
                                        </div>
                                        <div className="mb-3 px-3 mt-4 border border-gray-600 py-4 rounded-lg">
                                            <div className="mb-3">
                                                <Button className="bg-black-500 text-xs text-white px-2 py-2 rounded-full">14 Invites</Button>
                                            </div>
                                            <p className="text-sm">www.lanepact.com/john</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileTab;