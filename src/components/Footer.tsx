import Logo from '../assets/logo.png'
import LogoText from '../assets/logotext.png'

const Footer = () => {
    return (
        <div className="footer relative bottom-[0]">
            <div className='mx-auto lg:mx-12 py-8 px-12'>
                <div className='flex items-center gap-2'>
                    <img src={Logo} alt="logo" width={20} height={20} />
                    <img src={LogoText} alt="logo" width={80} height={80} />
                </div>
                <div className='flex flex-col lg:flex-row justify-between mt-4 pb-8'>
                    <div>
                        <a className='text-gray-300 text-sm' href="/">info@zroleaks.io</a>
                    </div>
                    <div className='flex justify-between gap-4'>
                        <a href="/" className='text-gray-300 text-sm'>Features</a>
                        <a href="/" className='text-gray-300 text-sm'>Community</a>
                        <a href="/" className='text-gray-300 text-sm'>Integration</a>
                        <a href="/" className='text-gray-300 text-sm'>Pricing</a>
                    </div>
                </div>
                <hr className='border border-gray-300/40' />
                <div className='mt-8'>
                    <p className='text-gray-300 text-sm'>©2024 Zroleak. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer