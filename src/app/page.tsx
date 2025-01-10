import React from 'react'
import { MdOutlineForwardToInbox } from "react-icons/md";
import OtpVerify from './components/OtpVerify';

function page() {
  return (
    <div className='login-screen'>

      <div className='h-fit w-[500px] border border-[--white] text-white flex flex-col items-center py-4 px-7 rounded-[30px]'>
        <div className='flex items-center space-x-4'>
          <img
            src="/images/image 2.png"
            alt="logo"
            className='h-[60px] w-[60px] my-auto filter'
          />
          <h1 className='font-bold text-3xl capitalize font-kadwa text-[--white]'>sport <br /> arbitrage</h1>
        </div>

        <p className='text-left w-full mt-6'>
          Subscribe | Log In
        </p>

        <div className='bg-[--gray-20] w-full p-3 mt-5 rounded-[13px] flex'>
          <MdOutlineForwardToInbox className='text-[--gray-2-27] text-3xl ms-3' />
          <input
            type="text"
            className='w-full bg-transparent outline-none ms-5'
            placeholder='Email Address'
          />
        </div>

        <div className='flex gap-3 w-full justify-start mt-3'>
          <input
            type="checkbox"
            className='bg-transparent'
            id='save-my-email'
          />
          <label
            className='text-xs text-[--gray-2-27] select-none cursor-pointer'
            htmlFor='save-my-email'
          >
            Save my email
          </label>
        </div>

        <div className='bg-[--gray-20] w-full px-4 py-2.5 mt-5 rounded-[13px] flex items-center justify-between'>
          <div className="flex gap-3">
            <input
              type="checkbox"
              className=''
              id='robot'
            />
            <label
              htmlFor='robot'
              className="text-xs select-none cursor-pointer"
            >
              I’m not a robot
            </label>
          </div>
          <img src="/images/captcha.png" alt="" className='h-[50px]' />
        </div>

        <button className="w-full rounded-[13px] bg-[--gray-20] mt-5 py-3 text-xl text-[--gray-2-27]">Next</button>
      </div>

      {/* <OtpVerify /> */}
      
    </div>
  )
}

export default page