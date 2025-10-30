// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import ProjectDetail from './components/Projectdetail';
import Contact from './components/Contact';
import './styles/global.css';
import './styles/retro.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout wraps all routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Default route */}
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="project/:id" element={<ProjectDetail />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
