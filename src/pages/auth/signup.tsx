import LogoImage from '../../assets/logo.png'
import Google from '../../assets/Google.png'
import Microsoft from '../../assets/Microsoft.png'
import Github from '../../assets/GitHub.png'
import { useEffect, useState } from 'react'
import { SignUpFormData } from '../../dataTypes'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { toast } from 'react-toastify'
import { register, reset } from '../../slices/auth/authSlice'
import SubmitButton from '../../components/SubmitButton'

const SignUp = () => {

    const [formData, setFormData] = useState<SignUpFormData>({
        firstName: '',
        lastName: '',
        email: '',
    })

    const { firstName, lastName, email } = formData

    const dispatch = useAppDispatch();
    const { user, isLoading, isSuccess, isError, message } = useAppSelector((state) => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (isSuccess) {
            toast.success('A verification link has been sent to your email.'); // Display success message as toast
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, dispatch])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleContinue = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!firstName || !lastName || !email) {
            toast.error('please fill in the fields')
        } else {
            const userData = {
                firstName,
                lastName,
                email
            }
            dispatch(register(userData))

        }

    }


    return (
        <div className="bg-white px-4 py-4 h-full">
            <div className="flex flex-col gap-2 mb-3">
                <img src={LogoImage} alt="logoImg" width={20} height={20} />
                <h2 className="text-black-500 text-xl mt-4">Sign up</h2>
                <p className="text-gray-500 text-sm mb-3">What is your email address</p>
            </div>
            <form onSubmit={handleContinue} className="h-[55vh] overflow-y-scroll hide-scrollbar">
                <div className="flex flex-col gap-2">
                    <label htmlFor="firstName" className="text-sm text-gray-400">
                        Firstname
                    </label>
                    <input
                        type="text"
                        value={firstName}
                        name="firstName"
                        onChange={onChange}
                        className="px-4 py-2 border border-gray-600 rounded-lg outline-none"

                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="lastName" className="text-sm text-gray-400">
                        Lastname
                    </label>
                    <input
                        type="text"
                        value={lastName}
                        name="lastName"
                        onChange={onChange}
                        className="px-4 py-2 border border-gray-600 rounded-lg outline-none"
                    />
                </div>
                <div className="flex flex-col gap-2 mb-3">
                    <label htmlFor="email" className="text-sm text-gray-400">
                        Email
                    </label>
                    <input
                        type="text"
                        value={email}
                        name="email"
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

                <div className="flex justify-center items-center">
                    <p className="text-gray-400 mt-3 text-sm">or continue with</p>
                </div>
                <div className="flex justify-center items-center gap-2 mt-4">
                    <div className="flex justify-between gap-8">
                        <a href="/" className="rounded-lg px-8 py-2 border border-gray-600">
                            <img src={Google} alt="google" width={30} height={30} />
                        </a>
                        <a href="/" className="rounded-lg px-8 py-2 border border-gray-600">
                            <img src={Microsoft} alt="microsoft" width={30} height={30} />
                        </a>
                        <a href="/" className="rounded-lg px-8 py-2 border border-gray-600">
                            <img src={Github} alt="github" width={30} height={30} />
                        </a>
                    </div>
                </div>
                <div className='flex justify-center items-center mt-6'>
                    <div className='flex items-center text-center gap-1'>
                        <p className='text-sm text-gray-400'>Already have an account?</p>
                        <a className='text-black-500 font-semibold text-sm' href="/">Login</a>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default SignUp