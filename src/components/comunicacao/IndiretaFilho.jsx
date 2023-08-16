import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

    const gerarIdade = ()=> parseInt(Math.random() * (20)) + 50
    const gerarEstuda = ()=> Math.random() > 0.5

    return (
        <div>
            <di>Filho Lucas:  </di>
            <button
                onClick={e =>{props.quandoClicar("Aleksandro", gerarIdade(), gerarEstuda())}}
            >Enviar Informações</button>
        </div>
    )
}