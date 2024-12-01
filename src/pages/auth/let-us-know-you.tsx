import Button from "../../components/Button"
import LogoImage from "../../assets/logo.png"
import InputChecker from "../../components/InputChecker"
import { useState } from "react"
import CloseEye from "../../assets/svg/CloseEye"
import OpenEye from "../../assets/svg/OpenEye"

const LetUsKnowYou = () => {
    const [passWordVisible, setPassWordVisible] = useState<boolean>(false)
    const [confirmPassWordVisible, setConfirmPassWordVisible] = useState<boolean>(false)

    // const [formData, setFormData] = useState({
    //     email: '',
    //     password: '',
    //     userWorkRole: '',
    //     userCompanySize: '',
    //     userUseForZroleak: '',
    //     userTechnicalExperience: ''

    // })
    // const {
    //     email,
    //     password,
    //     userWorkRole,
    //     userCompanySize,
    //     userUseForZroleak,
    //     userTechnicalExperience,
    // } = formData

 


    const togglePassWordVisibility = () => {
        setPassWordVisible(!passWordVisible)
    }
    const togglePassWordVisibility2 = () => {
        setConfirmPassWordVisible(!confirmPassWordVisible)
    }

    return (
        <div className="letsknowyou flex justify-center">
            <div className="bg-white px-4 py-4 h-full">
                <div className="flex flex-col gap-2 mb-3 items-center">
                    <img src={LogoImage} alt="logoImg" width={30} height={30} />
                    <h2 className="text-black-500 text-4xl mt-4 font-semibold">Let’s know you better</h2>
                    <p className="text-gray-500 text-md mb-4">Share a few details with us</p>
                </div>
                <form className="h-[75vh] overflow-y-scroll hide-scrollbar">
                    <div className="flex flex-col gap-2 mb-4">
                        <label htmlFor="password" className="text-sm text-gray-400 mb-2">
                            Which best describes your role?
                        </label>
                        <InputChecker
                            className="custom-checkbox"
                            type="checkbox"
                        >
                            Business Owner
                        </InputChecker>
                        <InputChecker className="custom-checkbox" type="checkbox">
                            Developer
                        </InputChecker>
                        <InputChecker className="custom-checkbox" type="checkbox">
                            Community Manager
                        </InputChecker>
                        <InputChecker className="custom-checkbox" type="checkbox">
                            Marketer
                        </InputChecker>
                        <InputChecker className="custom-checkbox" type="checkbox">
                            Other
                        </InputChecker>
                    </div>
                    <div className="flex flex-col gap-2 mb-4">
                        <label htmlFor="password" className="text-sm text-gray-400 mb-2">
                            How many employees are in your organization?
                        </label>
                        <InputChecker className="custom-radio" type="radio">
                            1 (Solo/Individual)
                        </InputChecker>
                        <InputChecker className="custom-radio" type="radio">
                            2-10
                        </InputChecker>
                        <InputChecker className="custom-radio" type="radio">
                            11-50
                        </InputChecker>
                        <InputChecker className="custom-radio" type="radio">
                            51-100
                        </InputChecker>
                        <InputChecker className="custom-radio" type="radio">
                            100+
                        </InputChecker>
                    </div>
                    <div className="flex flex-col gap-2 mb-4">
                        <label htmlFor="password" className="text-sm text-gray-400 mb-2">
                            What do you plan to use Zroleak for?
                        </label>
                        <InputChecker className="custom-checkbox" type="checkbox">
                            Automating customer support
                        </InputChecker>
                        <InputChecker className="custom-checkbox" type="checkbox">
                            Managing a community
                        </InputChecker>
                        <InputChecker className="custom-checkbox" type="checkbox">
                            Creating Web3/crypto-related bots
                        </InputChecker>
                        <InputChecker className="custom-checkbox" type="checkbox">
                            Running a marketing campaign
                        </InputChecker>
                        <InputChecker className="custom-checkbox" type="checkbox">
                            Other
                        </InputChecker>
                    </div>
                    <div className="flex flex-col gap-2 mb-3">
                        <label htmlFor="password" className="text-sm text-gray-400 mb-2">
                            How familiar are you with creating bots or automation tools?
                        </label>
                        <InputChecker className="custom-radio" type="radio">
                            I’m a complete beginner
                        </InputChecker>
                        <InputChecker className="custom-radio" type="radio">
                            I have some experience
                        </InputChecker>
                        <InputChecker className="custom-radio" type="radio">
                            I’m very experienced
                        </InputChecker>

                    </div>
                    <div className="flex flex-col gap-2 mb-4">
                        <label htmlFor="password" className="text-sm text-gray-400">
                            Password
                        </label>
                        <div className="relative w-full">
                            <input
                                type={passWordVisible ? 'text' : 'password'}
                                className="w-full px-4 py-2 border border-gray-600 rounded-lg outline-none"
                            />
                            <Button type="button" className="flex justify-center items-center absolute top-2 left-[360px]  text-gray-800" onClick={togglePassWordVisibility}>
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
                    <div className="flex flex-col gap-2">
                        <label htmlFor="confirmpassword" className="text-sm text-gray-400">
                            Confirm Password
                        </label>
                        <div className="relative w-full">
                            <input
                                type={confirmPassWordVisible ? 'text' : 'password'}
                                className="w-full px-4 py-2 border border-gray-600 rounded-lg outline-none"
                            />
                            <Button type="button" className="flex justify-center items-center absolute top-2 left-[360px]  text-gray-800" onClick={togglePassWordVisibility2}>
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

                    <Button className="mt-4 mb-2 custom-bg w-full text-white px-4 py-2 rounded-lg text-md font-semibold">Continue</Button>
                </form>
            </div>
        </div >
    )
}

export default LetUsKnowYou