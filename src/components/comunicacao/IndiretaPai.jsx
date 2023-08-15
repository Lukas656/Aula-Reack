import React from "react";
import IndiretaFilho from "./IndiretaFilho";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props)=>{

    let nome = '?'
    let idade= 0
    let estuda= true

    // Nome , idade , estuda 
    function fornecerInformacoes(nomeParam, idadeParam, estudaparam){
        nome = nomeParam
        idade = idadeParam
        estuda = estudaparam
        console.log(nome, idade, estuda)
    }
    return(
        <div>
            <span>{nome}</span>
            <span>{idade}</span>
            <span>{estuda ? 'Verdadeiro': 'Falso'}</span>
            <IndiretaFilho quandoClicar={fornecerInformacoes}/>
        </div>
    )
}