import React from 'react'
import Applications from './applications';
import ToDoList from './todolist/todolist';
import StockManager from './stockmanager/index';
import { Routes, Route } from "react-router-dom";

function ApplicationIndex(){
    
    return(
        <div>
            <Applications/>
            <Routes>
                <Route path="/todolist" element={<ToDoList />} />
                <Route path="/stockmanager" element={<StockManager />} />
            </Routes>
        </div>
    );
}

export default ApplicationIndex