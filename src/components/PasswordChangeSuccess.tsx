import LogoImage from '../assets/lanepact-logo.png'
import Button from './Button'

type PasswordChangeProps = {
    openLoginModal:() => void
}

const PasswordChangeSuccess = ({ openLoginModal}: PasswordChangeProps) => {

    const handleLoginClick = () => {
        return openLoginModal()
    };

    return (
        <div className="bg-white px-4 py-6 h-[60vh] -mt-[150px] relative z-50">
            <div className="flex flex-col gap-2 mb-4 mt-[140px]">
                <img src={LogoImage} alt="logoImg" width={20} height={20} />
                <h2 className="text-black-500 text-xl">Password changed</h2>
                <p className="text-gray-500 text-sm"> Log in with your new password</p>
            </div>
            <div>
                <Button
                    className='px-4 py-2 w-full text-white rounded-lg text-md custom-bg'
                    type='button'
                    onClick={handleLoginClick}
                >
                    Login
                </Button>
            </div>
        </div>
    )
}

export default PasswordChangeSuccess