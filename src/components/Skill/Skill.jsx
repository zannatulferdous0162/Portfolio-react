import React from 'react';

import html from '../../assets/icon/html.png';
import css from '../../assets/icon/css.png';
import js from '../../assets/icon/Javascript.png';
import bootstrap from '../../assets/icon/bootstrap.png';
import tailwind from '../../assets/icon/tailwind.png';
import react from '../../assets/icon/react.js.png';
import git from '../../assets/icon/git.png';
import github from '../../assets/icon/github.png';
import firebase from '../../assets/icon/firebase.png';
import node_js from '../../assets/icon/node.png';
import express_js from '../../assets/icon/express.png';
import mongoDb from '../../assets/icon/mongoDb.png';

const skills = [
    { src: html, title: "HTML", description: "Markup language for web pages." },
    { src: css, title: "CSS", description: "Stylesheet language for styling." },
    { src: js, title: "JavaScript", description: "Programming language for web." },
    { src: bootstrap, title: "Bootstrap", description: "CSS framework for responsive design." },
    { src: tailwind, title: "Tailwind CSS", description: "Utility-first CSS framework." },
    { src: react, title: "React", description: "JavaScript library for UI development." },
    { src: git, title: "Git", description: "Version control system." },
    { src: github, title: "GitHub", description: "Platform for version control." },
    { src: firebase, title: "Firebase", description: "Platform for web and mobile apps." },
    { src: node_js, title: "Node.js", description: "Node.js is a server-side JavaScript runtime environment." },
    { src: express_js, title: "Express.js", description: "Express.js is a minimal and flexible Node.js web application framework." },
    { src: mongoDb, title: "MongoDB", description: "MongoDB is a document-oriented NoSQL database designed for scalability and flexibility." },
];

const Skill = () => {
    return (
        <div className='my-11' id='skill-tools'>
            <h2 className='text-3xl text-center font-semibold py-2'>Skill and Tools</h2>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 my-3'>
                {skills.map((skill, index) => (
                    <div key={index} className='card bg-base-100 shadow-xl h-60 flex flex-col items-center'>
                        <figure className='flex-shrink-0 p-4'>
                            <img
                                src={skill.src}
                                alt={skill.title}
                                className='h-24'
                            />
                        </figure>
                        <div className="card-body flex-grow flex flex-col items-center text-center py-2">
                            <h2 className="card-title text-lg font-bold mb-1">
                                {skill.title}
                            </h2>
                            <p className='text-sm'>{skill.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skill;
