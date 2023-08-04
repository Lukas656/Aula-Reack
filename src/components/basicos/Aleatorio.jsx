import React from "react";


// eslint-disable-next-line import/no-anonymous-default-export
export default (props)=>{
   const {min, max} = props
   
    const aleatorio = parseInt(Math.random() * (max - min)) + min;
    
    return(
    <div>
        <h2>Valor Aleatório</h2>
        <p><trong>Valor Mín: </trong> {min}</p>
        <p><trong>Valor Max: </trong> {max}</p>
        <p>Valor Escolhido: {aleatorio}</p>
    </div>
)}