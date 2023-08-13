import React from "react";
import './App.css'
import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/Comparametro"
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import ListaAlunos from './components/repeticao/List';
// eslint-disable-next-line import/no-anonymous-default-export
export default function (props){
    return (
        <>
        <h1>Fundamentos REACT</h1>
        <div className="cards">
        <Card titulo="#07 - Tabela Produto" color="rgb(3, 0, 10)">
            
        </Card>
        <Card titulo="#06 - Repetição" color="rgb(3, 0, 10)">
            <ListaAlunos/>
        </Card>
        <Card titulo="#05 - Componente Com Filhos" color="rgb(2, 55, 8)">
            <Familia/>
        </Card>
        <Card titulo="#04 - Exemplo Card" color="rgb(222, 5, 84)">

        </Card>

        <Card titulo="#03 - Aleatório" color="rgb(22, 5, 84)">
            <Aleatorio max={1} min={60}/>
        </Card>

        <Card titulo="#02 - Com Parametro" color="rgb(222, 5, 8)">
            <ComParametro
                titulo="Segundo Componente Aula React"
                aluno="Lucas Santos"
                nota={10}

            />
        </Card>
        <Card titulo="#01 - Primeiro" color="rgb(22, 50, 100)">
            <Primeiro />
        </Card>
        </div>
        </>
    )
}