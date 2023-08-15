import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

    return (
        <div>
            <di>Filho</di><br />
            <button
                onClick={e =>{props.quandoClicar("Aleksandro", 42, true)}}
            >Enviar Informações</button>
        </div>
    )
}