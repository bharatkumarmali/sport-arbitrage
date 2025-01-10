import React from 'react'

function Navbar() {
    return (
        <nav className='flex justify-between items-center px-6 border-b-2 border-[--gray] h-[110px] my-auto'>
            <div className='flex items-center space-x-4'>
                <img
                    src="/images/image 2.png"
                    alt="logo"
                    className='h-[60px] w-[60px] my-auto filter'
                />
                <h1 className='font-bold text-3xl capitalize font-kadwa text-[--white]'>sport <br /> arbitrage</h1>
            </div>

            <div className="flex items-center space-x-4">
                <span className='hidden sm:block text-[12px] leading-[20px] text-sm text-[--gray] bg-[--black] p-3 rounded-md'>
                    STATUS: Anonymous User <br />
                    REFRESH RATE: 60 Seconds
                </span>
                <img
                    src="/images/nav-img-2.png"
                    alt="nav-img-2"
                    className=''
                />
                <img
                    src="/images/nav-img-3.png"
                    alt="nav-img-3"
                    className='cursor-pointer'
                />
            </div>
        </nav>
    )
}

export default Navbar