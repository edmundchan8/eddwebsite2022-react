import React, {useState} from 'react'
import axios from"axios";
import { useNavigate} from "react-router-dom"
import Login from './login';

function Register(){

    // useState variables for registering account
    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    
    const api = axios.create({
        baseURL: ''
    })

    const sendRegister = async(registerObj) => {
        await api.post('/api/register', registerObj)
            .then( res => {
                console.log(res.status);
                if(res.status == 201){
                    alert('registration successful');
                    useNavigate(<Login/>);
                }
                else{
                    alert('registration failed');
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    function handleRegister(event){
        event.preventDefault();
        const registerObj = {name: newName,email: newEmail,password: newPassword};
        sendRegister(registerObj);
    }

    function handleChange(event){
        const { value, name } = event.target;
        
        if(name === "newName"){
            setNewName(value);
        }
        if(name === "newEmail"){
            setNewEmail(value);
        }
        if(name === "newPassword"){
            setNewPassword(value);
        }
    }

    return(
        <div>
            <form onSubmit={handleRegister}>
                <h1>Register</h1>
                <h3>Enter in your login details</h3>
                <label>
                    <p>Name</p>
                    <input type="text" name="newName" onChange={handleChange} value={newName} />
                </label>
                <label>
                    <p>Email</p>
                    <input type="text" name="newEmail" onChange={handleChange} value={newEmail} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" name="newPassword" onChange={handleChange} value={newPassword} />
                </label>
                <label><p></p>
                <input type="submit" value="Register" />
                </label>
            </form>
        </div>
    );
}

export default Register