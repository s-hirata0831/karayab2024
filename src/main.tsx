import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.tsx'
import Contact from './Contact.tsx'
import DrawerAppBar from './Header.tsx'
import Footer from './Footer.tsx';
import Volunteer from './Volunteer.tsx'
import Performer from './Performer.tsx'
import PanfPdf from './components/PanfPdf.tsx'
import NotFound from './NotFound.tsx'
import Radio from './Radio.tsx'
import './firebase';

ReactDOM.createRoot(document.getElementById('root')as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <DrawerAppBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/Performer" element={<Performer />} />
        <Route path="/pdf_panf" element={<PanfPdf />} />
        <Route path="/radio" element={<Radio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
