
import { useState } from 'react'
import LogoImage from '../../../assets/lanepact-logo.png'
// import SubmitButton from '../../../components/SubmitButton'
import Button from '../../../components/Button'
// import { useAppDispatch } from '../../../hooks'
import OpenEye from '../../../assets/svg/OpenEye'
import CloseEye from '../../../assets/svg/CloseEye'

const AdminLogin = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const { email, password } = formData

    const [passWordVisible, setPassWordVisible] = useState<boolean>(false)

    const togglePassWordVisibility = () => {
        setPassWordVisible(!passWordVisible)
    }

    // const dispatch = useAppDispatch()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    return (

        <div>
            <div className="flex justify-center items-center h-[100vh]">
                <div className="bg-white w-[30%] h-[60vh]">
                    <div className="bg-white px-4 py-4 h-full mx-4 lg:mx-0">
                        <div className="flex flex-col gap-2 mb-3 text-center">
                            <div className='flex justify-center'>
                                <img src={LogoImage} alt="logoImg" width={20} height={20} />
                            </div>                       
                            <h2 className="text-black-500 text-xl">Welcome back</h2>
                            <p className="text-gray-500 text-sm">Enter your email and password</p>
                        </div>
                        <form className="h-auto lg:h-[60vh] overflow-y-scroll hide-scrollbar">
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

                                >
                                    Forgot password?
                                </Button>
                            </div>
                            <Button
                                className='text-white mt-4 rounded-2xl font-semibold custom-bg py-4 text-sm w-full'

                            >
                                Login
                            </Button>
                          
                        </form>
                                              
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AdminLogin