import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Photography from './components/Photography';
import Skills from './components/Skills';
import Footer from './components/Footer'




ReactDOM.render(
  <React.StrictMode>
    <App />
    <Hero/>
    <Skills/>
    <Projects/>
    <Photography/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
