import React, {useState} from 'react'
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import Index from './index';

function Login(){
    const navigate = useNavigate();
    // useState variables for logging in 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState('');

    const api = axios.create({
        baseURL: 'http://localhost:8000',
        withCredentials: true,
    })

    const sendLogin = async(loginObj) => {
        api.get('/sanctum/csrf-cookie').then(response => {
            api.get('/users')
            .then(response => {
                console.log(response);
            });
            
            // api.post('/api/login', loginObj).then( res => {
            //     if (res.status == 200){
            //         //localStorage.setItem('user', JSON.stringify(response.data))
            //         // localStorage.setItem('token', res.data.access_token); 
            //         // navigate("/apps/stockmanager/index");
            //         getUsers();
            //     }
            // })
            // .catch(error => {
            //     //console.log(error);
            //     // if(error.response.status == 401){
            //     //     setErrors(error.response.data.message);
            //     // }
            //     // if(error.response.status == 422){
            //     //     setErrors(error.response.data.message);
            //     // }
            //     // if(error.response.status == 500){
            //     //     setErrors(error.response.data.message);
            //     // } else {
            //     //     console.log(error.response.data.message + " uncaught error");
            //     // }
            // })
        });
    }

    function getUsers() {
        api.get('/api/users')
        // {'Authorization': `Bearer ${localStorage.getItem('token')}`})
        .then(response => {
            console.log(response);
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