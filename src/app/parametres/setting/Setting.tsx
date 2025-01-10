"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

function Setting() {
    const pathname = usePathname();
    console.log(pathname)

    return (
        <div className=" p-5 rounded-[31px] bg-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
            <div className='border border-[#929292] rounded-[8px] w-full  pt-4 pb-5 px-5'>
                <div>
                    <span className="uppercase text-[10px] font-bold py-0.5 px-2.5 rounded-[4px] bg-[#404B61]">free</span>
                </div>

                <div className="pt-5">
                    <p className='ps-5'>
                        <span className='text-2xl font-semibold'>$0</span>
                        <span className='text-[10px] text-[#7F7F7F]'>MONTH(USD)</span>
                    </p>

                    <div className='hr-line'></div>

                    <button className="flex justify-center items-center capitalize h-[34px] w-full border border-[#CDCDCD] py-6 rounded-md">sign up</button>

                    <div className='mt-3'>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Free Bet Converter
                            </span>
                        </div>

                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Pre-game and Live Data
                            </span>
                        </div>

                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Shareable multi-device filters and formulas
                            </span>
                        </div>

                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Trial: <span className='text-white font-semibold'>Indefinite</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mt-3">
                    <p className='text-[#DDDDDD] font-light uppercase'>
                        Odds Screen
                    </p>
                    <div className='flex items-center gap-3'>
                        <img
                            src="/images/setting/dubble-tick.png"
                            alt="dubble tick"
                            className='h-[20px]'
                        />
                        <span className='text-[#7F7F7F]'>
                            Refresh Time:  <span className='text-white font-semibold'>15 Seconds</span>
                        </span>
                    </div>
                </div>

                <div className="mt-3">
                    <p className='text-[#DDDDDD] font-light uppercase'>
                        Arbitrage
                    </p>
                    <div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                ROI Limit: <span className='text-white font-semibold'>2%</span>
                            </span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Max Results: <span className='text-white font-semibold'>10</span>
                            </span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Sportsbook Limit:<span className='text-white font-semibold'>None</span>
                            </span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Leagues Limit: <span className='text-white font-semibold'>None</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mt-3">
                    <p className='text-[#DDDDDD] font-light uppercase'>
                        Positive EV
                    </p>
                    <div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                ROI Limit: <span className='text-white font-semibold'>2%</span>
                            </span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Max Results: <span className='text-white font-semibold'>10</span>
                            </span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Sportsbook Limit:<span className='text-white font-semibold'>None</span>
                            </span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Leagues Limit: <span className='text-white font-semibold'>None</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mt-3">
                    <p className='text-[#DDDDDD] font-light uppercase'>
                        Middle
                    </p>
                    <div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                ROI Limit: <span className='text-white font-semibold'>2%</span>
                            </span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Max Results: <span className='text-white font-semibold'>10</span>
                            </span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Sportsbook Limit:<span className='text-white font-semibold'>None</span>
                            </span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Leagues Limit: <span className='text-white font-semibold'>None</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='border border-[#929292] rounded-[8px] w-full pt-4 pb-5 px-5'>
                <div>
                    <span className="uppercase text-[10px] font-bold py-0.5 px-2.5 rounded-[4px] bg-[#404B61]">STARTER</span>
                </div>

                <div className="pt-5">
                    <p className='ps-5'>
                        <span className='text-2xl font-semibold'>$30</span>
                        <span className='text-[10px] text-[#7F7F7F]'>MONTH(USD)</span>
                    </p>

                    <div className='hr-line'></div>

                    <button className="flex justify-center items-center capitalize h-[34px] w-full border border-[#CDCDCD] py-6 rounded-md">sign up</button>

                    <div className='mt-3'>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Free Bet Converter
                            </span>
                        </div>

                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Pre-game and Live Data
                            </span>
                        </div>

                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Shareable multi-device filters and formulas
                            </span>
                        </div>

                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Trial: <span className='text-white font-semibold'>5 days</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mt-3">
                    <p className='text-[#DDDDDD] font-light uppercase'>
                        Odds Screen
                    </p>
                    <div className='flex items-center gap-3'>
                        <img
                            src="/images/setting/dubble-tick.png"
                            alt="dubble tick"
                            className='h-[20px]'
                        />
                        <span className='text-[#7F7F7F]'>
                            Refresh Time:  <span className='text-white font-semibold'>2-4 Seconds</span>
                        </span>
                    </div>
                </div>

                <div className="mt-3">
                    <p className='text-[#DDDDDD] font-light uppercase'>
                        Arbitrage
                    </p>
                    <div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                ROI Limit: <span className='text-white font-semibold'>None</span>
                            </span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Max Results: <span className='text-white font-semibold'>None</span>
                            </span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Sportsbook Limit:<span className='text-white font-semibold'>2</span>
                            </span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Leagues Limit: <span className='text-white font-semibold'>1</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mt-3">
                    <p className='text-[#DDDDDD] font-light uppercase'>
                        Positive EV
                    </p>
                    <div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                ROI Limit: <span className='text-white font-semibold'>4%</span>
                            </span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Max Results: <span className='text-white font-semibold'>None</span>
                            </span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Sportsbook Limit:<span className='text-white font-semibold'>None</span>
                            </span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Leagues Limit: <span className='text-white font-semibold'>1</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='border border-[#929292] rounded-[8px] w-full pt-4 pb-5 px-5'>
                <div>
                    <span className="uppercase text-[10px] font-bold py-0.5 px-2.5 rounded-[4px] bg-[#404B61]">INTERMEDIATE</span>
                </div>

                <div className="pt-5">
                    <p className='ps-5'>
                        <span className='text-2xl font-semibold'>$80</span>
                        <span className='text-[10px] text-[#7F7F7F]'>MONTH(USD)</span>
                    </p>

                    <div className='hr-line'></div>

                    <button className="flex justify-center items-center capitalize h-[34px] w-full border border-[#CDCDCD] py-6 rounded-md">sign up</button>

                    <div className='mt-3'>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Free Bet Converter
                            </span>
                        </div>

                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Pre-game and Live Data
                            </span>
                        </div>

                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Shareable multi-device filters and formulas
                            </span>
                        </div>

                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Trial: <span className='text-white font-semibold'>5 days</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mt-3">
                    <p className='text-[#DDDDDD] font-light uppercase'>
                        Odds Screen
                    </p>
                    <div className='flex items-center gap-3'>
                        <img
                            src="/images/setting/dubble-tick.png"
                            alt="dubble tick"
                            className='h-[20px]'
                        />
                        <span className='text-[#7F7F7F]'>
                            Refresh Time:  <span className='text-white font-semibold'>2-4 Seconds</span>
                        </span>
                    </div>
                </div>

                <div className="mt-3">
                    <p className='text-[#DDDDDD] font-light uppercase'>
                        Arbitrage
                    </p>
                    <div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                ROI Limit: <span className='text-white font-semibold'>None</span>
                            </span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Max Results: <span className='text-white font-semibold'>None</span>
                            </span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Sportsbook Limit:<span className='text-white font-semibold'>4</span>
                            </span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Leagues Limit: <span className='text-white font-semibold'>3</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mt-3">
                    <p className='text-[#DDDDDD] font-light uppercase'>
                        Positive EV
                    </p>
                    <div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                ROI Limit: <span className='text-white font-semibold'>8%</span>
                            </span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Max Results: <span className='text-white font-semibold'>None</span>
                            </span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Sportsbook Limit:<span className='text-white font-semibold'>None</span>
                            </span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Leagues Limit: <span className='text-white font-semibold'>None</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='border border-[#929292] rounded-[8px] w-full pt-4 pb-5 px-5'>
                <div>
                    <span className="uppercase text-[10px] font-bold py-0.5 px-2.5 rounded-[4px] bg-[#404B61]">ADVANCED</span>
                </div>

                <div className="pt-5">
                    <p className='ps-5'>
                        <span className='text-2xl font-semibold'>$120</span>
                        <span className='text-[10px] text-[#7F7F7F]'>MONTH(USD)</span>
                    </p>

                    <div className='hr-line'></div>

                    <button className="flex justify-center items-center capitalize h-[34px] w-full border border-[#CDCDCD] py-6 rounded-md">sign up</button>

                    <div className='mt-3'>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Free Bet Converter
                            </span>
                        </div>

                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Pre-game and Live Data
                            </span>
                        </div>

                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Shareable multi-device filters and formulas
                            </span>
                        </div>

                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Trial: <span className='text-white font-semibold'>None</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mt-3">
                    <p className='text-[#DDDDDD] font-light uppercase'>
                        Odds Screen
                    </p>
                    <div className='flex items-center gap-3'>
                        <img
                            src="/images/setting/dubble-tick.png"
                            alt="dubble tick"
                            className='h-[20px]'
                        />
                        <span className='text-[#7F7F7F]'>
                            Refresh Time:  <span className='text-white font-semibold'>None</span>
                        </span>
                    </div>
                </div>

                <div className="mt-3">
                    <p className='text-[#DDDDDD] font-light uppercase'>
                        Arbitrage
                    </p>
                    <div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                ROI Limit: <span className='text-white font-semibold'>None</span>
                            </span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Max Results: <span className='text-white font-semibold'>None</span>
                            </span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Sportsbook Limit:<span className='text-white font-semibold'>None</span>
                            </span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Leagues Limit: <span className='text-white font-semibold'>None</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mt-3">
                    <p className='text-[#DDDDDD] font-light uppercase'>
                        Positive EV
                    </p>
                    <div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                ROI Limit: <span className='text-white font-semibold'>None</span>
                            </span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Max Results: <span className='text-white font-semibold'>None</span>
                            </span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Sportsbook Limit:<span className='text-white font-semibold'>None</span>
                            </span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img
                                src="/images/setting/dubble-tick.png"
                                alt="dubble tick"
                                className='h-[20px]'
                            />
                            <span className='text-[#7F7F7F]'>
                                Leagues Limit: <span className='text-white font-semibold'>None</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Setting