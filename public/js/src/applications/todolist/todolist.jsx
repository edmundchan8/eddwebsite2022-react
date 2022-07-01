import React, { useState } from 'react'
import List from './list'

function ToDoList(){
    const [todo, setTodo] = useState("");
    const [list, setList] = useState([]);

    // styling
    

    function handleChange(event){
        setTodo(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        if (todo != ''){
            setList(prevValue => {
                return( [...list, todo])
            })
            setTodo('');
        }
    }

    function handleDelete(id){
        setList(list.filter((item, index) => {
            return index !== id
        }))
    }

    return(
        <div>
            <label>
                <h4>Enter your To Do</h4>
                <input type="text" name="value" value={todo} onChange={handleChange}/>
                <input type="submit" name="submit" value="Add To Do" onClick={handleSubmit}/>
            </label>
            <ul>
                <List list={list} clickDelete={handleDelete} />
            </ul>
        </div>
    )
}

export default ToDoList