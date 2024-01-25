import './App.css';
import './index.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import TeachingProgram from './components/TeachingProgram';
import Contacts from './components/Contacts';
import More from './components/MoreInfo';
import SharedLayout from './pages/SharedLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/teachingprogram" element={<TeachingProgram />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/more" element={<More />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
