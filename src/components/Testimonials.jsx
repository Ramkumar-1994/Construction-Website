import React from 'react'
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "../animation.js";
import { clients } from '../export.js'

const Testimonials = () => {
  return (
    <>
      <div className="w-full text-white" id='clients'>
        <motion.div
        initial='hidden'
        whileInView='visible'
        variants={slideUpVariants}className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'>
          <motion.h1
          variants={slideUpVariants} className='text-yellow-500 text-2xl uppercase'>
            Testimonials
          </motion.h1>
          <motion.h1
          variants={slideUpVariants} className='text-[40px] font-bold uppercase text-center'>
            What our Clients says
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
              clients.map((items,index)=>
              {
                return <div key={index} className='flex flex-col justify-center items-center'>
                  <div className='border-2 border-white hover:bg-yellow-500 pb-[100px] pt-[30px]'>
                    <p className="text-white text-lg text-center hover:bg-yellow-500 hover:text-black">{items.about}</p>
                  </div>
                  <div className='flex flex-col justify-center items-center gap-[5px]'>
                    <img src={items.image} alt="client-image" className='mt-[-50px]'/>
                    <h1 className="text-white font-semibold uppercase text-[27px]">{items.name}</h1>
                    <h1 className="text-yellow-500 text-[22px]">{items.post}</h1>
                  </div>
                </div>
              })
            }

          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default Testimonials