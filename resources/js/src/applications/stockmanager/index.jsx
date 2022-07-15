import React, {useState} from 'react'
import Login from './login'

function Index(){

    const [token, setToken] = useState();

    // If token not set, load login page instead of stockmanager code
    if(!token){
        return <Login setToken={setToken} />
      }

    return(
        <div>
            <h1>Welcome to the new Stockmanager page!</h1>
        </div>
    );
}

export default Index