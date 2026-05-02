
import React, { useState } from "react";
import  CTA  from "../components/CTA";
import {  skills, workExperiences, experiences } from "../constants";
import Expreience from "../components/Expreience";
import { CircleX } from 'lucide-react';
const About = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className='max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)]'>
      <h1 className='sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins'>
        Hello, I'm{" "}
        <span className='bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent font-semibold drop-shadow'>
          {" "}
          Abderrahmane
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-900/60'>
        <p className='description-text'>
        Full-Stack Web Developer delivering secure, scalable, and production-ready web
applications. Experienced in designing and building complete web solutions from backend
architecture to modern, high-performance user interfaces. Focused on writing clean, reliable
code and contributing effectively within development teams.

        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='font-semibold sm:text-3xl text-xl relative font-poppins'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
                <span className='skill-name'>{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='font-semibold sm:text-3xl text-xl relative font-poppins'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p className='description-text'>
          Here's where I'm currently making an impact:
          </p>
        </div>

          <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {workExperiences.map((work) => (
              <Expreience key={`${work.title}-${work.date}`} experience={work} />
            ))}
          </div>
      </div>

      <div className='py-16'>
        <h3 className='font-semibold sm:text-3xl text-xl relative font-poppins'>Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p className='description-text'>
          I’ve earned certifications from NVIDIA, HP, and Udemy, and gained real world experience
          through freelancing. Here’s a quick look at what I’ve accomplished so far
          </p>
        </div>

        <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {experiences.slice(0,4).map((exp) => (
            <Expreience key={`${exp.title}-${exp.date}`} experience={exp} />
          ))}
        </div>

        <div className='mt-6 flex justify-center'>
          <button
            onClick={() => setModalOpen(true)}
            className='px-6 py-2.5 rounded-xl text-white font-semibold shadow-[0_12px_30px_rgba(0,114,255,0.28)] transition-all duration-300 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(0,114,255,0.36)] focus:outline-none focus:ring-2 focus:ring-[#00c6ff] focus:ring-offset-2'
          >
            See all certificates
          </button>
        </div>

        {modalOpen && (
          <div
            className='fixed inset-0  z-50 flex items-center justify-center p-4'
            onClick={() => setModalOpen(false)}
          >
            <div
              className='absolute inset-0 bg-black/50'
            />

            <div
              className='relative z-10 w-full max-w-4xl rounded-2xl bg-white shadow-xl'
              onClick={(e) => e.stopPropagation()}
            >
              <div className='max-h-[90vh] overflow-y-auto p-4 pr-3 pb-6 sm:p-6 sm:pr-5 [scrollbar-gutter:stable]'>
                <div className='mb-4 flex items-center justify-between'>
                  <h3 className='text-lg font-semibold'>All Certificates</h3>
                  <button
                    onClick={() => setModalOpen(false)}
                    className='text-slate-600 hover:text-slate-800'
                  >
                    <CircleX className='w-5 h-5 text-red-600 cursor-pointer' />
                  </button>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                  {experiences.map((exp) => (
                    <Expreience key={`${exp.title}-${exp.date}`} experience={exp} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;

