import { set } from 'lodash';
import React, { useState } from 'react'

function ToDoList(){
    const [todo, setTodo] = useState("");

    function handleChange(event){
        setTodo(event.target.value);
    }

    return(
        <div>
            <h1>To Do List</h1>
            <label>
                <h4>Enter your To Do</h4>
                <input type="text" name="todo" value={todo} onChange={handleChange}/>
            </label>
        </div>
    )
}

export default ToDoList