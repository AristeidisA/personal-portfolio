import React from "react";
import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      title: "SocieTeQ",
      role: "Web Developer & IT Consultant",
      time: "2025",
      description:
        "At SocieTeQ, I am taking my first steps in integrating AI to enhance digital presence, ensuring it remains seamless and user-friendly. My focus is on exploring new technologies and applying them thoughtfully to improve user experiences while staying true to our mission of technological education and community empowerment. As I navigate this journey, I aim to create intuitive and impactful solutions that make technology more accessible and beneficial for everyone.",
    },
    {
      title: "P-Consulting.gr",
      role: "Web Developer & Designer",
      time: "2023 - 2024",
      description:
        "I have developed and managed e-learning platforms and websites for European projects using WordPress, ensuring dynamic and functional solutions. Alongside web development, I have designed promotional materials—logos, brochures, mockups, and more—using Photoshop and Illustrator to support project dissemination. Additionally, I have contributed to digital transformation by creating tailored websites for clients. My role also included managing social media for European programs, maintaining a consistent online presence, and gathering Google Analytics data to provide insights that support reporting and decision-making.",
    },
  ];

  return (
    <div className="relative pb-4">
      {/* Smooth Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-violet-900 to-neutral-400 animate-gradient"></div>

      <motion.h1
        className="my-20 text-center text-4xl"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -60 }}
        transition={{ duration: 1.5 }}
      >
        Experience <span className="text-violet-900">|</span>
      </motion.h1>

      <div className="flex flex-col items-center">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="mb-8 flex items-start flex-col border-violet-900 border-2 rounded-2xl backdrop-blur-sm w-5/5 sm:w-3/5 ml-5 mr-5 p-10"
            style={{ boxShadow: "0 0 10px #7c3aed" }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 60 }}
            transition={{ duration: 1.5 }}
          >
            <div className="w-full text-left flex flex-col">
              <div className="w-full mb-4">
                <h3 className="mb-2 font-semibold text-2xl">
                  {experience.title}
                </h3>
                <h4 className="text-lg text-violet-900">{experience.role}</h4>
                <p className="text-sm text-neutral-400">{experience.time}</p>
              </div>

              <p className="mt-2 text-neutral-400 text-lg">
                {experience.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
