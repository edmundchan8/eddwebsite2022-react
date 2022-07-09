import * as React from 'react'
import Home from './home'
import {Routes, Route } from "react-router-dom";
import '../styles/App.css';
import Applications from '../pages/applications';
import BlogPage from '../pages/blog';
import Navigation from './navigation';

function App() {
  return (
    <div  className="app align-middle">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps/*" element={<Applications />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App