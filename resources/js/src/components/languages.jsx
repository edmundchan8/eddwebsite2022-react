import React, {useState} from 'react'
import '../styles/App.css';

function Languages(){

    const [projects, setProjects] = useState([ 
        ['c#', 'Orca Conservancy'],
        ['c#', 'See Sharp Project'],
        ['reactjs', 'Website'],
        ['reactjs', 'Other Stuff'],
        ['angular', 'FOW?'],
        ['angular', 'diabetes'],
        ['angular', 'Third One?'],
        ['aspnet', 'VS Studio'],
        ['aspnet', 'FOW2'],
        [ 'aspnet', 'metronome'],
        [ 'php', 'Stocks'],
        [ 'php', 'Personal'],
        [ 'php', 'Gatsby Magic'],
        [ 'python', 'stocks'],
        [ 'python', 'bing'],
        [ 'javascript', 'clock'],
        [ 'javascript', 'fun'],
        [ 'javascript', 'wow'],
        [ 'javascript', 'amazing'],
        [ 'javascript', 'incredible']
    ]);

    const [programmingLanguage, setProgrammingLanguage] = useState('c#');

    function underline(event){
        //border-bottom: 3px solid green;
        setProgrammingLanguage(event.target.name);
    }

    return(
        <div className="language-buttons">
            <ul>
                {projects.map((project, index) =>
                    project[0] == programmingLanguage ? <li key={index} className="languages-list">{project[1]}</li> : ""    
                )}
                    {/* <li key={index}>{filteredLanguage.name}</li> */}
                    {/* )
                )))} */}
            </ul>
            <div>
                <a href="#" onMouseOver={underline} name="c#" >C#</a>
                <a href="#" onMouseOver={underline} name="reactjs" >ReactJS</a>
                <a href="#" onMouseOver={underline} name="angular" >Angular</a>
                <a href="#" onMouseOver={underline} name="aspnet" >ASP.NET</a>
                <a href="#" onMouseOver={underline} name="php" >PHP</a>
                <a href="#" onMouseOver={underline} name="python" >Python</a>
                <a href="#" onMouseOver={underline} name="javascript" >Javascript</a>
            </div>
        </div>
    );
}

export default Languages