import Email from './Components/Email';
import Navbar from './Components/Navbar';
import SocialMedia from './Components/SocialMedia';

import Contact from './pages/Contact';
import Home from './pages/Home';

import { React, useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './Components/Footer';
import { useConfigContext } from './common/context/configuration';
import CV from './pages/CV';

export default function App() {
  
  const { theme, language } = useConfigContext();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, [])

  return (
      <div className={`${theme}-theme`}>
        <BrowserRouter>
          <Navbar />
          <SocialMedia />
          <Email />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Contact />} path="/contact" />
            <Route element={<CV />} path="/resume" />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
  );
}