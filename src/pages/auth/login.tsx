import LogoImage from '../../assets/lanepact-logo.png'
import Button from '../../components/Button'
import Google from '../../assets/Google.png'
// import Microsoft from '../../assets/Microsoft.png'
// import Github from '../../assets/GitHub.png'
import { useEffect, useState } from 'react'
import { enablePageScroll } from "scroll-lock"
import OpenEye from '../../assets/svg/OpenEye'
import CloseEye from '../../assets/svg/CloseEye'
import SubmitButton from '../../components/SubmitButton'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { toast } from 'react-toastify'
import { login, reset } from '../../slices/auth/authSlice'
import { useNavigate } from 'react-router-dom'

// const getApiConfig = () => {
//     const env = process.env.REACT_APP_ENV || 'development';
    
//     const apiConfig = {
//       development: {
//         baseUrl: "https://apijhnvuokjgsbgyerbfgdev.lanepact.com",
//       },
//       staging: {
//         baseUrl: "https://apidhykngtwistaging.lanepact.com",
//       },
//       production: {
//         baseUrl: "https://coreapi.lanepact.com",
//       }
//     };
  
//     return apiConfig[env as keyof typeof apiConfig];
//   };
  
//   const { baseUrl } = getApiConfig();

  const baseUrl = process.env.REACT_APP_BASEURL
  
  const GOOGLE_URL = `${baseUrl}/api/v1/auth/google`;

type LoginProps = {
    openForgotPasswordModal: () => void;
    openSignUpModal: () => void;
    openTelegramModal: () => void
}

const Login = ({ openForgotPasswordModal, openSignUpModal, openTelegramModal }: LoginProps) => {
    const navigate = useNavigate()

    const [passWordVisible, setPassWordVisible] = useState<boolean>(false)

    const togglePassWordVisibility = () => {
        setPassWordVisible(!passWordVisible)
    }

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const { email, password } = formData

    const dispatch = useAppDispatch()

    const { isLoading, isLoginSuccess, message } = useAppSelector((state) => state.auth)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email || !password) {
            return toast.error('please fill in the fields')
        } else {
            const userData = {
                email,
                password
            }
            dispatch(login(userData))
        }
    }

    const handleGoogleSignIn = () => {
        const googleAuthUrl = `${GOOGLE_URL}`
        window.location.href = googleAuthUrl;
        
    };

    useEffect(() => {
        if (isLoginSuccess) {
            navigate('/dashboard')
            openTelegramModal()
            enablePageScroll()
        }

        return () => {
            dispatch(reset())
        }
    }, [isLoginSuccess, message, dispatch, openTelegramModal, navigate])



    return (
        <div className="bg-white px-4 py-4 h-full mx-4 lg:mx-0">
            <div className="flex flex-col gap-2 mb-3">
                <img src={LogoImage} alt="logoImg" width={20} height={20} />
                <h2 className="text-black-500 text-xl">What’s your email?</h2>
                <p className="text-gray-500 text-sm">Enter your email address</p>
            </div>
            <form onSubmit={onSubmit} className="h-auto lg:h-[40vh] overflow-y-scroll hide-scrollbar">
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
                <div className="flex flex-col gap-2 mb-3">
                    <label htmlFor="password" className="text-sm text-gray-400">
                        Password
                    </label>
                    <div className="relative w-full">
                        <input
                            type={passWordVisible ? 'text' : 'password'}
                            name="password"
                            value={password}
                            onChange={onChange}
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
                <div className="flex justify-between mb-3">
                    <div className="flex items-center gap-2">
                        <input type="checkbox" />
                        <span className="text-black-500 text-sm">Remember me</span>
                    </div>
                    <Button
                        type='button'
                        className="text-black-500 text-sm cursor-pointer"
                        onClick={openForgotPasswordModal}
                    >
                        Forgot password?
                    </Button>
                </div>
                <SubmitButton
                    isLoading={isLoading}
                    className={`px-4 py-2 w-full text-white mt-3 mb-3 rounded-lg text-md ${isLoading ? 'bg-blue-100/55' : 'custom-bg'
                        }`}
                >
                    Login
                </SubmitButton>
                {/* <div className="flex justify-center items-center">
                    <p className="text-gray-400 mt-2 text-sm">or login with</p>
                </div> */}

            </form>
            <div className="flex flex-col gap-2 mt-4">
                <div className="flex items-center gap-8">
                    <Button
                        onClick={handleGoogleSignIn}
                        className="w-full flex items-center justify-center rounded-lg px-8 py-2 border border-gray-600"
                    >
                        <img src={Google} alt="google" width={30} height={30} />
                        <span>Google</span>
                    </Button>
                    {/* <a href="/" className="rounded-lg px-8 py-2 border border-gray-600">
                            <img src={Microsoft} alt="microsoft" width={30} height={30} />
                        </a>
                        <a href="/" className="rounded-lg px-8 py-2 border border-gray-600">
                            <img src={Github} alt="github" width={30} height={30} />
                        </a> */}
                </div>
            </div>
            <div className='flex justify-center items-center mt-2'>
                <div className='flex items-center text-center gap-1'>
                    <p className='text-sm text-gray-400'>Don't have an account?</p>
                    <Button
                        className='text-black-500 font-semibold text-sm'
                        onClick={openSignUpModal}
                    >
                        Signup
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Login