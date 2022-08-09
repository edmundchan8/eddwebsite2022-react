import React, {useState} from 'react'
import axios from"axios";
import { NavLink, useNavigate } from "react-router-dom";

function Register(){
    // variable navigate to utilize useNavigate hook when redirecting user
    const navigate = useNavigate();
    // useState variables for registering account
    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState("");

    const api = axios.create({
        baseURL: ''
    })

    const sendRegister = async(registerObj) => {
        
        await api.post('/auth/register', registerObj)
            .then( res => {
                console.log(res.status);
                if(res.status == 200){
                    navigate("/apps/stockmanager/login");
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
        if(!newName){
            setErrors("Please enter a name");
            return;
        }
        if(!newEmail){
            setErrors(errors + '\n' + "Please enter an email");
            return;
        }

        if(!newEmail){
            setErrors(errors + '\n' + "Please enter an email");
            return;
        }

        if(!newPassword || !confirmPassword){
            setErrors(errors + '\n' + "Please enter both passwords");
            return;
        }

        if (newPassword != confirmPassword){
            setErrors(errors + '\n' + "Passwords do not match, please try again");
            return;
        }
        const registerObj = {name: newName,email: newEmail,password: newPassword};
        sendRegister(registerObj);
    }

    function handleChange(event){
        const { value, name } = event.target;
        setErrors('')
        if(name === "newName"){
            setNewName(value);
        }
        if(name === "newEmail"){
            setNewEmail(value);
        }
        if(name === "newPassword"){
            setNewPassword(value);
        }
        if(name === "confirmPassword"){
            setConfirmPassword(value);
        }
    }

    return(
        <div>
            <form onSubmit={handleRegister}>
                <h1>Register</h1>
                <h3>Enter in your    details</h3>
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
                <label>
                    <p>Confirm Password</p>
                    <input type="password" name="confirmPassword" onChange={handleChange} value={confirmPassword} />
                </label>
                <label><p></p>
                <input type="submit" value="Register" />
                </label>
                <p>{errors}</p>
            </form>
            <NavLink className="center-links" to="/apps/stockmanager/login">Return to Login</NavLink>
        </div>
    );
}

export default Register