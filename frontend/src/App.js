import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import 'antd/dist/antd.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import GlobalStyle from './components/GlobalStyle'
import Theme from './components/Theme'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import HeaderSection from './components/HeaderSection'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Technologies from './components/Technologies'

library.add(fab)

function App() {

  return (
    <Router>
      <Theme>
        <GlobalStyle />
        <NavBar />
        <HeaderSection />
        <About />
        <Technologies />
        <Projects />
        <Contact />
        <Footer />
      </Theme>
    </Router>
  );
}

export default App;
