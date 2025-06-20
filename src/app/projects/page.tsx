import React from 'react';
import Image from 'next/image';
import { client } from "@/sanity/lib/client";
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';

export default async function Projects() {
  const query = `*[_type == "Projects"]`;
  const data = await client.fetch(query, {}, { cache: 'no-store' });

  return (
    <div className="my-8 px-4 sm:px-10 py-4">
      <div className="flex flex-wrap justify-center sm:justify-between gap-6">
        {data.map((p: any, index: number) => (
          <div
            key={index}
            className="border-2 border-white rounded-md w-full sm:w-[45%] md:w-[30%]  p-4 shadow-md flex flex-col"
          >
            <h2 className="text-center text-lg font-bold text-[#FA6E00] mb-2">{p.name}</h2>

            <div className="flex justify-center mb-4">
              <Image
                src={urlFor(p.image).url()}
                alt={p.name}
                width={400}
                height={400}
                className="rounded-md"
              />
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-[#FA6E00]">Description</h3>
              <p className="text-justify">{p.description}</p>
            </div>

            <div className="mt-auto">
              <h3 className="font-bold text-[#FA6E00]">Live Link</h3>
              <Link
                href={p.projectLink}
                target="_blank"
                className="text-blue-600 hover:underline break-words"
              >
                {p.projectLink}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}