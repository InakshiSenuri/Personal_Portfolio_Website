"use client";
import React , { useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useActiveSectionContext } from '@/context/active-section';
import { useInView } from 'react-intersection-observer';

export default function Intro() {
    const {ref, inView} = useInView(
        {
          threshold: 0.75
        }
      );
      const {setActiveSection, timeOfLastClick} = useActiveSectionContext();
    
      useEffect(() => {
        if(inView && Date.now() - timeOfLastClick > 1000) {
          setActiveSection("Home");
        }
      },[inView, setActiveSection, timeOfLastClick]);
    return (
      <section id="home" ref={ref} className='mb-[100px] min-w-screen relative scroll-mt-[110px]'>
          <div className='flex flex-col-reverse md:flex-row items-center justify-center 3xl:mt-[170px] lg:mt-[130px] mx-auto gap-[100px] sm:[50px] lg:gap-[200px] mt-[100px]'>
              <motion.div initial={{ opacity: 0 ,y: 100}} animate={{ opacity: 1 ,y: 0}} transition={{duration: 0.4 ,type:"tween"}}>
                  <div className='text-[26px] lg:text-[36px] font-semibold text-[#EA8A8A]'>Hello, I’m  Senuri Inakshi,</div>
                  <div className='text-[34px] lg:text-[47px] font-bold text-[#462C2C]'>Fullstack Developer</div>
                  <div className='text-[14px] lg:text-[16px] font-normal text-[#685454] w-[300px] md:w-[500px] text-center md:text-justify'>Undergraduate at University of Moratuwa , seeking to apply competent development skills with focus on collaboration and passion</div>
                  <div className='w-full flex justify-center md:justify-start'><a href='/cv.pdf' download={true}><button className='w-[150px] h-[50px] bg-[#EA8A8A] text-white rounded-3xl mt-[20px] lg:mt-[30px] hover:bg-[#685454] transition '>Download CV</button></a></div>
              </motion.div>
              <motion.div initial={{ opacity: 0 ,scale: 0}} animate={{ opacity: 1 ,scale: 1}} transition={{duration: 0.4 ,type:"tween"}} className='flex'>
                  <Image src="/inakshi.jpg" alt="my_pic" width={400} height={500} className='rounded-xl h-[270px] w-[250px] lg:h-[400px] lg:w-[370px] 3xl:h-[500px] 3xl:w-[400px]'/>
              </motion.div>
  
          </div>
  
      </section>
  )
  }
  