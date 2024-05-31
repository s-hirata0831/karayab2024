import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.tsx'
import Contact from './Contact.tsx'
import DrawerAppBar from './Header.tsx'
import Footer from './Footer.tsx';
import Volunteer from './Volunteer.tsx'
import '/firebase';

ReactDOM.createRoot(document.getElementById('root')as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <DrawerAppBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="volunteer" element={<Volunteer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
