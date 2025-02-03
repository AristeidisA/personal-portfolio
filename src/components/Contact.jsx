import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const containerVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  return (
    <div className="border-neutral-900 pb-40 inset-0 size-full bg-transparent rounded-lg pt-40 ">
      <div className="flex flex-col items-center">
        {/* Title */}
        <motion.h1
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -60 }}
          transition={{ duration: 1.5 }}
          className="mb-5 text-start text-4xl p-6"
        >
          Let's Talk <span className="text-violet-900">|</span>
        </motion.h1>

        {/* Contact Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-lg text-neutral-400 flex flex-col items-center gap-4"
        >
          <a
            href="mailto:aristeidis.andrikopoulos@gmail.com"
            className="flex items-center gap-2 text-neutral-400 hover:text-violet-400 transition"
          >
            <FaEnvelope className="text-violet-900" />
            <span>aristeidis.andrikopoulos@gmail.com</span>
          </a>

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-violet-900" />
            <span>Patras, Achaia Greece</span>
          </div>
        </motion.div>

        {/* Google Map */}
        <motion.div
          className="w-full max-w-4xl h-96 mt-10 relative rounded-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <iframe
            title="Patras Map"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12594.337860388678!2d21.7276099!3d38.2466391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135e30d267f9a4e9%3A0xa7516b12c4c01dd9!2sPatras!5e0!3m2!1sen!2sgr!4v1645567891234"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="absolute inset-0 bg-violet-900 opacity-10 rounded-lg"></div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
