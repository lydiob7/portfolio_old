import React, {useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import 'antd/dist/antd.css'
import { Switch } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
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
  const [colorTheme, setColorTheme] = useState('light')

  const changeTheme = (checked) => {
    switch(colorTheme) {
      case 'dark':
        setColorTheme('light')
        break
      case 'light':
        setColorTheme('dark')
        break
      default: 
        break
    }
    
  }

  return (
    <Router>
      <Theme color={colorTheme}>
        <GlobalStyle />
        <NavBar />
        <div id="switch">
          <FontAwesomeIcon icon={faMoon} className="icon"/>
          <Switch onChange={changeTheme} data-toggle="tooltip" data-placement="left" title="Light/Dark"/>
        </div>
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
