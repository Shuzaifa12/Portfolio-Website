import React from 'react';
import Image from 'next/image';
import image1 from './image1.png';
import { client } from '@/sanity/lib/client';

export default async function About () {
  const query = `*[_type == "About_Description"]`;
  const data = await client.fetch(query, {}, { cache : 'no-store' });

  return (
    <>
    <div className='py-3 px-12'>
      <div className='block sm:flex sm:justify-between my-8'>
        <div className='flex justify-center bg-[#1d1d1d53] rounded-full'>
            <Image src={image1} alt='loading' height={200} width={400}></Image>
        </div>
        <div className='text-center my-6 sm:w-[60%] sm:p-2 '>
        
          {data.map((d:any , index:number)=>(
            <div key={index}>
              <p className='sm:text-justify lg:text-2xl'>{d.description}</p>
            </div>
          ))}
      
        </div>
      </div>

    </div>
    </>
  )
}
