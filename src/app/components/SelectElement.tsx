"use client";
import { usePathname } from 'next/navigation';
import React from 'react';

interface SelectElementProps {
    option: { option: any }[]
}

function SelectElement({ option }: SelectElementProps) {

    return (
        <div className="custom-select-wrapper">
            <select className={`custom-select`}>
                {
                    option.map((item, index) => (
                        <option key={index} value={item.option}>{item.option}</option>
                    ))
                }
            </select>
            <img
                src="/images/select-icon.png"
                alt="select image"
                className="bg-[#343434]"
            />
        </div>
    );
}

export default SelectElement;
