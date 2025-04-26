import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import AdminMoreIcon from "./../assets/svg/admin/moreIcon";
import clsx from "clsx";
import { Fragment } from 'react';
import ViewPortfolio from "./../assets/angrlerighty.png";
import CopyUrl from "./../assets/copyport.png";
import DeletePortfolio from "./../assets/deleteport.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


interface MoreProps {
    portfolioId: string;
    portfolioName?: string;
    portfolioUrl?: string;
    onDeleteClick: (id: string, name: string) => void;
}

const More = ({ portfolioId, portfolioName, portfolioUrl,onDeleteClick }: MoreProps) => {
    const navigate = useNavigate();
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyLink = async () => {
        if (!portfolioUrl) return;

        try {
            await navigator.clipboard.writeText(portfolioUrl);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text');
        }
    };

    const links = [
        {
            label: 'Open Portfolio',
            img: ViewPortfolio,
            action: () => navigate(`/portfolio/display/${portfolioId}`)
        },
        {
            label: isCopied ? 'Copied!' : 'Copy Link',
            img: CopyUrl,
            action: handleCopyLink,
            disabled: !portfolioUrl
        },
        {
            label: 'Delete',
            img: DeletePortfolio,
            action: () => onDeleteClick(portfolioId, portfolioName || '')
        },
    ];

    return (
        <>
            <Menu>
                <MenuButton as={Fragment}>
                    {({ active }) => (
                         <button className={clsx(
                            'hover:bg-gray-600 p-1 rounded-full transition-colors duration-200',
                            active && ''
                          )}>
                            <AdminMoreIcon />
                          </button>
                    )}
                </MenuButton>
                <MenuItems className="absolute bg-white w-[120px] p-1 border-none shadow-lg rounded-md mt-2 right-0 z-50">
                    {links.map((link) => (
                        <MenuItem key={link.label} as={Fragment}>
                            {({ focus }) => (
                                <button
                                    onClick={link.action}
                                    disabled={link.disabled}
                                    className={clsx(
                                        'text-xs text-black-960 mb-2 flex items-center justify-between w-full px-2 py-1 text-left',
                                        focus && 'bg-gray-600',
                                        link.disabled && 'opacity-50 cursor-not-allowed'
                                    )}
                                >
                                    {link.label}
                                    <img src={link.img} alt="icon" width={10} />
                                </button>
                            )}
                        </MenuItem>
                    ))}
                </MenuItems>
            </Menu>
            
        </>
    );
};

export default More;