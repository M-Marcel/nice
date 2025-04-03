import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import AdminMoreIcon from "../../assets/svg/admin/moreIcon";
import clsx from "clsx";
import { Fragment } from 'react'
import ViewProfileIcon from "../../assets/viewprofile.png"
import SendMailIcon from "../../assets/sendmail.png"
import SuspendIcon from "../../assets/suspend.png"

const UserMore = () => {
    const links = [
        { href: '/settings', label: 'View Profile', img: ViewProfileIcon },
        { href: '/support', label: 'Send mail', img: SendMailIcon },
        { href: '/license', label: 'Suspend User', img: SuspendIcon },
    ]
    return (
        <Menu>
            <MenuButton as={Fragment}>
                {({ active }) => <button className={clsx(active && '')}>
                    <AdminMoreIcon />
                </button>}
            </MenuButton>
            <MenuItems className="absolute bg-white w-[120px]  p-1 border-none shadow-lg rounded-md mt-2 ">
                {links.map((link) => (
                    <MenuItem key={link.href} as={Fragment}>
                        {({ focus }) => (
                            <a className={clsx('text-xs text-black-960 mb-2 flex items-center justify-between', focus && 'bg-blue-100')} href={link.href}>
                                {link.label}
                                <img src={link.img} alt="icon" width={10} />
                            </a>
                        )}
                    </MenuItem>
                ))}
            </MenuItems>
        </Menu>
    )
}

export default UserMore;