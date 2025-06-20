import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import call from '../socialicons/call.png';
import email from '../socialicons/mail.png';
import linkedin from '../socialicons/linkedin.png';
import github from '../socialicons/github.png';
import loc from '../socialicons/location.png';

const Contact = () => {
  return (
    <>
    <div className='py-3 px-12 my-8'>
        <div className='flex text-wrap gap-4 items-center my-6 '>
            <Image src={call} alt='Call_icon' height={30} width={40} className='bg-gray-300  p-1 h-fit'></Image>
            <p>+92-317-1243983</p>
        </div>
        <div className='flex text-wrap gap-4 items-center my-6 '>
        <Image src={email} alt='email_icon' height={30} width={40} className='bg-gray-300  p-1'></Image>
            <Link href="https://www.gmail.com" target='_blank'  className='hover:text-[#FA6E00]'>shuzaifa32@gmail.com</Link>
        </div>
        <div className='flex text-wrap gap-4 items-center my-6 '>
        <Image src={linkedin} alt='linkedin_icon' height={30} width={40} className='bg-gray-300  p-1'></Image>
        <Link href="https://www.linkedin.com/in/s-huzaifa" target='_blank ' className='hover:text-[#FA6E00]'>https://www.linkedin.com/in/s-huzaifa</Link>
        </div>
        <div className='flex text-wrap gap-4 items-center my-6 '>
        <Image src={github} alt='github_icon' height={30} width={40} className='bg-gray-300  p-1'></Image>
        <Link href="https://github.com/Shuzaifa12" target='_blank ' className='hover:text-[#FA6E00]'>https://github.com/Shuzaifa12</Link>
        </div>
        <div className='flex text-wrap gap-4 items-center my-6 '>
        <Image src={loc} alt='loc_icon' height={30} width={40} className='bg-gray-300  p-1'></Image>
        <p>Karachi, Pakistan</p>
        </div>
    </div>

    </>
  )
}

export default Contact