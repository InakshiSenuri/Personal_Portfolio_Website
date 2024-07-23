
"use client"
import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react'
import { useActiveSectionContext } from '@/context/active-section';


export default function About() {

  const {ref, inView} = useInView(
    {
      threshold: 0.75
    }
  );
  const {setActiveSection, timeOfLastClick} = useActiveSectionContext();

  useEffect(() => {
    if(inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("About");
    }
  },[inView, setActiveSection, timeOfLastClick]);
  
  
  return (
    <section id="about" ref={ref} className='relative flex flex-col items-center mt-[100px] h-[700px] w-full scroll-mt-[100px]'>
      <div className='absolute inset-0 bg-cover bg-center opacity-10 -z-10' style={{ backgroundImage: "url('/about.jpg')" }}></div>
      <div  className='relative flex flex-col justify-center items-center z-10 md:p-4 text-center h-full'>
        <h2 className='text-[26px] md:text-[40px] text-[#462C2C] font-bold mb-[40px]'>About Me</h2>
        <p className='text-[16px] md:text-[22px] text-[#462C2C] w-[300px] md:w-[600px]'>
          I am currently pursuing a BSc in Information Technology at the University of Moratuwa. As a full-stack developer, I have a passion for learning new technologies and am particularly interested in the DevOps field.
          My goal is to leverage my skills and knowledge to bridge the gap between development and operations, ensuring efficient and reliable software delivery.
        </p>
      </div>
    </section>
  )
}
