import React, {useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import 'antd/dist/antd.css'
import { Switch } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { useContextInfo } from './hooks/languageContext'
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

  const { languageCtx } = useContextInfo()

  const changeTheme = (checked) => {
    const options = {
      light: () => setColorTheme('dark'),
      dark: () => setColorTheme('light')
    };
    const set = options[colorTheme];
    set();
  }

  return (
    <Router>
      <Theme color={colorTheme}>
        <GlobalStyle />
        <NavBar />
        <div id="switch">
          {colorTheme === 'light' ? <FontAwesomeIcon icon={faMoon} className="icon"/> :
          <FontAwesomeIcon icon={faSun} className="icon"/>}
          <Switch onChange={changeTheme} data-toggle="tooltip" data-placement="left" title={languageCtx.theme}/>
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
