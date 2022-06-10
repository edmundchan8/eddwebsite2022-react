import * as React from 'react'
import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";
import Index from './index';
import BlogPage from '../pages/blog';
import Applications from '../pages/applications';

function Navigation(){
    return (
        <BrowserRouter>
            <header>
            <title>Edmund Chi Hong Chan</title>
            <p>Edmund Chi Hong Chan</p>
            <p>Web Application Developer</p>
            </header>
            <nav>
                <NavLink to="">Home</NavLink>
                <NavLink to="apps">Applications</NavLink>
                <NavLink to="blog">Blog</NavLink>
            </nav>
            <Routes>
                <Route path="" element={<Index />} />
                <Route path="apps" element={<Applications />} />
                <Route path="blog" element={<BlogPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation