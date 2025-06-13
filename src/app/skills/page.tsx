
import { client } from "@/sanity/lib/client";
import React from 'react';
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default async function Skills () {

  const query = `*[_type == "Skills"]`
  const skills = await client.fetch(query, {}, { cache : "no-cache" }

  return (
    <>
      <div className="my-8 px-4 sm:px-10 py-4 flex flex-wrap justify-center sm:justify-evenly md:justify-start gap-4">
        {skills.map((s: any, index: number) => (
          <div
          key={index}
          className="border-2 border-[#FA6E00] px-4 py-3 w-full sm:w-[45%] md:w-[30%] lg:w-[18%] flex flex-col items-center rounded-md "
        >
          <Image
            src={urlFor(s.image).url()}
            alt={s.name || 'Skill Image'}
            width={60}
            height={60}
            className="my-2 p-1 rounded-md bg-slate-100"
          />
          <p className="font-bold text-lg sm:text-xl text-center break-words">{s.name}</p>
          </div>
        ))}
      </div>
    </>
  )
}
