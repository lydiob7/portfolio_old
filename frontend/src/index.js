import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LanguageContextProvider } from './hooks/languageContext'

ReactDOM.render(
  <React.StrictMode>
    <LanguageContextProvider>
      <App />
    </LanguageContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

