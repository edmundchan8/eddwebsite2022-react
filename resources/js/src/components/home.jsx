import React from 'react'
import Heading from './heading'
import About from './about'
import Languages from './languages'

function Home(){
    return(
        <div>
            <Heading />
            <Languages />
            <About />
        </div>
    )
}

export default Home