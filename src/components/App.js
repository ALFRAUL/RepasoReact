import React from "react";
import { Card } from "./Card";

export const App = () =>{
   const clases = [
        {
            title:"Día1",
            text:"Aprender HTML"

        },
        {
            title:"Día2",
            text:"Aprender Css"

        },
        {
            title:"Día3",
            text:"Aprender Js"

        }
    ]
    return(
        <div className="Card-container">    
           {
            clases.map((clase)=>(
                <Card key="title" title={clase.title} text={clase.text} />
            ))} 
        </div>
    )
}