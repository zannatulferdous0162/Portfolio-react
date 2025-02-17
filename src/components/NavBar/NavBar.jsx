import React from 'react';

const NavBar = ({Dark,Light,templete}) => {
    const nav=<>
    <li className='font-semibold'><a href="#">Home</a></li>
    <li className='font-semibold'><a href="#about-us">About Us</a></li>
    <li className='font-semibold'><a href="#skill-tools">Skill And Tools</a></li>
    <li className='font-semibold'><a href="#projects">Projects</a></li>
    <li className='font-semibold'><a href="#edu">Educationa</a></li>
    <li className='font-semibold'><a href="#contact">Contact Us</a></li>
    </>

const toggleDark=()=>{

  Dark()
}
const toggleLight=()=>{

  Light()
}
    return (
        <div>
            <div className="navbar bg-base-100 border-b-2 fixed w-full z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {nav}
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl">I'm <span className='text-orange-400'>Zannatul</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   {nav}
    </ul>
  </div>
  <div className="navbar-end gap-3">

   
{
             !templete?  <button  onClick={toggleDark} className="btn rounded-full bg-white hover:bg-white text-black">  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
           </svg>
           </button> :<button onClick={toggleLight} className="btn rounded-full bg-black hover:bg-black text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
           </svg>
           </button>
   
    }
        
  </div>
 
 
</div>
        </div>
    );
};

export default NavBar;