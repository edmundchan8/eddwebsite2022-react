import React, {useState} from 'react'
import axios from"axios";
import { useNavigate} from "react-router-dom";
import Index from './index';

function Login(){

    // useState variables for logging in 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const api = axios.create({
        baseURL: ''
    })

    const sendLogin = async(loginObj) => {
        await api.post('/api/login', loginObj)
            .then( res => {
                console.log(res.status);
                if(res.status == 201){
                    alert('Login successful');
                    useNavigate(<Index/>);
                }
                else{
                    alert('registration failed');
                }
            })
            .catch(error => {
                console.log(error);
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
            setName(value);
        }
        if(name === "password"){
            setPassword(value);
        }
    }

    return(
        <div>
            <form onSubmit={handleLogin}>        
            <h1>Login</h1>
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

        </div>
    );
}

export default Register