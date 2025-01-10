"use client"
import React, { useState } from 'react'
import { FaSortDown } from "react-icons/fa6";

function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <div className='flex flex-col'>

      {
        [...Array(10)].map((_, index) => (
          <div key={index} className="bg-[--dark-black] rounded-[15px] w-full mb-4 overflow-hidden transition-all">
            <div
              className="relative text-[--dark-white] p-5 pe-20 font-bold cursor-pointer text-[18px] select-none"
              onClick={() => handleClick(index)}
            >
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consequuntur facilis architecto impedit dolore.
              </p>
              <span className="absolute right-3 top-2/4 -translate-y-2/4 bg-[--black] rounded-md">
                <FaSortDown
                  className={`pb-2 px-1.5 text-3xl transition-transform ${activeIndex === index ? "rotate-180" : "rotate-0"} duration-500`}
                />
              </span>
            </div>

            <div
              className={`rounded-[15px] bg-[--sine-gray] text-[--dark-white] px-5 duration-500 overflow-hidden ${activeIndex === index ? "max-h-[200px]" : "max-h-0"}`}
              style={{ maxHeight: activeIndex === index ? '200px' : '0px' }}
            >
              <div className="py-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam odit necessitatibus alias quaerat explicabo sed pariatur repellat tempora, doloremque nulla neque sint cum facere voluptate dolor illo asperiores, placeat ipsa.
              </div>
            </div>
          </div>
        ))
      }

    </div>
  )
}

export default Faq;
