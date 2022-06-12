import * as React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import ToDoList from '../applications/todolist';

function Applications() {
  return (
    <div>
        <h1>List of Applications</h1>
        <div>
          <Link className="center-links" to="todolist">To Do List</Link>
        </div>
        <Routes>
          <Route path="/todolist" element={<ToDoList />} />
        </Routes>
    </div>
  );
}

export default Applications