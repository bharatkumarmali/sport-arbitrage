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

function Sidebar() {
    const pathname = usePathname();

    return (
        <main className='hidden lg:block min-w-[250px] border-r-2 border-[--gray] py-2 overflow-auto no-scrollbar'>
            <div className="flex flex-col justify-between items-center">
                <Link href="/dashboard" className='sidebar-link'>
                    <MdOutlineSpaceDashboard
                        className={`
                            text-[23px]
                            ${pathname === '/dashboard'
                                ? 'active-sidebar-link'
                                : 'text-[--dark-white]'}
                        `}
                    />
                    <h1
                        className={`
                            text-[16px]
                            ${pathname === '/dashboard'
                                ? 'active-sidebar-link'
                                : 'text-[--dark-white]'}
                        `}
                    >
                        Odds Screen
                    </h1>
                </Link>


                <Link
                    href="/arbitrages"
                    className={`sidebar-link ${pathname === '/arbitrages' ? 'active-sidebar-link' : ''}`}
                >
                    <AiOutlineDollarCircle
                        className={`
                                text-[23px]
                                ${pathname === '/arbitrages'
                                ? 'active-sidebar-link'
                                : 'text-[--dark-white]'}
                            `}
                    />
                    <h1
                        className={`
                            text-[16px]
                            ${pathname === '/arbitrages'
                                ? 'active-sidebar-link'
                                : 'text-[--dark-white]'}
                        `}
                    >
                        Arbitrages
                    </h1>
                </Link>



                <div className='sidebar-link'>
                    <CgArrowsMergeAltH
                        className={`
                            text-[23px]
                            ${pathname === '/Middles'
                                ? 'active-sidebar-link'
                                : 'text-[--dark-white]'}
                        `}
                    />
                    <h1
                        className={`
                            text-[16px]
                            ${pathname === '/Middles'
                                ? 'active-sidebar-link'
                                : 'text-[--dark-white]'}
                        `}
                    >
                        Middles
                    </h1>
                </div>


                <div className='sidebar-link'>
                    <BsPlugin
                        className={`
                            text-[23px]
                            ${pathname === '/EV+'
                                ? 'active-sidebar-link'
                                : 'text-[--dark-white]'}
                        `}
                    />
                    <h1
                        className={`
                            text-[16px]
                            ${pathname === '/EV+'
                                ? 'active-sidebar-link'
                                : 'text-[--dark-white]'}
                        `}
                    >
                        EV+
                    </h1>
                </div>


                <div className={`sidebar-link`}>
                    <TbArrowsExchange2
                        className={`
                            text-[23px]
                            ${pathname === '/Converter'
                                ? 'active-sidebar-link'
                                : 'text-[--dark-white]'}
                        `}
                    />
                    <h1
                        className={`
                            text-[16px]
                            ${pathname === '/Converter'
                                ? 'active-sidebar-link'
                                : 'text-[--dark-white]'}
                        `}
                    >
                        Bonus Bet Converter
                    </h1>
                </div>


                <div className={`sidebar-link`}>
                    <IoMdLink
                        className={`
                            text-[23px]
                            ${pathname === '/Hold'
                                ? 'active-sidebar-link'
                                : 'text-[--dark-white]'}
                        `}
                    />
                    <h1
                        className={`
                            text-[16px]
                            ${pathname === '/Hold'
                                ? 'active-sidebar-link'
                                : 'text-[--dark-white]'}
                        `}
                    >
                        Low Hold
                    </h1>
                </div>


                <div className={`sidebar-link`}>
                    <MdOutlineTimer
                        className={`
                            text-[23px]
                            ${pathname === '/Tracker'
                                ? 'active-sidebar-link'
                                : 'text-[--dark-white]'}
                        `}
                    />
                    <h1
                        className={`
                            text-[16px]
                            ${pathname === '/Tracker'
                                ? 'active-sidebar-link'
                                : 'text-[--dark-white]'}
                        `}
                    >
                        Bet Tracker
                    </h1>
                </div>


                <div className={`sidebar-link`}>
                    <VscTools
                        className={`
                            text-[23px]
                            ${pathname === '/Tools'
                                ? 'active-sidebar-link'
                                : 'text-[--dark-white]'}
                        `}
                    />
                    <h1
                        className={`
                            text-[16px]
                            ${pathname === '/Tools'
                                ? 'active-sidebar-link'
                                : 'text-[--dark-white]'}
                        `}
                    >
                        Tools
                    </h1>
                </div>


                <div className={`sidebar-link`}>
                    <AiOutlineRead
                        className={`
                            text-[23px]
                            ${pathname === '/Learn'
                                ? 'active-sidebar-link'
                                : 'text-[--dark-white]'}
                        `}
                    />
                    <h1
                        className={`
                            text-[16px]
                            ${pathname === '/Learn'
                                ? 'active-sidebar-link'
                                : 'text-[--dark-white]'}
                        `}
                    >
                        Betting IQ
                    </h1>
                </div>


                <Link href="/setting" className={`sidebar-link`} >
                    <SlSettings
                        className={`
                                text-[23px] 
                                ${pathname === '/setting'
                                ? 'active-sidebar-link'
                                : 'text-[--dark-white]'}
                            `}
                    />
                    <h1
                        className={`
                                text-[16px]
                                 ${pathname === '/setting'
                                ? 'active-sidebar-link'
                                : 'text-[--dark-white]'}
                             `}
                    >
                        Settings
                    </h1>
                </Link>
            </div>
        </main>
    )
}

export default Sidebar