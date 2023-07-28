import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Cv from './pages/CV';
import Navbar from './components/Navbar';
import { ConfigProvider } from './shared/context/config';

function AppRoutes() {
  return (
    <BrowserRouter>
    <ConfigProvider>
     <Navbar/>
      <Routes> 
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/cv' element={<Cv/>} />
        <Route path="*" element={<><p>Não encontrada</p></>} />
      </Routes>
      </ConfigProvider>
    </BrowserRouter>
    
    )
}

export default AppRoutes;
