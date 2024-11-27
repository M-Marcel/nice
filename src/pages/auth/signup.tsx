import LogoImage from '../../assets/logo.png'
import Button from '../../components/Button'
import Google from '../../assets/Google.png'
import Microsoft from '../../assets/Microsoft.png'
import Github from '../../assets/GitHub.png'
import { useNavigate } from 'react-router-dom'



const SignUp = () => {
    const navigate = useNavigate()
   

    const handleContinue = () => {
        navigate('/let-us-know-you')
    }
    

    return (
        <div className="bg-white px-4 py-4 h-full">
            <div className="flex flex-col gap-2 mb-3">
                <img src={LogoImage} alt="logoImg" width={20} height={20} />
                <h2 className="text-black-500 text-xl mt-4">Sign up</h2>
                <p className="text-gray-500 text-sm mb-3">What is your email address</p>
            </div>
            <form className="h-[55vh] overflow-y-scroll hide-scrollbar">
                <div className="flex flex-col gap-2">
                    <label htmlFor="fullName" className="text-sm text-gray-400">
                        Full Name
                    </label>
                    <input
                        type="text"
                        className="px-4 py-2 border border-gray-600 rounded-lg outline-none"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm text-gray-400">
                        Email
                    </label>
                    <input
                        type="text"
                        className="px-4 py-2 border border-gray-600 rounded-lg outline-none"
                    />
                </div>

                <Button onClick={handleContinue} className="mt-4 custom-bg w-full text-white px-4 py-2 rounded-lg text-md font-semibold">Continue</Button>
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