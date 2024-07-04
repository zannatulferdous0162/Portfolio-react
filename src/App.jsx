import React from 'react';
import HeroSection from './components/Hero/HeroSection';
import About from './components/About/About';
import Skill from './components/Skill/Skill';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Education from './components/Edu/Education';

const App = () => {
  return (
    <div>
  <HeroSection></HeroSection>
  <About></About>
  <Skill></Skill>
  <Projects></Projects>
  <Education></Education>
  <Contact></Contact>
    </div>
  );
};

export default App;