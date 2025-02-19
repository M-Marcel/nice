import Logo from '../assets/lanepact-logo.png'
import LogoText from '../assets/lanepact-logo-text.png'

const Footer = () => {
    return (
        <div className="footer relative bottom-[0]">
            <div className='lg:mx-auto  py-8 px-6 lg:px-12'>
                <div className='flex items-center gap-2'>
                    <img src={Logo} alt="logo" width={20} height={20} />
                    <img src={LogoText} alt="logo" width={80} height={80} />
                </div>
                <div className='flex flex-col lg:flex-row justify-between mt-4 pb-8'>
                    <div className='mb-4 lg:mb-0'>
                        <a className='text-gray-300 text-sm' href="/">info@lanepact.com</a>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between gap-4'>
                        <a href="/" className='text-gray-300 text-sm'>Home</a>
                        <a href="/community" className='text-gray-300 text-sm'>Community</a>
                        <a href="/request-a-feature" className='text-gray-300 text-sm'>Request a feature</a>
                        <a href="/privacy" className='text-gray-300 text-sm'>Privacy policy</a>
                        <a href="/terms" className='text-gray-300 text-sm'>Terms of service</a>
                    </div>
                </div>
                <hr className='border border-gray-300/40' />
                <div className='mt-8'>
                    <p className='text-gray-300 text-sm'>©2024 Lanepact. All rights reserved.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Footer