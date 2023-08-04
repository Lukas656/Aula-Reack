import React from "react";
import FamiliaMenbro from "./FamiliaMenbro";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props)=>{
    return(
        <>
           <FamiliaMenbro nome='Lucas' sobrenome='Santos'/><br/>
           <FamiliaMenbro nome='kaique' sobrenome='Nascimento'/><br/>
           <FamiliaMenbro nome='Leticia' sobrenome='Santos'/><br/>
           <FamiliaMenbro nome='Edgar' sobrenome='Nascimento'/><br/>
        </>
    )
}