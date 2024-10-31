import React from 'react'
import {motion} from 'framer-motion'
import { slideUpVariants, zoomInVariants } from "../animation.js";

const Contact = () => {
  return (
    <>
      <div id='contact' className='w-full bg-white'>
      <div className='py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px] lg:w-[80%] w-[90%] m-auto' >
            <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className='flex flex-col justify-center items-start gap-6 w-full lg:w-[60%]'>
                <motion.h1
                variants={slideUpVariants} className='text-yellow-500 text-2xl uppercase'>
                  Contact US
                </motion.h1>
                <motion.h1
                variants={slideUpVariants} className='uppercase text-[40px] font-bold'>
                  Reach us for any queries...
                </motion.h1>
                <div className='w-[120px] h-[6px] bg-yellow-500'></div>
                <p className='text-3xl italic text-gray-50 mt-[60px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aut porro facilis?</p>
               
            </motion.div>
            <motion.div
                initial='hidden'
                whileInView='visible'
                variants={slideUpVariants}
                className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'>
                  <motion.form
                  initial='hidden'
                  whileInView='visible'
                  variants={slideUpVariants}
                  className='flex flex-col justify-center items-start gap-4 w-full'>
                      <input type="text" placeholder='Enter Fullname' className='px-6 py-3 border-[2px] border-gray-500 text-black rounded-lg w-full outline-none' />
                      <input type="text" placeholder='Enter Email' className='px-6 py-3 border-[2px] border-gray-500 text-black rounded-lg w-full outline-none' />
                      <input type="text" placeholder='Enter Mobile Number' className='px-6 py-3 border-[2px] border-gray-500 text-black rounded-lg w-full outline-none' />
                      <textarea name="" placeholder='Enter your message' id="" className='px-6 py-3 border-[2px] border-gray-500 text-black rounded-lg w-full outline-none'></textarea>
                      <motion.button
                      variants={zoomInVariants} className='bg-yellow-500 hover:bg-black hvoer:text-white uppercase w-full py-2 rounded-lg font-semibold '>Submit</motion.button>
                  </motion.form>
            </motion.div>
        </div>
      </div>
        
    </>
  )
}

export default Contact