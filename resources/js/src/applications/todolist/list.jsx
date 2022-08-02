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
            {props.list.map((item, key) => {
                console.log(item);
                const backgroundColor = key%2 === 0 ? {'background':'#DDEED3'} : {'background':''};
                const strikeStyle = {textDecoration: strike[item[0]] ? 'line-through' : 'none'};

                return <div key={item[0]}>
                        <small className="date-stamp">{item[2]}</small>
                        <li 
                        key={item[0]}
                        style={{...backgroundColor, ...strikeStyle}}
                        onClick={() => {handleStrike(item[0])} 
                        }>{item[1]}</li>
                        <p className="small-border"></p>
                        {strike[item[0]] ? <button onClick={() => {handleDelete(props.clickDelete, item[0])}}>Delete</button> : ''}
                        
                    </div>
                })}
        </div>
    );
}

export default List