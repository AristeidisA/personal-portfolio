import React from "react";
import { animate, motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiWordpress,
  SiElementor,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiReact,
} from "react-icons/si";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies() {
  return (
    <div className="pb-24 pt-24 -z-10 size-full bg-transparent rounded-lg p-1">
      <motion.h1
        className="my-20 text-center text-4xl"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -60 }}
        transition={{ duration: 1.5 }}
      >
        Technologies <span className="text-violet-900">|</span>
      </motion.h1>
      <motion.div
        className="flex flex-wrap items-center justify-center gap-4"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 60 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2  border-violet-900 p-4"
          style={{ boxShadow: "0 0 10px #7c3aed" }}
        >
          <SiHtml5 className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2  border-violet-900 p-4"
          style={{ boxShadow: "0 0 10px #7c3aed" }}
        >
          <SiCss3 className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-violet-900 p-4"
          style={{ boxShadow: "0 0 10px #7c3aed" }}
        >
          <SiJavascript className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-violet-900 p-4"
          style={{ boxShadow: "0 0 10px #7c3aed" }}
        >
          <SiReact className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-violet-900 p-4"
          style={{ boxShadow: "0 0 10px #7c3aed" }}
        >
          <SiTailwindcss className="text-7xl " />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-violet-900 p-4"
          style={{ boxShadow: "0 0 10px #7c3aed" }}
        >
          <SiWordpress className="text-7xl " />
        </motion.div>
        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-violet-900 p-4"
          style={{ boxShadow: "0 0 10px #7c3aed" }}
        >
          <SiElementor className="text-7xl " />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-violet-900 p-4"
          style={{ boxShadow: "0 0 10px #7c3aed" }}
        >
          <SiAdobephotoshop className="text-7xl " />
        </motion.div>
        <motion.div
          variants={iconVariants(6.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-violet-900 p-4 inset-0"
          style={{ boxShadow: "0 0 10px #7c3aed" }}
        >
          <SiAdobeillustrator className="text-7xl " />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
