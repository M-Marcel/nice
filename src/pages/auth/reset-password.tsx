import LogoImage from '../../assets/logo.png'
import { useEffect, useState } from 'react'
import SubmitButton from '../../components/SubmitButton'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { toast } from 'react-toastify'
import { reset, resetPassword } from '../../slices/auth/authSlice'
import OpenEye from '../../assets/svg/OpenEye'
import CloseEye from '../../assets/svg/CloseEye'
import Button from '../../components/Button'

type ResetPasswordProps = {
    email:string
    openPasswordChangeSuccessModal:() => void
}
const ResetPassword = ({email, openPasswordChangeSuccessModal}:ResetPasswordProps) => {
    const [passWordVisible, setPassWordVisible] = useState<boolean>(false)

    const [formData, setFormData] = useState({
        email: email,
        newPassword:''
    })
    const { newPassword } = formData

    const dispatch = useAppDispatch()

    const { user, isLoading, isResetPasswordSuccess, isError, message } = useAppSelector((state) => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if(isResetPasswordSuccess) {
            toast.success('password reset successful');
            openPasswordChangeSuccessModal()
        }
        dispatch(reset())
    }, [user, isError, isResetPasswordSuccess, message, dispatch, openPasswordChangeSuccessModal])


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleForgot = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email || !newPassword) {
            toast.error('please enter new password')
        } else {
            const userData = {
                email,
                newPassword
            }
            dispatch(resetPassword(userData))  
        }
    }
    const togglePassWordVisibility = () => {
        setPassWordVisible(!passWordVisible)
    }

    return (
        <div className="bg-white px-4 py-4 h-full">
            <div className="flex flex-col gap-2 mb-3">
                <img src={LogoImage} alt="logoImg" width={20} height={20} />
                <h2 className="text-black-500 text-xl">Set password</h2>
                <p className="text-gray-500 text-sm">Enter a new secure password</p>
            </div>
            <form onSubmit={handleForgot} className="h-[55vh] overflow-y-scroll hide-scrollbar">
                <div className="flex flex-col gap-2 mb-3">
                    <label htmlFor="email" className="text-sm text-gray-400">
                        Email
                    </label>
                    <input
                        type="text"
                        name="email"
                        readOnly
                        value={formData.email}
                        // style={{ display: 'none' }}
                        className="px-4 py-2 border border-gray-600 rounded-lg outline-none"
                    />
                </div>
                <div className="flex flex-col gap-2 mb-3">
                    <label htmlFor="password" className="text-sm text-gray-400">
                        Password
                    </label>
                    <div className="relative w-full">
                        <input
                            type={passWordVisible ? 'text' : 'password'}
                            name="newPassword"
                            value={newPassword}
                            onChange={onChange}
                            className="w-full px-4 py-2 border border-gray-600 rounded-lg outline-none"
                        />
                        <Button type="button" className="flex justify-center items-center absolute top-2 left-[320px]  text-gray-800" onClick={togglePassWordVisibility}>
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