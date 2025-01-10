"use client"
import SelectElement from '@/app/components/SelectElement'
import SidebarContainer from '@/app/components/SidebarContainer'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function page() {


    const { theme, setTheme } = useTheme();


    const USA = [
        {
            id: 1,
            option: 'USA'
        },
        {
            id: 2,
            option: 'Canada'
        },
        {
            id: 3,
            option: 'Others'
        }
    ]

    const Canada = [
        {
            id: 1,
            option: 'Canada'
        },
        {
            id: 2,
            option: 'USA'
        },
        {
            id: 3,
            option: 'Others'
        }
    ]

    const language = [
        {
            id: 1,
            option: 'English'
        },
        {
            id: 2,
            option: 'French'
        },
    ]

    const pathname = usePathname();
    console.log(pathname);

    return (
        // <SidebarContainer>
            <div className='flex flex-col mt-5'>
                <div className='bgblack border border-[#929292] rounded-[8px] w-full p-[29px] space-y-3'>
                    <div className='flex items-end justify-between'>
                        <div>
                            <h1 className='font-Jaro text-[30px] text-[--white]'>
                                Sitewide sportbook selection
                            </h1>
                            <p className='text-[--gray-sm-text] text-sm'>
                                Limit which books show up sitewide and set the order in which they appear.Learn more...
                            </p>
                        </div>

                        <div className="bookmark w-[400px] pt-[7px] pb-[8px] ps-[14px] rounded-[4px] flex items-center gap-3 cursor-pointer">
                            <img
                                src="/images/bookmark-icon.png"
                                alt="bookmark"
                                className='w-[15px] h-[18px] filter'
                            />
                            <p className='text-sm'>
                                Select/Order SportsBooks SiteWide
                            </p>
                        </div>
                    </div>

                    <div className='h-[1px] w-full bg-[#929292]'></div>

                    <div className='flex items-start justify-between'>
                        <div>
                            <h1 className='font-Jaro text-[30px] text-[--white]'>
                                Location
                            </h1>
                            <p className='text-[--gray-sm-text] text-sm'>
                                Ensures quick links on bets take you to the correct sportsbook pages.Learn more...
                            </p>
                        </div>

                        <div className='flex gap-3'>
                            <SelectElement option={USA} />
                            <SelectElement option={Canada} />
                            <SelectElement option={language} />
                        </div>
                    </div>
                </div>

                <div className='bgblacklack border border-[#929292] rounded-[8px] w-full p-[29px] space-y-3 mt-10'>
                    <div className='flex items-end justify-between'>
                        <div>
                            <h1 className='font-Jaro text-[30px] text-[--white]'>
                                Display
                            </h1>
                        </div>
                    </div>

                    <div className='h-[1px] w-full bg-[#929292]'></div>

                    <div className='flex items-center justify-between'>
                        <div>
                            <h1 className='text-sm text-[--dark-white]'>
                                Odds
                            </h1>
                            <p className='text-[--gray-sm-text] text-sm'>
                                Represented as +/- numbers like +125 or -3000
                            </p>
                        </div>

                        <div className='flex space-x-3 items-center min-h-[35px] rounded-md border border-[#929292] w-[450px] p-1 ms-auto bgblack#2F374694]'>
                            <Link href="#" className={`${pathname === "#" ? "bg-[--dark-white] text-[--dark-black]" : ""} rounded-md py-2 px-4 text-[--dark-white]`}>American</Link>
                            <Link href="#" className={`${pathname === "#" ? "bg-[--dark-white] text-[--dark-black]" : ""} rounded-md py-2 px-4 text-[--dark-white]`}>Fractional</Link>
                            <Link href="#" className={`${pathname === "#" ? "bg-[--dark-white] text-[--dark-black]" : ""} rounded-md py-2 px-4 text-[--dark-white]`}>Decimal</Link>
                            <Link href="#" className={`${pathname === "#" ? "bg-[--dark-white] text-[--dark-black]" : ""} rounded-md py-2 px-4 text-[--dark-white]`}>Probability</Link>
                        </div>
                    </div>

                    <div className='h-[1px] w-full bg-[#929292]'></div>

                    <div className='flex items-start justify-between'>
                        <div>
                            <h1 className='text-sm text-[--dark-white]'>
                                Site Color Theme
                            </h1>
                        </div>

                        <div className='grid grid-cols-2 space-x-3 items-center text-center min-h-[35px] rounded-md border border-[#929292] w-[450px] p-1 ms-auto bgblack#2F374694]'>
                            <Link
                                href="#"
                                className={`${pathname === "#" ? "bg-[--dark-white] text-[--dark-white]" : ""} rounded-md py-2 px-4 text-[--dark-white]`}
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            >Light</Link>

                            <Link
                                href="#"
                                className={`${pathname === "#" ? "bg-[--dark-white] text-[--dark-white]" : ""} rounded-md py-2 px-4 text-[--dark-white]`}
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            >Dark</Link>
                        </div>
                    </div>

                    <div className='h-[1px] w-full bg-[#929292]'></div>

                    <div className='flex items-start justify-between'>
                        <div>
                            <h1 className='text-sm text-[--dark-white]'>
                                Pause Button
                            </h1>
                            <p className='text-[--gray-sm-text] text-sm'>
                                A toggle that allows you to freeze your current page results
                            </p>
                        </div>

                        <div className='grid grid-cols-2 space-x-3 items-center text-center min-h-[35px] rounded-md border border-[#929292] w-[450px] p-1 ms-auto bgblack#2F374694]'>
                            <Link href="#" className={`${pathname === "#" ? "bg-white text-white" : ""} rounded-md py-2 px-4 text-[--dark-white]`}>Show</Link>
                            <Link href="#" className={`${pathname === "#" ? "bg-white text-white" : ""} rounded-md py-2 px-4 text-[--dark-white]`}>Hide</Link>
                        </div>
                    </div>
                </div>

                <div className='bgblacklack border border-[#929292] rounded-[8px] w-full p-[29px] space-y-3 mt-10'>

                    <div className='flex items-center justify-between'>
                        <div>
                            <h1 className='font-Jaro text-[30px] text-[--dark-white]'>
                                Sitewide sportbook selection
                            </h1>
                            <p className='text-[--gray-sm-text] text-sm'>
                                Represented as +/- numbers like +125 or -3000
                            </p>
                        </div>

                        <div className='grid grid-cols-2 space-x-3 items-center text-center min-h-[35px] rounded-md border border-[#929292] w-[450px] p-1 ms-auto bgblack#2F374694]'>
                            <Link href="#" className={`${pathname === "#" ? "bg-white text-white" : ""} rounded-md py-2 px-4 text-[--dark-white]`}>Enable</Link>
                            <Link href="#" className={`${pathname === "#" ? "bg-white text-white" : ""} rounded-md py-2 px-4 text-[--dark-white]`}>Disable</Link>
                        </div>
                    </div>
                </div>
            </div>
        //  </SidebarContainer> 
    )
}

export default page