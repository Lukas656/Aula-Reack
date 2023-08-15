import React from "react";
import DiretaFilho from "./DiretaFilho";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props)=>{
    return(
        <div>
            <DiretaFilho 
                nome="Lucas"
                idade={20}
                estuda= {true}
            />
            <DiretaFilho 
                nome="kaique"
                idade={19}
                estuda= {false}
            />
        </div>
    )
}