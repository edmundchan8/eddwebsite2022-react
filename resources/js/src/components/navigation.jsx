import * as React from 'react'
import {NavLink} from "react-router-dom";

function Navigation(){
    return (
        <nav className="top-nav">
            <NavLink to="" className="nav-spacing">Home</NavLink>
            <NavLink to="apps" className="nav-spacing">Applications</NavLink>
            <NavLink to="blog" className="nav-spacing">Blog</NavLink>
        </nav>
    )
}

export default Navigation
