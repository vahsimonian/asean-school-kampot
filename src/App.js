import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import TeachingProgram from './components/TeachingProgram';
import Contacts from './components/Contacts';
import More from './components/MoreInfo';
import SharedLayout from './pages/SharedLayout';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index component={<Home />} />
            <Route path="/about" component={<About />} />
            <Route path="/blog" component={<Blog />} />
            <Route path="/teachingprogram" component={<TeachingProgram />} />
            <Route path="/contacts" component={<Contacts />} />
            <Route path="/more" component={<More />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
