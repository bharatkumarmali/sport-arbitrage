"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

const Parametres = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname();

    return (
        <div className='w-full flex flex-col gap-4 py-7 px-7'>
            <div className="flex justify-between items-center">
                <h1 className='text-[24px] font-bold text-[--white]'>
                    Already a user?
                    <Link href="#" className='underline ms-2'>Log in.</Link>
                </h1>

                <div className='flex space-x-3 items-center min-h-[35px] rounded-lg border-2 border-[--gray] w-fit p-1 ms-auto'>
                    <Link href="/parametres/account" className={`${pathname === "/parametres/account" ? "bg-[--white] text-[--black]" : "text-[--white]"} rounded-lg py-2 px-4 `}>Account</Link>
                    <Link href="/parametres/setting" className={`${pathname === "/parametres/setting" ? "bg-[--white] text-[--black]" : "text-[--white]"} rounded-lg py-2 px-4 `}>Settings</Link>
                    <Link href="/parametres/faq" className={`${pathname === "/parametres/faq" ? "bg-[--white] text-[-black]" : "text-[--white]"} rounded-lg py-2 px-4 `}>FAQ</Link>
                </div>
            </div>
            {children}
        </div>
    );
}


export default Parametres;