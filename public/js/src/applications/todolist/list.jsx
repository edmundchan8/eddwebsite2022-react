import React, {useState} from "react";

function List(props){

    const [strike, setStrike] = useState({});

    function handleStrike(index){
        setStrike(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
        console.log(strike);
    }

    function handleDelete(delFunc, index){
        handleStrike(index);
        delFunc(index);
    }

    return(
        <div>
            {props.list.map((item, index) => {
                return <div>
                        <li 
                        key={index} 
                        style={{textDecoration: strike[index] ? 'line-through' : 'none'}}
                        onClick={() => {handleStrike(index)} 
                        }>{item}</li>
                        
                        {strike[index] ? <button onClick={() => {handleDelete(props.clickDelete, index)}}>Delete</button> : ''}
                    </div>
                })}
        </div>
    );
}

export default List