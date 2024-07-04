import React, { useEffect, useState } from 'react';
import { FaGithub,FaLink } from 'react-icons/fa';
const Projects = () => {
    const [projects,setProjects]=useState([])
    
    useEffect(()=>{
        fetch('project.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setProjects(data)
        })
    },[])
    return (
        <div className='my-11'>
            <div>
                <h2 className='text-center text-3xl font-semibold' id='projects'>Projects</h2>

                <div className='grid lg:grid-cols-3 gap-3 mt-7'>

{
    projects.map((project,index)=>(
        <div key={index} className="card bg-base-100 shadow-xl">
  <figure>
    <img
      src={project.image}
      alt="" className='h-[200px]'/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
  {project.project_name}

    </h2>
    <p>{project.description}</p>
    <ul className='flex flex-wrap gap-2 text-orange-400 py-2'>
      {
        project.use_language_and_framework.map(p=>(
            <li>#{p}</li>
        ))
      }
    </ul>
    <div className="card-actions justify-end">
<a href={project.githublink} target='_blank'><button className="badge badge-outline btn rounded-full"><FaGithub></FaGithub></button></a>
      <a target='_blank' href={project.livelink}><button className="badge badge-outline btn rounded-full"><FaLink></FaLink></button></a>
    </div>
  </div>
</div>
    ))
}

                </div>
            </div>
        </div>
    );
};

export default Projects;