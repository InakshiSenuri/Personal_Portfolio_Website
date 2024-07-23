"use client";
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { projectsData } from '@/lib/data';
import { FaChevronLeft, FaChevronRight, FaEye, FaGithub } from "react-icons/fa";
import Image from 'next/image';
import { useActiveSectionContext } from '@/context/active-section';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: 200,
  },
  animate: (index:number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.12 * index,
      type: "tween",
    }
  }),
};

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.75
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + projectsData.length) % projectsData.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % projectsData.length;
    setCurrentIndex(newIndex);
  };

  const getVisibleProjects = () => {
    const visibleCount = isMobile ? 1 : 3;
    const startIndex = currentIndex;
    const endIndex = (currentIndex + visibleCount) % projectsData.length;

    if (endIndex > startIndex) {
      return projectsData.slice(startIndex, endIndex);
    } else {
      return [...projectsData.slice(startIndex), ...projectsData.slice(0, endIndex)];
    }
  };

  return (
    <section ref={ref} id="projects" className='scroll-mt-[110px]'>
      <div className='flex flex-col items-center justify-center my-[130px] relative'>
        <div className='flex flex-col items-center justify-center mb-[40px]'>
          <div className='text-[26px] md:text-[36px] text-[#462C2C] font-bold'>PROJECTS</div>
          <div className='text-[16px] md:text-[20px] text-[#EA8A8A] mt-[10px]'>THAT I'VE DEVELOPED / WORKED ON</div>
        </div>
        <div className='flex gap-[20px] md:gap-[30px] justify-center items-center'>
          <div className='text-xl md:text-3xl flex items-center justify-center rounded-full shadow-md bg-white h-[30px] w-[30px] md:h-[50px] md:w-[50px] hover:shadow-lg hover:shadow-[#eecdcd] cursor-pointer'>
            <button onClick={prevSlide}><FaChevronLeft /></button>
          </div>

          <div className='flex md:gap-[40px]'>
            {getVisibleProjects().map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeInAnimationVariants}
                initial="initial"
                animate="animate"
                custom={index}
                className='md:h-[460px] h-[400px] md:w-[310px] w-[250px] bg-white rounded-lg p-[15px]'>
                <div className='md:w-[280px] md:h-[230px]'>
                  <Image src={project.imageUrl} alt={project.title} width={280} height={200} />
                </div>
                <div className='text-[18px] mt-[40px] md:mt-[10px] text-[#462C2C] font-semibold flex justify-center'>{project.title}</div>
                <div className='flex flex-wrap justify-center mt-[10px] h-[50px]'>{project.tags.map((tag) => (<span key={tag} className='text-[14px] text-[#898C8B] font-normal'>{tag} </span>))}</div>
                <div className='flex flex-row justify-around mt-[10px] h-[40px]'>
                  <div className='text-3xl flex items-center justify-center rounded-full shadow-md bg-[#EBD5D54D] h-[40px] w-[40px] hover:shadow-lg hover:shadow-[#eecdcd] cursor-pointer'><button><FaGithub /></button></div>
                  <div className='text-3xl flex items-center justify-center rounded-full shadow-md bg-[#EBD5D54D] h-[40px] w-[40px] hover:shadow-lg hover:shadow-[#eecdcd] cursor-pointer'><button><FaEye /></button></div>
                </div>
                <div className='flex flex-row justify-center mt-[25px] text-[13px] text-[#EA8A8A] font-normal'>{project.Type}</div>
              </motion.div>
            ))}
          </div>

          <div className='text-xl md:text-3xl shadow-md rounded-full bg-white h-[30px] w-[30px] md:h-[50px] md:w-[50px] flex items-center justify-center hover:shadow-lg hover:shadow-[#eecdcd] cursor-pointer'>
            <button onClick={nextSlide}><FaChevronRight /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
