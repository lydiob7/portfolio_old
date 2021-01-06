import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './components/GlobalStyle'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle>
    <p>Tu vieja</p>
      <App />
    </GlobalStyle>
  </React.StrictMode>,
  document.getElementById('root')
);

