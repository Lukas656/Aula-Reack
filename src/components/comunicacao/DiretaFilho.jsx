import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props)=>{
    return(
        <div>
            <span>{props.nome} </span>
            <span><strong> {props.idade} </strong> </span>
            <span>{props.estuda ? 'Verdadeiro' : 'Falso'} !</span>
        </div>
    )
}