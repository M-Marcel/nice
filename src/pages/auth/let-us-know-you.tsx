import Button from "../../components/Button"
import LogoImage from "../../assets/lanepact-logo.png"
import InputChecker from "../../components/InputChecker"
import { useEffect, useState } from "react"
import CloseEye from "../../assets/svg/CloseEye"
import OpenEye from "../../assets/svg/OpenEye"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { toast } from "react-toastify"
import { reset } from "../../slices/wait/waitSlice"
import SubmitButton from "../../components/SubmitButton"
import { completeSignUp } from "../../slices/auth/authSlice"
import { useLocation, useNavigate } from "react-router-dom"


const LetUsKnowYou = () => {
    const navigate = useNavigate()
    const { state } = useLocation()
    const [passWordVisible, setPassWordVisible] = useState<boolean>(false)
    const [confirmPassWordVisible, setConfirmPassWordVisible] = useState<boolean>(false)

    const togglePassWordVisibility = () => {
        setPassWordVisible(!passWordVisible)
    }
    const togglePassWordVisibility2 = () => {
        setConfirmPassWordVisible(!confirmPassWordVisible)
    }

    const [formData, setFormData] = useState({
        email: '',
        gender: '',
        password: '',
        confirmPassword: '',
        userWorkRole: '',
        userCompanySize: '',
        userUseForZroleak: [] as string[],
        userTechnicalExperience: ''
    })

    const {
        email,
        gender,
        password,
        confirmPassword,
        userWorkRole,
        userCompanySize,
        userUseForZroleak,
        userTechnicalExperience,
    } = formData

    const dispatch = useAppDispatch()

    const { isLoading, isCompleteSignUpSuccess, message } = useAppSelector((state) => state.auth)

    useEffect(() => {
        const storedEmail = localStorage.getItem("userEmail");
        if (storedEmail) {
            setFormData((prev) => ({ ...prev, email: storedEmail }));
        }
    }, []);


    const handleCheckboxChange = (key: keyof typeof formData, value: string) => {
        setFormData((prev) => {
            const list = prev[key] as string[];
            const updatedList = list.includes(value) ?
                list.filter((item) => item !== value) :
                [...list, value]
            return { ...prev, [key]: updatedList }
        })
    }

    const handleRadioChange = (key: keyof typeof formData, value: string) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        console.log('Form submitted:', formData)
        console.log(formData.email)
        if (isLoading) return;

        if (!email || (!state?.provider && (!password || password !== confirmPassword)) || !userWorkRole ||
            !userCompanySize || !userUseForZroleak || !userTechnicalExperience) {
            return toast.error('please provide all details')
        }
        if (!state?.provider) {
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])[A-Za-z\d\W]{8,}$/;
    
            if (password.length < 8) {
                return toast.error("Password too short, should not be less than 8 characters");
            }
            if (!passwordRegex.test(password)) {
                return toast.error(
                    "Password must contain alphabets, capital letters, small letters, a number, and a special character"
                );
            }
            if (password !== confirmPassword) {
                return toast.error("Passwords do not match");
            }
        } else {
            const userData = {
                email,
                gender,
                password: state?.provider ? undefined : password,
                userWorkRole,
                userCompanySize,
                userUseForZroleak,
                userTechnicalExperience
            }
            dispatch(completeSignUp(userData))
        }
    }

    useEffect(() => {
        if (isCompleteSignUpSuccess) {
            toast.success('registration successful');
            navigate('/')
            localStorage.removeItem('userEmail');
        }
        return () => {
            dispatch(reset())
        }

    }, [isCompleteSignUpSuccess, message, dispatch, navigate])

    return (
        <div className="letsknowyou flex justify-center">
            <div className="bg-white px-4 py-4 h-full">
                <div className="flex flex-col gap-2 mb-3 items-center">
                    <img src={LogoImage} alt="logoImg" width={30} height={30} />
                    <h2 className="text-black-500 text-2xl lg:text-4xl mt-4 font-semibold">Let’s know you better</h2>
                    <p className="text-gray-500 text-sm lg:text-md mb-4">Share a few details with us</p>
                </div>
                <form onSubmit={handleSubmit} className="h-[75vh] overflow-y-scroll hide-scrollbar">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="hidden text-sm text-gray-400">
                            Email
                        </label>
                        <input
                            type="text"
                            name="email"
                            readOnly
                            value={formData.email}
                            style={{ display: 'none' }}
                            className="text-black-200 px-4 py-2 border border-gray-600 rounded-lg outline-none"

                        />
                    </div>
                    <div className="flex flex-col gap-2 mb-4">
                        <label htmlFor="gender" className="text-sm text-gray-400 mb-2">
                            Gender
                        </label>
                        {["Male", "Female", "Others"].map((sex) => (
                            <InputChecker
                                className="custom-radio"
                                type="radio"
                                key={sex}
                                checked={formData.gender === sex}
                                onChange={() => handleRadioChange("gender", sex)}

                            >
                                {sex}
                            </InputChecker>
                        ))}
                    </div>
                    {/* User Role */}
                    <div className="flex flex-col gap-2 mb-4">
                        <label htmlFor="role" className="text-sm text-gray-400 mb-2">
                            Which best describes your role?
                        </label>
                        {["Business Owner", "Developer", "Community Manager", "Marketer", "Other"].map((role) => (
                            <InputChecker
                                key={role}
                                className="custom-checkbox"
                                type="radio"
                                checked={formData.userWorkRole.includes(role)}
                                onChange={() => handleRadioChange("userWorkRole", role)}
                            >
                                {role}
                            </InputChecker>
                        ))}
                    </div>
                    {/* Company Size */}
                    <div className="flex flex-col gap-2 mb-4">
                        <label htmlFor="password" className="text-sm text-gray-400 mb-2">
                            How many employees are in your organization?
                        </label>
                        {["1", "2-10", "11-50", "51-100", "100+"].map((size) => (
                            <InputChecker
                                className="custom-radio"
                                type="radio"
                                key={size}
                                checked={formData.userCompanySize === size}
                                onChange={() => handleRadioChange("userCompanySize", size)}

                            >
                                {size}
                            </InputChecker>
                        ))}
                    </div>
                    {/* Zroleak Usage */}
                    <div className="flex flex-col gap-2 mb-4">
                        <label htmlFor="password" className="text-sm text-gray-400 mb-2">
                            What do you plan to use Zroleak for?
                        </label>
                        {
                            [
                                "Automating customer support",
                                "Managing a community",
                                "Creating Web3/crypto-related bots",
                                "Running a marketing campaign",
                                "Other"
                            ].map((useCase) => (
                                <InputChecker
                                    className="custom-checkbox"
                                    type="checkbox"
                                    key={useCase}
                                    checked={formData.userUseForZroleak.includes(useCase)}
                                    onChange={() => handleCheckboxChange("userUseForZroleak", useCase)}
                                >
                                    {useCase}
                                </InputChecker>
                            ))
                        }
                    </div>
                    {/* Technical Experience */}
                    <div className="flex flex-col gap-2 mb-3">
                        <label htmlFor="password" className="text-sm text-gray-400 mb-2">
                            How familiar are you with creating bots or automation tools?
                        </label>
                        {
                            [
                                "Beginner",
                                "Intermediate",
                                "Expert"
                            ].map((experience) => (
                                <InputChecker
                                    className="custom-radio"
                                    type="radio"
                                    key={experience}
                                    checked={formData.userTechnicalExperience === experience}
                                    onChange={() => handleRadioChange("userTechnicalExperience", experience)}
                                >
                                    {experience}
                                </InputChecker>
                            ))
                        }
                    </div>
                    {
                        !state.provider && (
                            <>
                                <div className="flex flex-col gap-2 mb-4">
                                    <label htmlFor="password" className="text-sm text-gray-400">
                                        Password
                                    </label>
                                    <div className="relative w-full">
                                        <input
                                            type={passWordVisible ? 'text' : 'password'}
                                            name="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-600 rounded-lg outline-none"
                                        />
                                        <Button type="button" className="flex justify-center items-center absolute top-2 right-[10px] lg:right-[10px]  text-gray-800" onClick={togglePassWordVisibility}>
                                            {passWordVisible ?
                                                (
                                                    <OpenEye />
                                                ) : (

                                                    <CloseEye />
                                                )

                                            }
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 mb-3">
                                    <label htmlFor="confirmpassword" className="text-sm text-gray-400">
                                        Confirm Password
                                    </label>
                                    <div className="relative w-full">
                                        <input
                                            type={confirmPassWordVisible ? 'text' : 'password'}
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-600 rounded-lg outline-none"
                                        />
                                        <Button type="button" className="flex justify-center items-center absolute top-2 right-[10px] lg:right-[10px] text-gray-800" onClick={togglePassWordVisibility2}>
                                            {confirmPassWordVisible ?
                                                (
                                                    <OpenEye />
                                                ) : (

                                                    <CloseEye />
                                                )

                                            }
                                        </Button>
                                    </div>
                                </div>

                            </>
                        )
                    }


                    <SubmitButton
                        isLoading={isLoading}
                        className={`px-4 py-2 w-full text-white rounded-lg text-md ${isLoading ? 'bg-blue-100/55' : 'custom-bg'
                            }`}
                    >
                        Continue
                    </SubmitButton>
                </form>
            </div>
        </div >
    )
}


export default LetUsKnowYou