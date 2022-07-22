import React, { useState, useEffect } from 'react'
import axios from "axios";
import List from './list'

function ToDoList(){
    const [todo, setTodo] = useState("");
    const [list, setList] = useState([]);
    const [updated, setUpdated] = useState(true);

    const api = axios.create({
        baseURL: 'http://127.0.0.1:8000/api'
    })

    //function to call api with an async() method
    const getList = async() => {
        //get api, to get all lists with axios.  When getting the api, .then check the response
        await api.get('/todolist').then(res=>{
            //if response is good (200), get data in the response
            if(res.status==200){
                //set response.data to dataArr
                var dataArr = res.data;

                //loop through data array to get each list item
                dataArr.forEach(element => {
                    //each list item is element.list
                    setList(prevValue => {
                        return( [...prevValue, [element.id, element.list]]);
                    })
                });
            }
          }).catch(err=>{
              console.log(err)
          });
    };

    const addTodo = async() => {
        let res = await api.post('/todolist/add' , { value: todo });
        setUpdated(true);
    }

    const removeTodo = async(id) => {
        let res = await api.delete(`todolist/remove?id=${id}`);
        setUpdated(true);
        
    }

    useEffect( () => {
        if(updated){
            setList([]);
            getList();
            setUpdated(false);
        }
    }, [updated]);


    function handleChange(event){
        setTodo(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        if (todo != ''){
            addTodo();
            setTodo('');
        }
    }

    function handleDelete(id){
        removeTodo(id);
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