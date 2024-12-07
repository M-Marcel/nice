import { useEffect, useState } from 'react'
import { navigation } from '../constants'
import Button from './Button'
import MenuSvg from '../assets/svg/MenuSvg'
import { useLocation } from 'react-router-dom'
import { disablePageScroll, enablePageScroll } from "scroll-lock"
import Logo from './Logo'


type HeaderProps = {
    openSignUpModal: () => void;
    openLoginModal: () => void
}

const Header = ({ openSignUpModal, openLoginModal }: HeaderProps) => {

    const pathname = useLocation()
    const [openNavigation, setOpenNavigation] = useState<boolean>(false)
    const [scrolled, setScrolled] = useState<boolean>(false);

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false)
            enablePageScroll()
        } else {
            setOpenNavigation(true)
            disablePageScroll()
        }
    }

    const handleClick = () => {
        if (!openNavigation) return
        enablePageScroll()
        setOpenNavigation(false)
    }
    const handleMobileLoginOpenModal = () =>{
        setOpenNavigation(false)
        return openLoginModal()
   }

    const handleMobileRegisterModal = () =>{
         setOpenNavigation(false)
         return openSignUpModal()
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`fixed header top-5 left-0 w-full z-50 transition-all duration-1000 ${scrolled ? 'bg-white shadow-lg top-[0px]' : 'bg-transparent'}`}>
            <div className="flex items-center justify-between px-5 lg:px-7.5
            xl:px-10 py-4 max-lg:py-4">
                <a href="/">
                    <Logo />
                </a>
                <nav className='fixed top-[7rem] left-0 right-0
                bottom-0 lg:static lg:mx-auto lg:bg-white rounded-full
                '>
                    <div className={`${openNavigation ? 'flex' : 'hidden'} flex-col items-center lg:flex lg:flex-row gap-4
                    bg-white w-full px-3 py-2 rounded-full text-xs lg:text-sm`}>
                        {navigation.map((item) => (
                            <a key={item.id} href={item.url} onClick={handleClick}
                                className={`block relative transition-colors
                                hover:bg-black-100 hover:rounded-full hover:text-black-200 px-3 py-2
                                ${item.url === pathname.pathname ? 'z-2 lg:text-black-200' : 'lg:text-black-200/55'}`}>
                                {item.title}
                            </a>
                        ))}
                        <div className='flex flex-col lg:hidden'>
                            <Button
                                className="mb-6 px-3 py-2 custom-l-bg backdrop-blur-md rounded-md lg:flex"
                                onClick={handleMobileLoginOpenModal}
                            >
                                Login
                            </Button>
                            <Button
                                className="px-3 py-2 rounded-md lg:flex custom-bg text-white"
                                onClick={handleMobileRegisterModal}
                            >
                                Join Beta
                            </Button>
                        </div>
                    </div>

                </nav>
                <div className='flex gap-3'>
                    <Button
                        className="hidden px-3 py-2 custom-l-bg backdrop-blur-md rounded-md lg:flex"
                        onClick={openLoginModal}
                    >
                        Login
                    </Button>
                    <Button
                        className="hidden px-3 py-2 rounded-md lg:flex custom-bg text-white"
                        onClick={openSignUpModal}
                    >
                        Join Beta
                    </Button>
                </div>
                <Button onClick={toggleNavigation} className="button ml-auto lg:hidden">
                    <MenuSvg openNavigation={openNavigation} scrolled={scrolled} />
                </Button>

            </div>
        </div>
    )
}

export default Header
