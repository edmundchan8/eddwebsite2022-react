import React, {useState} from "react";

function List(props){
    const [strike, setStrike] = useState({});

    function handleStrike(id){
        setStrike(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    }

    function handleDelete(delFunc, id){
        handleStrike(id);
        delFunc(id);
    }

    return(
        <div>
            {props.list.map((item) => {
                return <div key={item[0]}>
                        <li 
                        key={item[0]} 
                        style={{textDecoration: strike[item[0]] ? 'line-through' : 'none'}}
                        onClick={() => {handleStrike(item[0])} 
                        }>{item[1]}</li>
                        
                        {strike[item[0]] ? <button onClick={() => {handleDelete(props.clickDelete, item[0])}}>Delete</button> : ''}
                    </div>
                })}
        </div>
    );
}

export default List