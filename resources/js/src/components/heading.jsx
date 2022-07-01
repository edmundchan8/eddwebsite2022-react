import React from 'react'
import '../styles/App.css'
import profilePic from '/images/profilePic.jpeg'

function Heading(){
    return(
        <header className='heading'>
            <h1>Edmund Chi Hong Chan</h1>
            <h3>Web Application Developer</h3>
            <p>hi</p>
            <img src={profilePic} className="logo" alt="" />
        </header>
    )
}

export default Heading