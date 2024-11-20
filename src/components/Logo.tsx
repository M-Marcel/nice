import LogoImg from '../assets/logo.png'
import LogoText from '../assets/logotext.png'

const Logo = () => {
    return (
        <div className='flex items-center gap-2'>
            <img src={LogoImg} alt="logo" width={30} height={30} />
            <img src={LogoText} alt="logo" width={80} height={80} />
        </div>
    )
}

export default Logo