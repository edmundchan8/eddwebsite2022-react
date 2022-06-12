import * as React from 'react'
import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";
import Index from './index';
import BlogPage from '../pages/blog';
import Applications from '../pages/applications';

function Navigation(){
    return (
        <BrowserRouter>
            <nav className="top-nav">
                <NavLink to="" className="nav-spacing">Home</NavLink>
                <NavLink to="apps" className="nav-spacing">Applications</NavLink>
                <NavLink to="blog" className="nav-spacing">Blog</NavLink>
            </nav>
            <Routes>    
                <Route path="" element={<Index />} />
                <Route path="/apps/*" element={<Applications />} />
                <Route path="/blog" element={<BlogPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation