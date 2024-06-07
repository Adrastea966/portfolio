// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contacto from './components/Contacto';
import Proyectos from './components/Proyectos';
import SobreMi from './components/SobreMi';
import Servicios from './components/Servicios';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [theme]);

  return (
    <Router>
      <div className={`app ${theme}`}>
        <Navbar setTheme={setTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/sobre-mi" element={<SobreMi theme={theme} />} />
          <Route path="/proyectos" element={<Proyectos theme={theme} />} />
          <Route path="/servicios" element={<Servicios theme={theme} />} />
          <Route path="/contacto" element={<Contacto theme={theme} />} />
        </Routes>
        <Footer theme={theme} />
      </div>
    </Router>
  );
}

export default App;
