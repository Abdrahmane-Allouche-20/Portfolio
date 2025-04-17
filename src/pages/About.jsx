
import  CTA  from "../components/CTA";
import {  skills } from "../constants";
import Expreience from "../components/Expreience";

const About = () => {
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
        <p>
        Full-Stack Developer based in Algeria, passionate about building dynamic web experiences from front to 
        back. I specialize in React, TypeScript, Node.js, and modern animations crafting fast, responsive, and 
        visually compelling applications with a strong attention to detail and performance.
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
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='font-semibold sm:text-3xl text-xl relative font-poppins'>Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
          I’ve earned certifications from NVIDIA, HP, and Udemy, and gained real world experience
          through freelancing. Here’s a quick look at what I’ve accomplished so far
          </p>
        </div>

        <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6'>
    <Expreience/>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;

