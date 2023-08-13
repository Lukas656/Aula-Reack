import React from "react";
import Alunos from '../../data/alunos';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props)=>{

//    const li1 = <li>{Alunos[0].id}  {Alunos[0].nome} {Alunos[0].nota}</li>

    const ListaAlunos = Alunos.map(aluno =>{
        return (
        <li key={aluno.id}>
            {aluno.id})  <strong>{aluno.nome}</strong> = {aluno.nota}
        </li>)
    })
return(
    <div>
        <ul style={{listStyle: 'none'}}>
            {ListaAlunos}
        </ul>
    </div>
)
} 