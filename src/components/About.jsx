import React from 'react'
import {motion} from 'framer-motion'
import { slideUpVariants, zoomInVariants } from "../animation.js";

const About = () => {
  return (
    <>
        <div className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]' id='about'>
            <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'>
                <motion.h1
                variants={slideUpVariants} className='text-yellow-500 text-2xl uppercase'>
                  welcome to
                </motion.h1>
                <motion.h1
                variants={slideUpVariants} className='text-white uppercase text-[40px] font-bold'>
                  Prime
                    construction
                </motion.h1>
                <div className='w-[120px] h-[6px] bg-yellow-500'></div>
                <p className='text-3xl italic text-gray-50 mt-[60px]'>A building company dedicated to transforming visions into reality, combining expertise with quality craftsmanship</p>
               
            </motion.div>
            <motion.div
                initial='hidden'
                whileInView='visible'
                variants={slideUpVariants}
                className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'>
                  <p className='text-white text-lg text-justify'>Our building company is committed to turning dreams into reality by providing top-notch construction and renovation services. We work closely with clients from concept through completion, ensuring every detail aligns with their vision and standards. With a team of experienced professionals, we handle all aspects of building, from meticulous planning and innovative design to robust construction and flawless finishing. Quality, safety, and customer satisfaction are at the core of our work, using the best materials and practices to deliver lasting results. Whether creating new spaces or enhancing existing ones, we build with excellence, dedication, and integrity.</p>
                
                <motion.button
                variants={zoomInVariants}
                className='bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 uppercase font-bold rounded-lg'>Read More
                </motion.button>
            </motion.div>
        </div>
    </>
  )
}

export default About