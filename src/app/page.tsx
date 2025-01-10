"use client";

import React, { useState, FormEvent } from 'react';
import { MdOutlineForwardToInbox } from "react-icons/md";
import OtpVerify from './components/OtpVerify';

interface LoginFormState {
  email: string;
  saveEmail: boolean;
  isRobot: boolean;
}

export default function Page() {
  const [formData, setFormData] = useState<LoginFormState>({
    email: '',
    saveEmail: false,
    isRobot: false
  });
  const [errors, setErrors] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors('');

    if (!formData.email) {
      setErrors('Email is required');
      return;
    }

    if (!formData.isRobot) {
      setErrors('Please verify that you are not a robot');
      return;
    }

    // TODO: Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className='login-screen'>
      <form onSubmit={handleSubmit} className='h-fit w-[500px] border border-[--white] text-white flex flex-col items-center py-4 px-7 rounded-[30px]'>
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
            type="email"
            className='w-full bg-transparent outline-none ms-5'
            placeholder='Email Address'
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div className='flex gap-3 w-full justify-start mt-3'>
          <input
            type="checkbox"
            className='bg-transparent'
            id='save-my-email'
            checked={formData.saveEmail}
            onChange={(e) => setFormData({ ...formData, saveEmail: e.target.checked })}
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
              checked={formData.isRobot}
              onChange={(e) => setFormData({ ...formData, isRobot: e.target.checked })}
              required
            />
            <label
              htmlFor='robot'
              className="text-xs select-none cursor-pointer"
            >
              I'm not a robot
            </label>
          </div>
          <img src="/images/captcha.png" alt="captcha" className='h-[50px]' />
        </div>

        {errors && (
          <p className="text-red-500 text-sm mt-2 w-full">{errors}</p>
        )}

        <button
          type="submit"
          className="w-full rounded-[13px] bg-[--gray-20] mt-5 py-3 text-xl text-[--gray-2-27] hover:bg-[--gray-30] transition-colors"
        >
          Next
        </button>
      </form>
    </div>
  );
}