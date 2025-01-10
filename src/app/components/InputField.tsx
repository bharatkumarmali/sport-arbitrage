import React from 'react'
import { CiSearch } from 'react-icons/ci'

interface InputFieldProps {
    placeholder: any;
}

function InputField({ placeholder }: InputFieldProps) {
    return (
        <span className='bg-[--black] flex space-x-2 items-center rounded-xl w-[402px] h-full'>
            <span className='ps-3 cursor-pointer'>
                <CiSearch className='text-[22px] text-[--white]' />
            </span>
            <input
                type="text"
                className='bg-[transparent] border-none text-[#C2C2C2] outline-none w-full text-sm'
                placeholder={`${placeholder}`}
            />
        </span>
    )
}

export default InputField