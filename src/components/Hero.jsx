import React from "react";
import heroimg from "../assets/heroimg.png";
import backgroundImage from "../assets/homeimg.webp";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "../animation.js";
const Hero = () => {
  return (
    <>
      <div
        id="hero"
        className="bg-black w-full lg:h-[700px] h-fit m-auto pt-[60px] lg:pt-[0] lg:px-[150px] px-[20px] flex justify-between items-center lg:flex-row flex-col lg:gap-6 gap-[50px] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="lg-w-[60%] w-full flex flex-col justiy-content items-start lg-gap-8 gap-4"
        >
          <motion.h1
            variants={slideUpVariants}
            className="text-yellow-500 text-2xl"
          >
            we are Builders
          </motion.h1>
          <motion.h1
            variants={slideUpVariants}
            className="text-white uppercase text-[50px] font-bold"
          >
            We will build your dream
          </motion.h1>
          <div className="bg-yellow-500 w-[120px] h-[6px]"></div>
          <p className="text-white text-[20px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima,
            amet! Iste laudantium maiores consectetur, impedit quis rem! Iste,
            rem saepe.
          </p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variant={zoomInVariants}
            className="flex justify-center items-center gap-5"
          >
            <motion.button
              variant={zoomInVariants}
              className="bg-yellow-500 hover:bg-white hover:text-black px-10 py-5 rounded-lg text-black font-bold uppercase"
            >
              Read more
            </motion.button>
            <motion.button
              variant={zoomInVariants}
              className="border-white border-2  px-10 py-5 rounded-lg font-bold uppercase hover:border-yellow-500 text-white hover:text-yellow-500"
            >
              Reach Us
            </motion.button>
          </motion.div>
        </motion.div>
        <div className="w-[40%] flex flex-col justify-end items-end">
          <motion.img
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            src={heroimg}
            className="lg:h-[600px] h-[300px] lg:mb-[-100px]"
            alt="hero image"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
