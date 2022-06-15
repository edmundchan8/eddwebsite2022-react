import { set } from 'lodash';
import React, { useState } from 'react'

function ToDoList(){
    const [todo, setTodo] = useState("");
    const [list, setList] = useState([]);

    function handleChange(event){
        setTodo(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        if (todo != ''){
            setList(prevValue => {
                return( [...list, todo])
            })
            console.log(list);
            setTodo('');
        }
    }

    return(
        <div>
            <h1>To Do List</h1>
            <label>
                <h4>Enter your To Do</h4>
                <input type="text" name="value" value={todo} onChange={handleChange}/>
                <input type="submit" name="submit" value="Add To Do" onClick={handleSubmit}/>
            </label>
        </div>
    )
}

export default ToDoList