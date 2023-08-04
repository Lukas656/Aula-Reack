import React from "react";
// eslint-disable-next-line import/no-anonymous-default-export
export default (props)=>{

    return(
        <>
           <span><strong>{props.nome}</strong> {props.sobrenome}</span>
        </>
    )
}