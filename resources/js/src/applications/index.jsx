import React from 'react'
import Applications from './applications';
import ToDoList from './todolist/todolist';
import StockManagerLogin from './stockmanager/login';
import StockManagerRegister from './stockmanager/register';
import StockManagerIndex from './stockmanager/index';

import { Routes, Route } from "react-router-dom";

function ApplicationIndex(){
    
    return(
        <div>
            <Applications/>
            <Routes>
                <Route path="/todolist" element={<ToDoList />} />
                <Route path="/stockmanager/login" element={<StockManagerLogin />} />
                <Route path="/stockmanager/register" element={<StockManagerRegister />} />
                <Route path="/stockmanager/index" element={<StockManagerIndex />} />
            </Routes>
        </div>
    );
}

export default ApplicationIndex