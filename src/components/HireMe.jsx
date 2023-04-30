import React from 'react';
import { CircularText } from './Icons';
import Link from 'next/link';

const HireMe = () => {
  return (
    <div className="absolute left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto ">
      <div className=" w-40 h-auto flex items-center justify-center relative md:w-24">
        <CircularText className="fill-green-400 animate-spin-slow" />
        <Link
          href="mailto:mohamdyahia@outlook.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  bg-green-400 text-dark shadow-md border border-solid border-green-400 w-20 h-20 rounded-full font-semibold hover:bg-transparent hover:text-green-400 transition md:w-12 md:h-12 md:text-[10px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
