import LogoImage from '../../assets/lanepact-logo.png'
import { useEffect, useState } from 'react'
import SubmitButton from '../../components/SubmitButton'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { toast } from 'react-toastify'
import { reset, resetPassword } from '../../slices/auth/authSlice'
import OpenEye from '../../assets/svg/OpenEye'
import CloseEye from '../../assets/svg/CloseEye'
import Button from '../../components/Button'

type ResetPasswordProps = {
    email: string
    openPasswordChangeSuccessModal: () => void
}
const ResetPassword = ({ email, openPasswordChangeSuccessModal }: ResetPasswordProps) => {
    const [passWordVisible, setPassWordVisible] = useState<boolean>(false)
    const togglePassWordVisibility = () => {
        setPassWordVisible(!passWordVisible)
    }

    const [formData, setFormData] = useState({
        email: email,
        newPassword: '',
        confirmNewPassword: ''
    })
    const { newPassword, confirmNewPassword } = formData

    const dispatch = useAppDispatch()

    const { isLoading, isResetPasswordSuccess, message } = useAppSelector((state) => state.auth)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleForgot = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])[A-Za-z\d\W]{8,}$/;
        if (!email || !newPassword) {
            return toast.error('please enter new password')
        }
        if(newPassword.length < 8 ){
            return toast.error('password too short, should not be less than 8 characters')
        }
        if(!passwordRegex.test(newPassword)) {
            return toast.error('password must contain alphabets, number and special character');
        }
        if (newPassword !== confirmNewPassword) {
            return toast.error('passwords do not match')

        } else {
            const userData = {
                email,
                newPassword
            }

            dispatch(resetPassword(userData))
        }
    }

    useEffect(() => {
        if (isResetPasswordSuccess) {
            openPasswordChangeSuccessModal()
        }
        return () => {
            dispatch(reset())
        }

    }, [isResetPasswordSuccess, message, dispatch, openPasswordChangeSuccessModal])

    return (
        <div className="bg-white px-4 py-4 h-full">
            <div className="flex flex-col gap-2 mb-3">
                <img src={LogoImage} alt="logoImg" width={20} height={20} />
                <h2 className="text-black-500 text-xl">Set password</h2>
                <p className="text-gray-500 text-sm">Enter a new secure password</p>
            </div>
            <form onSubmit={handleForgot} className="h-[55vh] overflow-y-scroll hide-scrollbar">
                <div className="flex flex-col gap-2 mb-3">
                    <label htmlFor="email" className="text-sm hidden text-gray-400">
                        Email
                    </label>
                    <input
                        type="text"
                        name="email"
                        readOnly
                        value={formData.email}
                        style={{ display: 'none' }}
                        className="px-4 py-2 border border-gray-600 rounded-lg outline-none"
                    />
                </div>
                <div className="flex flex-col gap-2 mb-3">
                    <label htmlFor="password" className="text-sm text-gray-400">
                        New Password
                    </label>
                    <div className="relative w-full">
                        <input
                            type={passWordVisible ? 'text' : 'password'}
                            name="newPassword"
                            value={newPassword}
                            onChange={onChange}
                            className="w-full px-4 py-2 border border-gray-600 rounded-lg outline-none"
                        />
                        <Button type="button" className="flex justify-center items-center absolute top-2  left-[320px] lg:left-[320px] text-gray-800" onClick={togglePassWordVisibility}>
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
                    <label htmlFor="password" className="text-sm text-gray-400">
                        Confirm New Password
                    </label>
                    <div className="relative w-full">
                        <input
                            type={passWordVisible ? 'text' : 'password'}
                            name="confirmNewPassword"
                            value={confirmNewPassword}
                            onChange={onChange}
                            className="w-full px-4 py-2 border border-gray-600 rounded-lg outline-none"
                        />
                        <Button type="button" className="flex justify-center items-center absolute top-2 left-[320px] lg:left-[320px] text-gray-800" onClick={togglePassWordVisibility}>
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

                <SubmitButton
                    isLoading={isLoading}
                    className={`px-4 py-2 w-full text-white rounded-lg text-md ${isLoading ? 'bg-blue-100/55' : 'custom-bg'
                        }`}
                >
                    Continue
                </SubmitButton>
            </form>
        </div>
    )
}

export default ResetPassword