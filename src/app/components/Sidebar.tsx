"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { CgArrowsMergeAltH } from "react-icons/cg";
import { BsPlugin } from "react-icons/bs";
import { TbArrowsExchange2 } from "react-icons/tb";
import { IoMdLink } from "react-icons/io";
import { MdOutlineTimer } from "react-icons/md";
import { SlSettings } from "react-icons/sl";
import { VscTools } from "react-icons/vsc";
import { AiOutlineRead } from "react-icons/ai";
import { IconType } from "react-icons";

export interface NavigationItem {
    path: string;
    label: string;
    icon: IconType;
    children?: NavigationItem[];
}

export type SidebarItemProps = {
    item: NavigationItem;
    isActive: boolean;
}

export const sidebarItems = [
    {
        path: '/dashboard',
        label: 'Odds Screen',
        icon: MdOutlineSpaceDashboard
    },
    {
        path: '/arbitrages',
        label: 'Arbitrages',
        icon: AiOutlineDollarCircle
    },
    {
        path: '/middles',
        label: 'Middles',
        icon: CgArrowsMergeAltH
    },
    {
        path: '/ev-plus',
        label: 'EV+',
        icon: BsPlugin
    },
    {
        path: '/converter',
        label: 'Bonus Bet Converter',
        icon: TbArrowsExchange2
    },
    {
        path: '/hold',
        label: 'Low Hold',
        icon: VscTools
    },
    {
        path: '/tracker',
        label: 'Bet Tracker',
        icon: MdOutlineTimer
    },
    {
        path: '/tools',
        label: 'Tools',
        icon: VscTools
    },
    {
        path: '/learn',
        label: 'Betting IQ',
        icon: AiOutlineRead
    },
    {
        path: '/settings',
        label: 'Settings',
        icon: SlSettings
    },
];

function Sidebar() {
    const pathname = usePathname();

    const isActiveRoute = (itemPath: string): boolean => {
        if (itemPath === '/dashboard' && pathname === '/') return true;
        return pathname === itemPath || pathname?.startsWith(`${itemPath}/`);
    };

    return (
        <main className='hidden lg:block min-w-[250px] border-r-2 border-[--gray] py-2 overflow-auto no-scrollbar'>
            <div className="flex flex-col justify-between items-center">
                {sidebarItems.map((item) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        className='sidebar-link hover:bg-[--hover-gray] w-full'
                    >
                        <item.icon
                            className={`
                                text-[23px]
                                ${isActiveRoute(item.path)
                                    ? 'active-sidebar-link'
                                    : 'text-[--dark-white]'}
                            `}
                        />
                        <h1
                            className={`
                                text-[16px]
                                ${isActiveRoute(item.path)
                                    ? 'active-sidebar-link'
                                    : 'text-[--dark-white]'}
                            `}
                        >
                            {item.label}
                        </h1>
                    </Link>
                ))}
            </div>
        </main>
    )
}
export default Sidebar
