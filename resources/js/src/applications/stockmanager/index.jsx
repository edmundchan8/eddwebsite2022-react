import React, {useState, useEffect} from 'react'
import axios from "axios";

function Index(){

    const [user, setUsers] = React.useState([]);
    
    const api = axios.create({
        baseURL: 'http://localhost:8000',
        //Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Access-Control-Allow-Origin': '*',
        "Accept": "application/json",
        withCredentials: true,
    })

    React.useEffect(() => {
            api.get('/api/users', {'Authorization': `Bearer ${localStorage.getItem('token')}`}).then(response => {
                setUsers(response.data)
            })
            .catch(error => console.error(error));
    }, []);
    
    const userList = user.map((u) =>
        <li key={u.id}>{u.name}</li>
    );

    return(
    <div>
        <button>Log Out</button>
        <h1>Welcome to the Stockmanager page!</h1>
        <ul>{userList}</ul>
    </div>)
}

export default Index