"use client"
import React, { useState } from 'react'
import { FaSortDown } from "react-icons/fa6";
import InputField from '../components/InputField'
import SidebarContainer from '../components/SidebarContainer'
import { LuEarth } from 'react-icons/lu';

function page() {
    return (

        <SidebarContainer>
            <div className='w-full h-full flex flex-col gap-4 py-5 px-7'>
                <div className='flex space-x-4 justify-between items-center min-h-[35px]'>
                    <div className='flex items-center space-x-2'>
                        <span className='border h-[33px] w-[33px] flex justify-center items-center rounded-md cursor-pointer'>
                            <img src="/images/filter-icon.png" alt="filter icon" className='mix-blend' />
                        </span>
                        <span className='text-sm text-[--gray-sm-text]'>
                            Filtered 10 of 2000
                        </span>
                    </div>
                    <InputField placeholder="Find games and players" />
                </div>

                <div className="bg-[--dark-black] rounded-[25px] w-full mb-4 overflow-hidden transition-all mt-5">
                    <div
                        className="relative text-[--dark-white] p-2 pe-20 flex justify-between text-[18px] select-none"
                    >
                        <div className='grid grid-cols-2 w-full'>
                            <div className="flex items-center gap-2 ms-7">
                                <LuEarth className='text-[20px]' />
                                <span>NBA</span>
                            </div>
                            <div className='w-full flex justify-center space-x-2 h-10 '>
                                <span className='bg-[#1E2923] rounded-md text-[#25C06C] font-semibold p-2 h-full'>
                                    $3.98%
                                </span>
                                <span className='bg-[#1E2923] rounded-md text-[#25C06C] font-semibold p-2 h-full'>
                                    $2.0%
                                </span>
                                <span className='bg-[#2B4436] w-[25px] rounded-r-md h-full '></span>
                            </div>
                        </div>
                        <div>
                            <span className="absolute right-3 top-2/4 -translate-y-2/4 bg-[--black] rounded-md me-3">
                                <FaSortDown
                                    className={`pb-2 px-1.5 text-3xl transition-transform duration-500 cursor-pointer`}
                                />
                            </span>
                        </div>
                    </div>

                    <div
                        className={`rounded-[25px] bg-[--background] text-[--dark-white] border border-[--white] px-5 duration-500 overflow-hidden`}
                    // style={{ maxHeight: activeIndex === index ? '200px' : '0px' }}
                    >
                        <div className="py-5 px-3 flex">
                            <div className="md:w-[45%] flex flex-col gap-4">
                                <div className='text-[20px]'>
                                    <h1>
                                        Dallas Mavericks
                                    </h1>

                                    <h1>
                                        Sacramento King
                                    </h1>
                                </div>
                                <div className='text-[20px]'>
                                    <h1>
                                        3rd 9:30
                                    </h1>

                                    <div className='flex gap-5'>
                                        <div>
                                            <h1>
                                                37 23 34 -
                                            </h1>
                                            <h1>
                                                34 33 27 -
                                            </h1>
                                        </div>


                                        <div className='border-l-2 border-[--dark-white] ps-2 h-fit'>
                                            <h1>
                                                62
                                            </h1>
                                            <h1>
                                                60
                                            </h1>
                                        </div>

                                        <span className='text-sm text-[--gray-sm-text] w-[300px] mt-5'>
                                            2 free ball throws are issued to
                                            team Dallas Mavericks
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[55%] border rounded-[25px] min-h-full bg-[--gray-57] pb-5">
                                <div className=' py-5 mx-6 flex justify-betweens'>
                                    <div className='w-2/4'>
                                        <h1>SPREAD</h1>
                                        <p className='text-sm text-[--gray-sm-text]'>CURRENTLY:  +2</p>
                                    </div>
                                    <div className='w-2/4 flex justify-end items-end gap-12 me-4'>
                                        <h1 className='uppercase text-[--gray-sm-text]'>odds</h1>
                                        <h1 className='uppercase text-[--gray-sm-text]'>wager</h1>
                                    </div>
                                </div>

                                <div className='space-y-3'>
                                    <div className="flex justify-between mx-6  bg-[#51596DAD] rounded-lg">
                                        <div className='w-[200px] px-3 flex justify-between bg-[--gray-222-21-28] rounded-lg'>
                                            <div className='w-2/4 flex items-center gap-3'>
                                                <img src="images/table/11.png" alt="11" height={20} width={20} />
                                                <div className='leading-5 font-light'>
                                                    <h1>
                                                        Dallas
                                                    </h1>
                                                    <h1>
                                                        +3
                                                    </h1>
                                                </div>
                                            </div>

                                            <div className='flex items-end'>
                                                <span className='border-2 border-white px-1.5 text-[10px] mb-2'>
                                                    EV
                                                </span>
                                            </div>
                                        </div>

                                        <div className='w-2/4 flex justify-end items-center gap-10 mr-3'>
                                            <h1 className='uppercase text-[--dark-white] font-bold'>
                                                -210
                                            </h1>
                                            <h1 className='uppercase rounded-md px-3 border text-[--dark-white] font-light'>
                                                $ 16.78
                                            </h1>
                                        </div>
                                    </div>

                                    <div className="flex justify-between mx-6  bg-[#51596DAD] rounded-lg">
                                        <div className='w-[200px] px-3 flex justify-between bg-[--gray-222-21-28] rounded-lg'>
                                            <div className='w-2/4 flex items-center gap-3'>
                                                <img src="images/table/11.png" alt="11" height={20} width={20} />
                                                <div className='leading-5 font-light'>
                                                    <h1>
                                                    Sacramento
                                                    </h1>
                                                    <h1>
                                                        -3
                                                    </h1>
                                                </div>
                                            </div>

                                            <div className='flex items-end'>
                                                <span className='border-2 border-white px-1.5 text-[10px] mb-2'>
                                                    EV
                                                </span>
                                            </div>
                                        </div>

                                        <div className='w-2/4 flex justify-end items-center gap-10 mr-3'>
                                            <h1 className='uppercase text-[--dark-white] font-bold'>
                                                +230
                                            </h1>
                                            <h1 className='uppercase rounded-md px-3 border text-[--dark-white] font-light'>
                                                $ 78.12
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SidebarContainer>
    )
}

export default page