"use client"

import React, { useEffect } from 'react'
import { experiencesData } from '@/lib/data'
import Image from 'next/image'
import { motion, useTransform } from 'framer-motion'
import { useScroll } from 'framer-motion'
import { useActiveSectionContext } from '@/context/active-section';
import { useInView } from 'react-intersection-observer';

const fadeInAnimationVariants = {
  initial:{
    opacity: 0,
    x: 100,
  },
  animate:(index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.09 * index,
      type: "tween",
    }
  }),
}

export default function Experience() {
  const {ref, inView} = useInView(
    {
      threshold: 0.8
    }
  );
  const {setActiveSection, timeOfLastClick} = useActiveSectionContext();

  useEffect(() => {
    if(inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Experience");
    }
  },[inView, setActiveSection, timeOfLastClick]);

  return (
    <section id="experience" className=' relative md:px-[100px] px-[30px] my-[180px] scroll-mt-[110px]'>
      <div className='flex justify-center text-[26px] md:text-[40px] text-[#462C2C] font-bold mb-[40px]'>EXPERIENCE</div>
      <div ref = {ref} className='grid md:grid-cols-3 grid-col-1 gap-[40px] items-center relative'>
      {experiencesData.map((data,index) => (
        <motion.div variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{once: true}} custom={index}  key={data.title} className='flex flex-row justify-items-start max-w-[400px] rounded-xl gap-[20px] p-[8px] bg-white'>
          <div className='bg-white flex justify-center items-center rounded-xl w-[80px] h-[80px]'><Image src={data.imageUrl} alt="icon" width={60} height={60} /></div>
          <div className='flex flex-col'>
            <div className='text-[14px] md:text-[16px] text-[#462C2C] font-normal'>{data.title}</div>
            <div className='text-[14px] md:text-[16px] text-[#898C8B] font-normal'>{data.Position}</div>
            <div className='text-[14px] md:text-[16px] text-[#EA8A8A] font-normal'>{data.date}</div>
          </div>
        </motion.div> 
      ))}
      </div>
    </section>
  )
}