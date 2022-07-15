import React from 'react'
import { Routes, Route } from "react-router-dom";
import ToDoList from './todolist/todolist';
import StockManager from './stockmanager/index';

function ApplicationLinks(){
    return(
        <Routes>
          <Route path="/todolist" element={<ToDoList />} />
          <Route path="/stockmanager" element={<StockManager />} />
        </Routes>
    );
}

export default ApplicationLinks