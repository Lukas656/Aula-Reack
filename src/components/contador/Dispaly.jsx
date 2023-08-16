import React from "react";
import './contador.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props)=>{
    return(
        <>
        <p>Valor Inicial <strong>{props.numero}</strong> </p>
        </>
    )
}