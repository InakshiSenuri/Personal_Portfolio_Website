
"use client";
import React from 'react';
import { SocialData } from '@/lib/data';

import {motion} from 'framer-motion'

export default function Social() {
  return (
    <motion.div className='w-[100px] h-[185px] flex flex-col gap-3 ' initial={{ opacity: 0 ,x: -50}} animate={{ opacity: 1 ,x: 0}} transition={{duration: 0.4 ,type:"tween"}}>
      {SocialData.map((data) => (
        <a href={data.Link}  key={data.title}>
          <div className='w-[40px] md:w-[60px] flex justify-end py-[6px] px-[8px] bg-[#eba0a0b2] opacity-100 rounded-tr-3xl rounded-br-3xl hover:bg-[#eba0a0] hover:w-[70px] transition cursor-pointer'>
            <div className='text-2xl font-bold text-[#301e1e]'>{data.icon}</div>
          </div>
        </a>
      ))}
    </motion.div>
  );
}
