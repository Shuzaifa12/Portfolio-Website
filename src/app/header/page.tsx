"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import image1 from './image1.png';
import linkedin from '../socialicons/linkedin.png';
import github from '../socialicons/github.png';


const Header = () => {
  return (
    <>
    <div className='my-8 px-12 py-3 sm:flex justify-between'>
        <div className='my-10 text-center sm:text-left text-gray-300 tracking-wider sm:w-[60%] py-4'>
            <h1 className='text-xl sm:text-2xl sm:font-bold'>Hi I am</h1>
            <h1 className='text-2xl sm:text-3xl sm:font-bold mt-2'>Syed Huzaifa Bin Hamid</h1>
            <h1 className='text-3xl sm:text-4xl sm:font-bold uppercase font-bold text-transparent bg-clip-text bg-[linear-gradient(to_right,#FA6E00,#E60026)] mt-4'>frontend developer</h1>
            <div className='flex justify-center sm:justify-start gap-4 my-4'>
            <a href="https://www.linkedin.com/in/s-huzaifa" target='_blank'> <Image src={linkedin} alt='Linkedin_logo' height={30} width={40} className='bg-gray-300  p-1'></Image></a>
            <a href="https://github.com/Shuzaifa12" target='_blank'><Image src={github} alt='Linkedin_logo' height={30} width={40} className='bg-gray-300  p-1'></Image></a>
            
            </div>

            <div className='lg:flex space-x-3'>
            <a href="/SyedHuzaifaBinHamidResume.pdf" download="Syed_Huzaifa_Resume.pdf">
              <button className='border-[1px] border-white text-white px-8 py-1 rounded-2xl my-4 bg-[#FA6E00] font-bold'>Download Resume</button>
            </a>
            <Link href="/form">
              <button className='border-[1px] border-white px-8 py-1 rounded-2xl my-2 lg:my-4  text-[#FA6E00] font-bold'>Hire me</button>
            </Link>

            </div>
        </div>

        

        <div className='flex justify-center bg-[#1d1d1d53] rounded-full'>
            <Image src={image1} alt='loading' height={200} width={400}></Image>
        </div>
    </div>
    </>
  )
}

export default Header;