import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar   from './components/Navbar/Navbar';
import Home     from './pages/Home/Home';
import Store    from './pages/Store/Store';
import LiveExam from './pages/LiveExam/LiveExam';
import Contact  from './pages/Contact/Contact';
import Login    from './pages/Login/Login';
import Signup   from './pages/Signup/Signup';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"             element={<Home />} />
        <Route path="/store"        element={<Store />} />
        <Route path="/live-exam"    element={<LiveExam />} />
        <Route path="/contact"      element={<Contact />} />
        <Route path="/login/:type"  element={<Login />} />
        <Route path="/signup/:type" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
