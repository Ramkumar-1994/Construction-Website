import React from 'react'
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "../animation.js";
import { planning } from '../export.js'

const Working = () => {
  return (
    <>
       <div className="w-full bg-white" id='working'>
        <motion.div
        initial='hidden'
        whileInView='visible'
        variants={slideUpVariants}className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'>
          <motion.h1
          variants={slideUpVariants} className='text-yellow-500 text-2xl uppercase'>
            Step by step
          </motion.h1>
          <motion.h1
          variants={slideUpVariants} className='text-[40px] font-bold uppercase text-black text-center'>
            How it's working
          </motion.h1>
          <motion.div
          variants={slideUpVariants}
          className='w-[120px] h-[6px] bg-yellow-500'>
          </motion.div>

          <motion.div
          initial='hidden'
          whileInView='visible'
          variants={zoomInVariants}
          className='w-full grid lg:grid-cols-4 grid-cols-1 items-start gap-[20px] justify-center mt-[30px]'>
            {
              planning.map((items,index)=>
              {
                return <div key={index} className='flex flex-col justify-center items-center gap-5 border-2 border-yellow-500 rounded-md p-6'>
                  <div>
                  <items.icon className='size-[80px] bg-yellow-500 hover:bg-black hover:fill-white p-4 rounded-full cursor-pointer'/>
                  </div>
                  <h1 className='text-2xl font-bold uppercase'>{items.title}</h1>
                  <p className='text-[20px] text-center'>{items.about}</p>
                </div>
              })
            }

          </motion.div>
          
          
        </motion.div>
      </div>
    </>
  )
}

export default Working