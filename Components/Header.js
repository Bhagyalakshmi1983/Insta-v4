import React from "react";
import Image from 'next/image';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";


export default function Header() {
  return (
    <div>
      <div className='flex items-center justify-between max-w-6xl'>
        {/* Left */}
        <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid'>
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5adf4ed996d455fa43a2ffdf/1528311283669-7OGTTIYTDC3WE6ST7VKM/instagram-logo-text-black-png.png?format=1000w"
            layout='fill'
            className='object-contain'
          />
        </div>
        <div className='cursor-pointer h-24 w-10 relative  lg:hidden'>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
            layout='fill'
            className='object-contain'
          />
        </div>
        {/* Middle */}
        <div className="relative mt-1">
          <div className="absolute top-2 left-2">
            <MagnifyingGlassIcon className="h-5 text-gray-500"/>
          </div>
          <input type="text" placeholder="Search" className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"/>
        </div>
        {/* Right */}

        <h1>Right side</h1>
      </div>



    </div>
  );
}
