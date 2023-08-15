import React from "react";
import IF, {Else} from './if'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props)=>{
    const usuario = props.usuario || {}
    
    return(
        <div>
            <IF test={usuario && usuario.nome}>
                Seja Bem Vindo <strong>{usuario.nome}</strong>!
                <Else>
                    Seja bem Vindo <strong>Amigão</strong>!
                </Else>
            </IF>
        </div>
    )
}