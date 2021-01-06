import React from 'react';
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Technologies from './components/Technologies'

function App() {
  return (
    <>
      
      <NavBar />
      <Header />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
