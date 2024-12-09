import LogoImage from '../../assets/lanepact-logo.png'
import { useEffect, useState } from 'react'
import SubmitButton from '../../components/SubmitButton'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { toast } from 'react-toastify'
import { forgotPassword, reset } from '../../slices/auth/authSlice'


type ForgotPasswordProps = {
    openValidateOtpModal: () => void
    setEmail: React.Dispatch<React.SetStateAction<string>>;
}

const ForgotPassword = ({ openValidateOtpModal, setEmail }: ForgotPasswordProps) => {
    const [formData, setFormData] = useState({
        email: '',
    })
    const { email } = formData

    const dispatch = useAppDispatch()

    const { isLoading, isForgotPasswordSuccess, message } = useAppSelector((state) => state.auth)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleForgot = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email) {
            return toast.error('please provide your email')
        } else {
            const userData = {
                email,
            }
            dispatch(forgotPassword(userData))
        }
    }

    useEffect(() => {
        if (isForgotPasswordSuccess) {
            toast.success('an OTP has been sent to your mail');
            setEmail(email)
            openValidateOtpModal()
        }
        return () => {
            dispatch(reset())
        }

    }, [isForgotPasswordSuccess, message, dispatch, email, setEmail, openValidateOtpModal])

    return (
        <div className="bg-white px-4 py-4 h-full">
            <div className="flex flex-col gap-2 mb-3">
                <img src={LogoImage} alt="logoImg" width={20} height={20} />
                <h2 className="text-black-500 text-xl">Reset password</h2>
                <p className="text-gray-500 text-sm">Enter your email address to change your password</p>
            </div>
            <form onSubmit={handleForgot} className="h-[55vh] overflow-y-scroll hide-scrollbar">
                <div className="flex flex-col gap-2 mb-3">
                    <label htmlFor="email" className="text-sm text-gray-400">
                        Email
                    </label>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={onChange}
                        className="px-4 py-2 border border-gray-600 rounded-lg outline-none"
                    />
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

export default ForgotPassword