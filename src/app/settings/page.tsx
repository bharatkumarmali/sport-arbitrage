"use client";
import React, { useState } from "react";
import SidebarContainer from "../components/SidebarContainer";
import Account from "./Account";
import Setting from "./Setting";
import Faq from "./faq";
import { usePathname } from "next/navigation";
import SelectElement from "../components/SelectElement";
import Link from "next/link";

const Page = () => {
    const pathname = usePathname();
    const [activeButton, setActiveButton] = useState("Settings");

    const handleButtonClick = (buttonName: string) => {
        setActiveButton(buttonName);
    };

    return (
        <SidebarContainer>
            <div>


                <div className="flex flex-col md:flex-row justify-between mx-8 mt-8">
                    <h1 className="text-[--dark-white] text-[25px]">
                        Subscribe | <Link href="/">Log In</Link>
                    </h1>
                    <div className='grid grid-cols-3 items-center min-h-[35px] rounded-lg border-2 border-[--gray] w-full md:w-fit p-1 mt-8 md:mt-0'>
                        <button
                            className={`${activeButton === "Account" ? "bg-[--white] text-[--dark-black]" : "text-[--white]"} rounded-lg py-2 px-4 `}
                            onClick={() => handleButtonClick("Account")}
                        >
                            Account
                        </button>
                        <button
                            className={`${activeButton === "Settings" ? "bg-[--white] text-[--dark-black]" : "text-[--white]"} rounded-lg py-2 px-4 `}
                            onClick={() => handleButtonClick("Settings")}
                        >
                            Settings
                        </button>
                        <button
                            className={`${activeButton === "FAQ" ? "bg-[--white] text-[--dark-black]" : "text-[--white]"} rounded-lg py-2 px-4 `}
                            onClick={() => handleButtonClick("FAQ")}
                        >
                            FAQ
                        </button>
                    </div>
                </div>

                <div className="m-8">
                    {activeButton === "Account" && <Account />}
                    {activeButton === "Settings" && <Setting />}
                    {activeButton === "FAQ" && <Faq />}
                </div>
            </div>
        </SidebarContainer >
    );
};

export default Page;
