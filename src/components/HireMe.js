import React from 'react'
import { CircularText } from './Icons'
import Link from "next/link";
const HireMe = () => {
    return (
        <div className='fixed right-0 -bottom-0 flex items-center justify-center overflow-hidden md:right-0 md:absolute md:left-auto md:top-2 md:bottom-auto lg:-bottom-[20px] lg:absolute '>
            <div className="w-48 h-auto flex items-center justify-center relative md:w-24 md:h-auto">
                <CircularText className={"fill-dark animate-spin-slow dark:fill-light "} />
                <Link className="absolute   flex items-center justify-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light font-medium shadow-md border border-solid border-dark rounded-full w-24 h-24 md:w-12 md:h-12 md:text-[10px]  hover:text-dark hover:font-bold  hover:bg-light hover:border-light hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light hover:dark:shadow-[inset_0px_0px_30px_rgba(255,255,255,0.2)]" href="mailto:shivaay7613@gmail.com">
                    Hire Me!
                </Link>
            </div>
        </div>
    )
}

export default HireMe