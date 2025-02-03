// import React from "react";
import { PROJECTS } from "../index";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="relative pb-4  ">
      {/* Smooth Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-violet-900 to-neutral-400 animate-gradient"></div>

      <motion.h1
        className="my-20 text-center text-4xl"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -60 }}
        transition={{ duration: 1.5 }}
      >
        Projects <span className="text-violet-900">|</span>
      </motion.h1>

      <div className="flex flex-col items-center">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap items-center lg:justify-center border-violet-900 border-y-2 border-x-2 rounded-2xl backdrop-blur-sm w-5/5 sm:w-3/5 ml-5 mr-5 p-10"
            style={{ boxShadow: "0 0 10px #7c3aed" }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 60 }}
            transition={{ duration: 1.5 }}
          >
            <div className="w-full lg:w-1/4 pr-3">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg shadow-2xl mb-6 border-2 border-violet-900 p-1 transition-transform duration-400 hover:scale-105"
                width={150}
                height={150}
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4 border-l-2 border-violet-900 p-4">
              <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
              <p className="mb-4 text-neutral-400 text-xl font-normal">
                {project.description}
              </p>
              <span className="flex flex-wrap sm:flex-wrap md:flex-row gap-5 text-sm font-medium">
                {project.technologies.map((tech, i) => (
                  <p key={i}>{tech}</p>
                ))}
              </span>
              <a
                href={project.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-900 mt-4 inline-block hover:text-neutral-400"
              >
                {project.link.name}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
