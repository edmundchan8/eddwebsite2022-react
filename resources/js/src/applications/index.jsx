import React from 'react'
import Applications from './applications';
import ToDoList from './todolist/todolist';
import StockManagerLogin from './stockmanager/login';
import StockManagerRegister from './stockmanager/register';
import { Routes, Route } from "react-router-dom";

function ApplicationIndex(){
    
    return(
        <div>
            <Applications/>
            <Routes>
                <Route path="/todolist" element={<ToDoList />} />
                <Route path="/login" element={<StockManagerLogin />} />
                <Route path="/register" element={<StockManagerRegister />} />
            </Routes>
        </div>
    );
}

export default ApplicationIndex