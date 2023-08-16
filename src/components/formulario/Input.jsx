import React, {useState} from "react";
import './input.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props)=>{
    
    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e){
        setValor(e.target.value)
        console.log(e.target.value);
    }
    return(
        <div className="Input" >
            <h2>{valor}</h2>
            <div className="inputs">
            <input value={valor} onChange={quandoMudar}/> {/*  Se Altera Conforme vai digitando */}
            <input value={valor} readOnly/>  {/*  Somente Leitura */}          
            <input value={undefined} />  {/* Não está vinculado a nenhum estado portanto pode-se alteralo   */}          
            </div>
        </div>
    )
}