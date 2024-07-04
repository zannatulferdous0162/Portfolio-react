import React from 'react';
import bgImages from '../../assets/image/my-bg33.png';
import Cv from '../../assets/cv/CV Resume.pdf';
const HeroSection = () => {

    return (
     <div className=' py-28 flex flex-col items-center'>
           <div className="flex flex-col md:flex-row md:space-x-4 items-center">
        <div className="flex-1 lg:px-3">
          <h2 className='text-3xl py-3'>Hi I'm <span className='text-orange-400 font-bold'>Zannatul</span></h2>
          <p className="mt-2 font-semibold">
          I'm a frontend developer specializing in React.js. I also work with Node.js, Express.js, and MongoDB. Passionate about building efficient and scalable web applications.
        </p>
<a href={Cv} download="resume.pdf"><button className='btn rounded-full bg-orange-500 hover:bg-orange-500 text-white mt-3'>Download Resume</button></a>
        </div>
        <div className="flex-1">
          <img src={bgImages} alt="" className="w-full md:w-1/2 h-auto mx-auto" />
        </div>
      </div>
     </div>
      
      
     
    );
};

export default HeroSection;