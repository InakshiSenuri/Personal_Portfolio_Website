"use client";
import React , { useEffect , useRef} from 'react'
import { useActiveSectionContext } from '@/context/active-section';
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion';
import {handleSubmit} from '@/actions/sendEmail'
import {useFormStatus} from 'react-dom'
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';


export default function Contact() {
     
  const {ref, inView} = useInView(
    {
      threshold: 0.75
    }
  );


  const {setActiveSection, timeOfLastClick} = useActiveSectionContext();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if(inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Contact");
    }
  },[inView, setActiveSection, timeOfLastClick]);

  const handleFormSubmit = async (formData : FormData) => {
    await handleSubmit(formData);
    toast.success('Email sent successfully!');
    if (formRef.current) {
      formRef.current.reset(); // Reset the form fields
    }
  };
  

    return (
      <section id="contact"   className='my-[150px] relative scroll-mt-[110px]'>
          <motion.div ref={ref} initial={{ opacity: 0 }}  transition={{duration: 1 ,type:"tween"}} whileInView={{ opacity: 1 }} className='flex md:flex-row flex-col gap-[40px]  md:max-w-[960px] md:mx-auto bg-white  p-[10px] md:p-[20px] rounded-2xl shadow-md'>
            <div className='flex flex-col gap-[20px] justify-center md:px-[20px]'>
                <div className='flex text-[26px] md:text-[36px] text-[#462C2C] font-bold md:mb-[50px] justify-center'>Reach Me</div>
                <div className='flex flex-col text-[16px] md:text-[20px] text-[#462C2C] font-normal mb-[50px] justify-center items-center text-center'>Hello! Thank you so much for your time! <span className='mt-[30px]'>Feel free to drop me an email through this form if you want to contact me on any occassion.</span>
                </div>
            </div>
            <form ref={formRef} className='flex flex-col bg-[#FFEFEF] items-center px-auto py-[20px] md:p-[40px] gap-[30px] rounded-xl' 
            action={async (formData) => {
              handleFormSubmit(formData);
            }}>
                <div>
                    <div className='text-[18px] text-[#462C2C] font-semibold'>Name</div>
                    <div><input type="text" name='name' placeholder='Enter your name' maxLength={500} required  className='md:w-[380px] w-[250px] p-[10px] rounded-2xl'/></div>
                </div>
                <div>
                    <div className='text-[18px] text-[#462C2C] font-semibold'>Email</div>
                    <div><input type="email" name='email' placeholder='Enter your email' maxLength={500} required  className='md:w-[380px] w-[250px] p-[10px] rounded-2xl'/></div>
                </div>
                <div>
                    <div className='text-[18px] text-[#462C2C] font-semibold'>Message</div>
                    <div><textarea name='description' placeholder='Your Message' maxLength={5000} required className='md:w-[380px] w-[250px] px-[10px] md:pb-[50px] pb-[60px] pt-[10px] rounded-2xl'/></div>
                </div>
                <div className='flex justify-center mb-[40px]'>
                 <SubmitBtn />
                </div>
                
            </form>
          </motion.div>
  
      </section>
  )
}
  