import React, {useState} from "react";
import IndiretaFilho from "./IndiretaFilho";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props)=>{

    const [nome, setNome] = useState('?')
    const [idade, setIdade]= useState(0)
    const [estuda, setEstuda]= useState(true)

    // Nome , idade , estuda 
    function fornecerInformacoes(nome, idade, estuda){
       setNome(nome)
       setIdade(idade)
       setEstuda(estuda)
    }
    return(
        <div>
            <span> <stong>{nome}</stong> </span>
            <span>{idade} </span>
            <span>{estuda ? 'Verdadeiro': 'Falso'}</span>
            <IndiretaFilho quandoClicar={fornecerInformacoes}/>
        </div>
    )
}