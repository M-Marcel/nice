import { useState } from 'react'
import { navigation } from '../constants'
import Button from './Button'
import MenuSvg from '../assets/svg/MenuSvg'
import { useLocation } from 'react-router-dom'
import { disablePageScroll, enablePageScroll } from "scroll-lock"
import Logo from './Logo'


type HeaderProps = {
    showModal: boolean
    showModal2: boolean
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
    setShowModal2: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({ showModal, setShowModal, showModal2, setShowModal2 }: HeaderProps) => {

    const pathname = useLocation()
    const [openNavigation, setOpenNavigation] = useState<boolean>(false)

    const toggleNavigation = () => {
        if(openNavigation) {
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

    return (
        <div className={`fixed top-5 left-0 w-full z-50`}>
            <div className="flex items-center justify-between px-5 lg:px-7.5
            xl:px-10 py-4 max-lg:py-4">
                <a href="/">
                    <Logo />
                </a>
                <nav className='fixed top-[7rem] left-0 right-0
                bottom-0 lg:static lg:mx-auto lg:bg-white rounded-full
                '>
                    <div className={`${openNavigation ? 'flex' : 'hidden'} flex-col items-center lg:flex lg:flex-row gap-4
                    bg-white px-3 py-2 rounded-full`}>
                        {navigation.map((item) => (
                            <a key={item.id} href={item.url} onClick={handleClick}
                                className={`block relative transition-colors
                                hover:bg-black-100 hover:rounded-full hover:text-black-200 px-3 py-2 ${item.onlyMobile ? 'lg:hidden' : ''}
                                ${item.url === pathname.pathname ? 'z-2 lg:text-black-200' : 'lg:text-black-200/55'}`}>
                                {item.title}
                            </a>
                        ))}
                    </div>
                </nav>
                <div className='flex gap-3'>
                    <Button
                        className="hidden px-3 py-2 rounded-md lg:flex custom-bg text-white"
                        onClick={() => setShowModal(true)}
                    >
                        Try it
                    </Button>
                    <Button
                        className="hidden px-3 py-2 bg-white  backdrop-blur-md rounded-md lg:flex"
                        onClick={() => setShowModal2(true)}
                    >
                        Login
                    </Button>
                </div>
                <Button onClick={toggleNavigation} className="button ml-auto lg:hidden">
                    <MenuSvg openNavigation={openNavigation} />
                </Button>

            </div>
        </div>
    )
}

export default Header