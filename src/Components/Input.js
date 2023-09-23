import { useState } from "react";
import "../Styles/Input.css"



function Formulaire(){

const [inputValue,setInputValue]=useState("");
const [list,setList]=useState([]);
const handleClick=()=>{setList((previewList)=>[...previewList,inputValue]);
setInputValue("");
}

   return (
    <div>
        <h1 className="title">Exercice3 React</h1>
    <div className="container">
        <div className="container-form">
            <input type="text" value={inputValue} onChange={(event)=>setInputValue(event.target.value)}/><br/>
            <button onClick={handleClick}>Affichez</button>
        </div>
        <div className="container-output">
            <ul>
                {list.map((mot)=>(
                    <li>{mot}</li>
                ))}
            </ul>
        </div>
    </div>
    </div>
   )
}


export default Formulaire

