import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Profile from './components/profile/Profile';
import Skills from './components/skills/Skills';
import Education from './components/education/Education';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';


function App() {
  return (
    <div>
      <Profile/>
      <Skills/>
      <Education/>
      <Projects/>
      <Contact/>
    </div>
    
  );
}

export default App;
