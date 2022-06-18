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

    return(
        <div>
            {props.list.map((item, index) => {
                return <li 
                    key={index} 
                    style={{textDecoration: strike[index] ? 'line-through' : 'none'}}
                    onClick={() => {handleStrike(index)} 
                    }>{item}</li>
                })}
        </div>
    );
}

export default List