import React, { useState, useEffect } from 'react'
import axios from "axios";
import List from './list'

function ToDoList(){
    const [todo, setTodo] = useState("");
    const [list, setList] = useState([]);
    const [updated, setUpdated] = useState(true);
    const [currentTime, setCurrentTime] = useState("");

    const api = axios.create({
        baseURL: ''
        //baseURL: process.env.APP_URL || 'http://127.0.0.1:8000'
    })

    //function to call api with an async() method
    const getList = async() => {
        //get api, to get all lists with axios.  When getting the api, .then check the response
        await api.get('/api/todolist').then(res=>{
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
        await api.post('/api/todolist/add' , { value: todo }).then(res => {
            if(res.status == 201){
                setUpdated(true);
            }
        }).catch(err=>{
            console.log(err);
        });

    }

    const removeTodo = async(id) => {
        await api.delete(`/api/todolist/remove?id=${id}`).then(res => {
            console.log(res.status)
            if(res.status == 200){
                setUpdated(true);
            }
        }).catch(err => {
            console.log(err);
        });
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

    function getCurrentTime(){
        var current = newDate();
        alert(current);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                    <h4>Enter your To Do</h4>
                    <textarea className="textarea-size button-display"
                        name="value" 
                        value={todo} 
                        onChange={handleChange}
                    />
                    <input type="submit" name="submit" value="Add To Do"/>
                <ul>
                    <List list={list} clickDelete={handleDelete} />
                </ul>
            </form>
        </div>
    )
}

export default ToDoList