import React from 'react'
import '../styles/App.css'
import profilePic from '/images/profilePic.jpeg'


function Heading(){
    return(
        <div>
            <header className='heading'>
                <h1>Chi Hong Edmund Chan</h1>
                <h3>Web Application Developer</h3>
                <img src={profilePic} className="logo" alt="" />
            </header>   
        </div>
        
    )
}

export default Heading