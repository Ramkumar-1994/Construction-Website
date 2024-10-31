import React from 'react'
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "../animation.js";
import {allservices} from '../export.js'
const Services = () => {
  return (
    <>
      <div className="w-full bg-white" id='services'>
        <motion.div
        initial='hidden'
        whileInView='visible'
        variants={slideUpVariants}className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'>
          <motion.h1
          variants={slideUpVariants} className='text-yellow-500 text-2xl uppercase'>
            Special offer
          </motion.h1>
          <motion.h1
          variants={slideUpVariants} className='text-[40px] font-bold uppercase text-black text-center'>
            our best services
          </motion.h1>
          <motion.div
          variants={slideUpVariants}
          className='w-[120px] h-[6px] bg-yellow-500'>

          </motion.div>
          <motion.div
          initial='hidden'
          whileInView='visible'
          variants={zoomInVariants}
          className='w-full grid lg:grid-cols-3 grid-cols-1 items-start gap-[20px] justify-center mt-[30px]'>
            {
              allservices.map((items,index)=>
              {
                return <motion.div key={index}
                variants={zoomInVariants}
                className='flex justify-center items-start gap-5 p-8'>
                  <img src={items.icon} alt="icons" className='w-[80px] border-2 border-yellow-500 hover:bg-yellow-500 rounded-lg p-2'/>
                  <div className='flex flex-col justify-center items-start gap-3'>
                    <h1 className='text-xl font-bold'>{items.title}</h1>
                    <p className='text-[18px] text-gray-400'>{items.about}</p>
                  </div>
                </motion.div>
              })
            }

          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default Services