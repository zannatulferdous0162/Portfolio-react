import React from 'react';
import bgImages from '../../assets/image/profile2.png';
import { FaGithub,FaLinkedinIn,FaCheck } from 'react-icons/fa';
const About = () => {
    return (
        <div className='py-10'>
            <h2 className='text-center text-3xl py-2 font-semibold'>About Us</h2>
            
            <div className="flex flex-col md:flex-row-reverse md:space-x-4 items-center py-5">
        <div className="flex-1 lg:px-3" id='about-us'>
     <p className='text-orange-400 font-bold'>Hello There, I am</p>
          <h2 className='text-3xl py-3'>Zannatul Ferdous  <span className='text-orange-400 font-bold'>Sheikh</span></h2>
          <p className="mt-2 font-semibold">
          I'm a frontend developer specializing in React.js. I also work with Node.js, Express.js, and MongoDB. Passionate about building efficient and scalable web applications.
        </p>

        <ul className="mt-4 text-left">
        <li className='flex items-center gap-2'><FaCheck /><span className='font-bold'>React.js</span> JavaScript library for UI development</li>
        <li className='flex items-center gap-2'><FaCheck /><span className='font-bold'>Node.js</span>,<span className='font-bold'>Express.js</span> for backend development</li>
        <li className='flex items-center gap-2'><FaCheck /><span className='font-bold'>MongoDB</span> for database management</li>
      </ul>
      <div className='mt-3'>
        <a href="https://github.com/zannatulferdous0162" target='_blank'>
          <button className='btn rounded-full bg-orange-500 hover:bg-orange-500 btn-md text-white'>
            <FaGithub />
          </button>
        </a>
        <a href="https://www.linkedin.com/in/zannatul-ferdous-sheikh/" target='_blank'>
          <button className='btn rounded-full btn-md bg-orange-500 hover:bg-orange-500 text-white ml-2'>
            <FaLinkedinIn />
          </button>
        </a>
      </div>
        </div>
        <div className="flex-1">
          <img src={bgImages} alt="" className="w-full md:w-1/2 h-auto mx-auto" />
        </div>
      </div>
        </div>
    );
};

export default About;