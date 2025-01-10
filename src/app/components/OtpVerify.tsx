import React from 'react'
import { MdOutlineForwardToInbox } from "react-icons/md";
import OTPInput from './OTPInput';

function OtpVerify() {
    
    return (
        <div className='w-full flex justify-center items-center'>

            <div className='min-h-[400px] min-w-[300px] max-w-[500px] border border-[--white] text-white flex flex-col items-center py-4 px-7 rounded-[30px]'>
                <div className='flex items-center space-x-4'>
                    <img
                        src="/images/image 2.png"
                        alt="logo"
                        className='h-[60px] w-[60px] my-auto filter'
                    />
                    <h1 className='font-bold text-3xl capitalize font-kadwa text-[--white]'>sport <br /> arbitrage</h1>
                </div>

                <p className='text-left w-full mt-6'>
                Verify Account  
                </p>

                <OTPInput />

                <button
                    className="w-full rounded-[13px] bg-[--gray-20] mt-auto py-3 text-xl text-[--gray-2-27]"
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default OtpVerify