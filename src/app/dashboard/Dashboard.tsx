"use client"
import React from 'react'
import { CiSearch } from "react-icons/ci";
import InputField from '../components/InputField';
import SelectElement from '../components/SelectElement';

function Dashboard() {


    const tableData = [
        {
            id: 1,
            title1: 'Chargers',
            title2: 'Patriots',
        },
        {
            id: 2,
            title1: 'Broncos',
            title2: 'Bengals',
        },
        {
            id: 3,
            title1: 'Cardinals',
            title2: 'Rams',
        },
        {
            id: 4,
            title1: 'Titans',
            title2: 'Jaguars',
        },
        {
            id: 5,
            title1: 'Panthers',
            title2: 'Buccaneers',
        },
    ]

    return (
        <div className='w-full h-full flex flex-col gap-4 py-5 px-7'>
            <div className='flex space-x-4 items-center min-h-[35px]'>
                <span className='border h-[33px] w-[33px] flex justify-center items-center rounded-md'>
                    <img src="/images/filter-icon.png" alt="filter icon" />
                </span>
                <InputField placeholder="Find games and players" />
            </div>
            <div className='rounded-[31px] bg-black flex flex-col p-5'>
                <div className='mx-10 flex gap-2'>
                    <SelectElement option="NFL" />
                    <SelectElement option="Moneyline" />
                    <SelectElement option="Moneyline" />
                    <SelectElement option="Game" />
                </div>
                <div className="h-full mt-5 pb-5 border border-[#D9D9D9] rounded-[31px] bg-[#161920]">
                    <table className=''>
                        <thead>
                            <tr>
                                <td className='py-6 w-40'></td>
                                <td className='py-6 w-40'></td>
                                <td className='py-6 w-40 text-center'>BEST</td>
                                <td className='py-6 w-40 text-center'>AVERAGE</td>
                                <td></td>
                                <td className='py-6 w-40'>
                                    <img className='mx-auto' src="images/table/heading/1.png" alt="heading icon" />
                                </td>
                                <td className='py-6 w-40'>
                                    <img className='mx-auto' src="images/table/heading/2.png" alt="heading icon" />
                                </td>
                                <td className='py-6 w-40'>
                                    <img className='mx-auto' src="images/table/heading/3.png" alt="heading icon" />
                                </td>
                                <td className='py-6 w-40'>
                                    <img className='mx-auto' src="images/table/heading/4.png" alt="heading icon" />
                                </td>
                                <td className='py-6 w-40'>
                                    <img className='mx-auto' src="images/table/heading/5.png" alt="heading icon" />
                                </td>
                                <td className='py-6 w-40'>
                                    <img className='mx-auto' src="images/table/heading/6.png" alt="heading icon" />
                                </td>
                                <td className='py-6 w-40'>
                                    <img className='mx-auto' src="images/table/heading/7.png" alt="heading icon" />
                                </td>
                                <td className='py-6 w-40'>
                                    <img className='mx-auto' src="images/table/heading/8.png" alt="heading icon" />
                                </td>
                                <td className='py-6 w-40'>
                                    <img className='mx-auto' src="images/table/heading/9.png" alt="heading icon" />
                                </td>
                                <td className='py-6 w-40  pe-10'>
                                    <img className='mx-auto' src="images/table/heading/10.png" alt="heading icon" />
                                </td>
                            </tr>
                        </thead>
                        <tbody className='space-x-2 tbody'>
                            {
                                tableData.map((data, index) => (
                                    <tr className='bg-[#1C212B]' key={index}>
                                        <td className='w-40 border-yellow'>
                                            <div className='min-h-16 flex flex-col justify-between ps-10 pe-1'>
                                                <span>{data?.title1}</span>
                                                <span>{data?.title2}</span>
                                            </div>
                                        </td>
                                        <td className='w-40'>
                                            <div className="min-h-16 flex flex-col justify-between py-2 px-5 rounded-md bg-[#4E5A7478]">
                                                <span className='text-sm font-light'>
                                                    12/28/24
                                                </span>
                                                <span className='text-sm'>
                                                    11:30 pm
                                                </span>
                                                <span className='text-sm'>
                                                    in 1 day
                                                </span>
                                            </div>
                                        </td>
                                        <td className='w-40'>
                                            <div className='text-sm flex flex-col w-full px-2'>
                                                <div className='flex justify-between gap-3'>
                                                    <img src="images/table/11.png" alt="11" height={20} width={20} />
                                                    <p>-210</p>
                                                </div>
                                                <p className='text-end text-[10px]'>
                                                    0.64%
                                                </p>
                                                <div className='flex justify-between gap-3'>
                                                    <img src="images/table/12.png" alt="12" height={20} width={20} />
                                                    <p>-204</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='w-40'>
                                            <div className='min-h-16 text-sm flex flex-col justify-between px-2'>
                                                <span className='flex flex-col text-center'>
                                                    -210
                                                </span>
                                                <span className='flex flex-col text-center'>
                                                    +204
                                                </span>
                                            </div>
                                        </td>
                                        <td className='w-40'>
                                            <div>
                                                <img src="images/table/graph.png" alt="graph icon" />
                                            </div>
                                        </td>
                                        <td className='w-40'>
                                            <div className='min-h-16 text-sm flex flex-col justify-between'>
                                                <span className='flex flex-col text-center'>
                                                    -210
                                                </span>
                                                <span className='flex flex-col text-center'>
                                                    +204
                                                </span>
                                            </div>
                                        </td>
                                        <td className='w-40'>
                                            <div className='min-h-16 text-sm flex flex-col justify-between'>
                                                <span className='flex flex-col text-center'>
                                                    -210
                                                </span>
                                                <span className='flex flex-col text-center'>
                                                    +204
                                                </span>
                                            </div>
                                        </td>
                                        <td className='w-40'>
                                            <div className='min-h-16 text-sm flex flex-col justify-between'>
                                                <span className='flex flex-col text-center'>
                                                    -210
                                                </span>
                                                <span className='flex flex-col text-center'>
                                                    +204
                                                </span>
                                            </div>
                                        </td>
                                        <td className='w-40'>
                                            <div className='min-h-16 text-sm flex flex-col justify-between'>
                                                <span className='flex flex-col text-center'>
                                                    -210
                                                </span>
                                                <span className='flex flex-col text-center'>
                                                    +204
                                                </span>
                                            </div>
                                        </td>
                                        <td className='w-40'>
                                            <div className='min-h-16 text-sm flex flex-col justify-between'>
                                                <span className='flex flex-col text-center'>
                                                    -210
                                                </span>
                                                <span className='flex flex-col text-center'>
                                                    +204
                                                </span>
                                            </div>
                                        </td>
                                        <td className='w-40'>
                                            <div className='min-h-16 text-sm flex flex-col justify-between'>
                                                <span className='flex flex-col text-center'>
                                                    -210
                                                </span>
                                                <span className='flex flex-col text-center'>
                                                    +204
                                                </span>
                                            </div>
                                        </td>
                                        <td className='w-40'>
                                            <div className='min-h-16 text-sm flex flex-col justify-between'>
                                                <span className='flex flex-col text-center'>
                                                    -210
                                                </span>
                                                <span className='flex flex-col text-center'>
                                                    +204
                                                </span>
                                            </div>
                                        </td>
                                        <td className='w-40'>
                                            <div className='min-h-16 text-sm flex flex-col justify-between'>
                                                <span className='flex flex-col text-center'>
                                                    -210
                                                </span>
                                                <span className='flex flex-col text-center'>
                                                    +204
                                                </span>
                                            </div>
                                        </td>
                                        <td className='w-40'>
                                            <div className='min-h-16 text-sm flex flex-col justify-between'>
                                                <span className='flex flex-col text-center'>
                                                    -210
                                                </span>
                                                <span className='flex flex-col text-center'>
                                                    +204
                                                </span>
                                            </div>
                                        </td>
                                        <td className='w-40'>
                                            <div className='min-h-16 text-sm flex flex-col justify-between pe-10'>
                                                <span className='flex flex-col text-center'>
                                                    -210
                                                </span>
                                                <span className='flex flex-col text-center'>
                                                    +204
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Dashboard