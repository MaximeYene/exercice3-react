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
        <h1 className="title">Exercice3 React</h1>
        <p className="title-explication">Le but de cet exercice est de créer avec React une action qui lorsqu'on clique sur le bouton <strong>Afficher</strong> renvoie la valeur de l'input dans la div à coté.</p>
    <div className="container">
        <div className="container-form">
            <form onSubmit={handleClick}>
            <input type="text" value={inputValue} onChange={(event)=>setInputValue(event.target.value)} required/><br/>
            <button >Ajouter</button>
            </form>
           
        </div>
        <div className="container-output">
            <p>Listage des donnees :</p>
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

