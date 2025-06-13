"use client";
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

const Topheader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // state to toggle menu

    const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // toggles the menu state
    }

  return (
   <>

    <div className='flex items-center justify-between py-3 px-12'>
        <div className='cursor-pointer p-1 h-fit block sm:hidden' onClick={handleMenuToggle}
        >
            {isMenuOpen ? (
                <div className='p-3'>
                 <div className='h-[3px] w-8 bg-gray-300 mt-[2px] rotate-45 ' ></div>
                 <div className='h-[3px] w-8 bg-gray-300 mt-[-2px] rotate-[-45deg]'></div>
                </div>
            ) : (
            <>
                <div className='h-[4px] w-8 bg-gray-300 my-[4px]'></div>
                <div className='h-[4px] w-6 bg-gray-300 my-[4px]'></div>
                <div className='h-[4px] w-8 bg-gray-300 my-[4px]'></div>
            </>
            )}
        </div>

        <div className='hidden sm:flex px-2 sm:order-2 h-12 items-center ' >
            <ul className='flex lg:text-xl sm:gap-1 md:gap-8 lg:gap-16 text-gray-300 font-bold cursor-pointer '>
                <li className="hover:text-[#FA6E00]"><Link href="/">Home</Link></li>
                <li className="hover:text-[#FA6E00]"><Link href="/about">About</Link></li>
                <li className="hover:text-[#FA6E00]"><Link href="/skills">Skills</Link></li>
                <li className="hover:text-[#FA6E00]"><Link href="/projects">Projects</Link></li>
                <li className="hover:text-[#FA6E00]"><Link href="/contact">Contact Info</Link></li>
            </ul>
        </div>
        <div className='sm:order-1 flex items-center h-12'>
            <h1 className='uppercase text-xl lg:text-2xl text-transparent bg-clip-text bg-[linear-gradient(to_right,#FA6E00,#E60026)] p-1 h-fit tracking-wide font-bold'>Portfolio</h1>
        </div>

        <div className='sm:order-3 w-fit border-[1px] border-white text-white md:px-6 px-2 py-1  bg-[#FA6E00] font-bold'>
            <Link href="/form"><button >Hire me</button></Link>
        </div>

    </div>

    {isMenuOpen && (
    <div className='w-52 ml-14 px-2 sm:order-2'>
            <ul className='sm:flex text-xl sm:gap-8 md:gap-16 text-gray-300 cursor-pointer leading-10'>
                <li onClick={handleMenuToggle} className="hover:text-[#FA6E00]"><Link href="/">Home</Link></li>
                <li onClick={handleMenuToggle} className="hover:text-[#FA6E00]"><Link href="/about">About</Link></li>
                <li onClick={handleMenuToggle} className="hover:text-[#FA6E00]"><Link href="/skills" >Skills</Link></li>
                <li onClick={handleMenuToggle} className="hover:text-[#FA6E00]"><Link href="/projects">Projects</Link></li>
                <li onClick={handleMenuToggle} className="hover:text-[#FA6E00]"><Link href="/contact">Contact Info</Link></li>
            </ul>
     </div>
    )}

   </>
  )
}

export default Topheader;