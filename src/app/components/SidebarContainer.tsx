"use client"
import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

interface SidebarContainerProps {
    children: React.ReactNode;
}

function SidebarContainer({ children }: SidebarContainerProps) {
    return (
        <div>
            <Navbar />  {/* h-[110px] */}
            <div className='flex h-[calc(100vh-110px)]'>
                <Sidebar /> {/* w-[250px] */}
                <div className={`${window.innerWidth < 768 ? 'md:w-[calc(100%-250px)]' : 'w-full'} no-scrollbar overflow-y-auto`}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default SidebarContainer