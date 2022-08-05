import React, {useState} from 'react'
import axios from"axios";
import { NavLink, useNavigate} from "react-router-dom";
import Index from './index';

function Login(){
    // useState variables for logging in 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const api = axios.create({
        baseURL: ''
    })

    const sendLogin = async(loginObj) => {
        await api.post('/api/index', loginObj)
            .then( res => {
                console.log(res.status);
                if(res.status == 201){  
                    alert('Login successful');
                    useNavigate(<Index/>);
                }
                else{
                    alert('Login failed');
                }
            })
            .catch(error => {
                console.log(error + " unable to login, 401 means login wrong?");
            })
    }

    function handleLogin(event){
        event.preventDefault();
        const loginObj = {email: email, password: password};
        sendLogin(loginObj);
    }

    function handleChange(event){
        const { value, name } = event.target;
        if(name === "email"){
            setEmail(value);
        }
        if(name === "password"){
            setPassword(value);
        }
    }

    return(
        <div>
            <form onSubmit={handleLogin}>
            <h3>Enter in your login details</h3>
            <label>
                <p>Email</p>
                <input type="text" name="email" onChange={handleChange} value={email} />
            </label>
            <label>
                <p>Password</p>
                <input type="password" name="password" onChange={handleChange} value={password} />
            </label>
            <label><p></p>
            <input type="submit" value="Login" />
            </label>
            </form>
            <NavLink className="center-links" to="/apps/register">Register a new account</NavLink>
            </div>
    );
}

export default Login