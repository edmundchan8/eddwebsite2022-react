import React, {useState} from 'react'
import axios from"axios";
import { NavLink, useNavigate } from "react-router-dom";
import Index from './index';

function Login(){
    const navigate = useNavigate();
    // useState variables for logging in 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState('');

    const api = axios.create({
        baseURL: '',
        headers: {
            'Accept': 'application/json',
        },
        withCredentials: true,
    })

    const sendLogin = async(loginObj) => {
        await api.get('/sanctum/csrf-cookie').then(response => {
            api.post('/api/login', loginObj)
            .then( res => {
                console.log(res.status);
                if (res.status == 200){
                    navigate("/apps/stockmanager/index");
                }
            })
            .catch(error => {
                console.log(error);
                if(error.response.status == 401){
                    setErrors(error.response.data.message);
                }
                if(error.response.status == 422){
                    setErrors(error.response.data.message);
                }
                if(error.response.status == 500){
                    setErrors(error.response.data.message);
                } else {
                    console.log(error.response.data.message + " uncaught error");
                }
            })
        });
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
            <p>{errors}</p>
            </label>
            </form>
            <NavLink className="center-links" to="/apps/stockmanager/register">Register a new account</NavLink>
            </div>
    );
}

export default Login