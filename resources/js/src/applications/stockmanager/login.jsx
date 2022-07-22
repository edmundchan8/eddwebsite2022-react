import React, {useState} from 'react'

async function Login(){

    // // useState variables for registering account
    // const [newName, setNewName] = useState("");
    // const [newEmail, setNewEmail] = useState("");
    // const [newPassword, setNewPassword] = useState("");
    
    // // useState variables for logging in 
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    
    // let registerObj = {newName, newEmail, newPassword};
    
    // let result = await fetch("http://127.0.0.1:8000/api/register", {
    //     method:'POST',
    //     body: JSON.stringify(registerObj),
    //     headers:{
    //         "Content-Type":"application/json",
    //         "Accept": "application/json"
    //     }
    // });

    // result = await result.json();

    return(
        <div>
            <h1>Register</h1>
            {/* <h3>Enter in your login details</h3>
            <label>
                <p>Name</p>
                <input type="text" name="newName" onChange={(e) => setNewName(e.target.value)} value={newName} />
            </label>
            <label>
                <p>Email</p>
                <input type="text" name="newEmail" onChange={(e) => setNewEmail(e.target.value)} value={newEmail} />
            </label>
            <label>
                <p>Password</p>
                <input type="password" name="newPassword" onChange={(e) => setNewPassword(e.target.value)} value={newPassword} />
            </label>
            <button>Register</button>
            
            <h1>Login</h1>
            <h3>Enter in your login details</h3>
            <label>
                <p>Email</p>
                <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
            </label>
            <label>
                <p>Password</p>
                <input type="text" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            </label>
            <button>Login</button> */}
        </div>
    );
}

export default Login