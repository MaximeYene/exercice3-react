import { useState } from "react";
import "../Styles/Input.css"



function Formulaire(){

const [inputValue,setInputValue]=useState("");
const [list,setList]=useState([]);
const handleClick=(e)=>{
    e.preventDefault();
    setList((previewList)=>[...previewList,inputValue]);
setInputValue("");
}

   return (
    <div>
        <h1 className="title">To-Do List</h1>
    <div className="container">
        <div className="container-form">
            <h2>To-Do App!</h2>
            <h4>Add new To-Do</h4>
            <form onSubmit={handleClick}>
            <input type="text" value={inputValue} onChange={(event)=>setInputValue(event.target.value)} required/><br/>
            <button >Add</button>
            </form>
           
        </div>
        <div className="container-output">
            <p>Let's get some work done!</p>
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

