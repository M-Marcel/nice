import LogoImg from '../assets/logo.png'


const LogoIcon = () => {
    return (
        <div className='flex items-center gap-2'>
            <img src={LogoImg} alt="logo" width={30} height={30} />
            
        </div>
    )
}

export default LogoIcon;