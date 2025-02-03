import React from "react";
import { motion } from "framer-motion";
import video from "../assets/blackhole.webm";
import code from "../assets/code.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Hero_2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
      }}
      className="relative text-center px-6 sm:px-16 lg:px-32 py-20 sm:py-28 lg:py-36 overflow-hidden h-screen bg-[#030014]"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0  w-auto min-w-full min-h-full max-w-full"
          style={{ transform: "translateY(50%)", rotate: "180deg" }} // Keeps the half-black-hole view consistent
        >
          <source src={video} type="video/webm" />
        </video>
      </div>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-10 z-1"></div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 0, x: 0, opacity: 0 }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, -50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-2 h-2 bg-purple-500 rounded-full z-4"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        ></motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            ease: "easeOut",
          }}
          className="font-bold tracking-wide text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-slate-100 to-purple-800 bg-clip-text text-transparent text-center mt-24"
        >
          &quot;Driven to innovate, driven to learn, because every project is a
          journey.&quot;
        </motion.h1>

        <div className="h-10"></div>

        {/* Subheading */}
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            delay: 1,
            ease: "easeOut",
          }}
          className="bg-gradient-to-br from-slate-100 to-purple-800 bg-clip-text text-base sm:text-lg lg:text-4xl tracking-tight text-transparent font-semibold text-center px-4 pt-8"
        >
          Welcome to my personal portfolio!
        </motion.span>

        <div className="h-10"></div>

        {/* Image */}
        <motion.div
          className="flex w-32 sm:w-48 lg:w-64 mt-8"
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <img src={code} alt="code-img" className="animate-pulse" />
        </motion.div>

        <div className="h-10"></div>

        {/* Links */}
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            delay: 1.5,
            ease: "easeOut",
          }}
          className="flex justify-between items-center gap-5 bg-gradient-to-br from-slate-100 to-purple-800 bg-clip-text text-sm sm:text-base lg:text-lg text-transparent font-semibold rounded-full p-5 border-purple-950 border-2 shadow-lg mt-10"
          style={{ boxShadow: "0 0 10px #7c3aed" }}
        >
          Connect with me on
          <a
            href="https://www.linkedin.com/in/aris-andrikopoulos-535900229/"
            target="_blank"
            className="transition duration-500 hover:scale-125 text-purple-400 text-xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/AristeidisA"
            target="_blank"
            className="transition duration-500 hover:scale-125 text-purple-400 text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:example@email.com"
            target="_blank"
            className="transition duration-500 hover:scale-125 text-purple-400 text-xl"
          >
            <FaEnvelope />
          </a>
        </motion.span>
      </div>
    </motion.div>
  );
};

export default Hero_2;
