import React from "react";
import { motion } from "framer-motion";

function About() {
  const containerVariants = {
    hidden: { opacity: 1, y: -70 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };
  const LineVariant1 = {
    hidden: { opacity: 0, x: 150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };
  const LineVariant2 = {
    hidden: { opacity: 0, x: -150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };
  return (
    <div className=" border-neutral-900 pb-4 inset-0 size-full bg-transparent rounded-lg pt-40">
      <div className="flex flex-col flex-wrap-reverse">
        <div className="w-full ">
          <motion.div
            initial={{ opacity: 0, y: 80 }} // Start off transparent and below its position
            animate={{ opacity: 1, y: 0 }} // Fade in and move up to its final position
            transition={{
              duration: 1.5, // Animation duration
              ease: "easeOut", // Smooth easing
            }}
            className="flex items-center justify-center pb-28"
          ></motion.div>
        </div>

        <div className="w-full flex justify-center align-middle">
          <motion.div
            variants={LineVariant2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-5 sm:w-10 lg:w-2/5 flex items-center"
          >
            <hr className=" border-1 border-violet-900 w-full" />
          </motion.div>

          <motion.div
            className="flex flex-col items-center w-full md:w-full pb-8 border-violet-900 border-y-2 border-x-2 rounded-2xl backdrop-blur-sm relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div
              className="absolute inset-0 rounded-2xl border-2 border-violet-900 z-[-1] blur-sm opacity-50"
              style={{ boxShadow: "0 0 20px #7c3aed" }}
            ></div>

            <motion.h1
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -60 }}
              transition={{ duration: 1.5 }}
              className="mb-5 text-start text-4xl p-6"
            >
              About Me <span className="text-violet-900">|</span>
            </motion.h1>

            <p className="my-2 max-w-4xl tracking-normal text-justify p-6 text-lg text-neutral-400">
              I am Aris Andrikopoulos a front-end developer with experience in
              creating modern and functional websites. I focus on building
              dynamic websites, delivering sleek and engaging user experiences.
              I am constantly learning and evolving, aiming to create fast and
              efficient projects that are easy to manage. My skills also extend
              to web and graphic design, with the goal of combining aesthetics
              and functionality. I strive to create experiences that are not
              only visually appealing but also interactive and user-friendly,
              with a strong emphasis on performance and quality.
            </p>
          </motion.div>

          <motion.div
            variants={LineVariant1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-5 sm:w-10 lg:w-2/5 flex items-center"
          >
            <hr className=" border-1 border-violet-900 w-full" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
