"use client"
import React , { useEffect } from 'react'
import { skillsData } from '@/lib/data'
import Image from 'next/image'
import { animate, motion} from 'framer-motion'
import { useActiveSectionContext } from '@/context/active-section';
import { useInView } from 'react-intersection-observer';

const fadeInAnimationVariants = {
  initial:{
    opacity: 0,
    y: 100,
  },
  animate:(index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.05 * index,
      type: "tween",
    }
  }),
}
export default function Skills() {
  
  const {ref, inView} = useInView(
    {
      threshold: 0.9
    }
  );
  const {setActiveSection, timeOfLastClick} = useActiveSectionContext();

  useEffect(() => {
    if(inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Skills");
    }
  },[inView, setActiveSection, timeOfLastClick]);

  // const ref2 = React.useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll({ target: ref2, offset: ['0 1', '1.33 1'] })
  // const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  

  return (
    <section id="skills"  className='px-[30px] md:px-[100px] my-[150px] relative scroll-mt-[110px]'>
      <div ref = {ref} className='flex justify-center items-center text-[26px] md:text-[40px] text-[#462C2C] font-bold mb-[40px]'>SKILLS</div>
      <div className='flex flex-row  flex-wrap gap-[40px] justify-center items-center'>
      {skillsData.map((data, index) => (
        <motion.div variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{once: true}} custom={index}  key={data.name} className='flex flex-col gap-[20px] justify-center items-center'>
          <div className='bg-white flex justify-center items-center rounded-xl w-[90px] h-[90px]'><Image src={data.icon} alt="icon" width={70} height={70} /></div>
          <div className='text-[14px] md:text-[16px] text-[#898C8B] font-normal'>{data.name}</div>
        </motion.div> 
      ))}
      </div>
    </section>
  )
}
