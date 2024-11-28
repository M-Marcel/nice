import LogoImg from '../assets/logo.png'


const LogoDrag = () => {
    return (
        <div className='flex items-center gap-2'>
            <img src={LogoImg} alt="logo" width={30} height={30} />
            <p className='border w-60 border-blue-200 rounded-lg px-2 py-1 text-sm mx-3' >Untitled app</p>
        </div>
    )
}

export default LogoDrag