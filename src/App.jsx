import React from "react";
import './App.css'
import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/Comparametro"
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
// eslint-disable-next-line import/no-anonymous-default-export
export default function (props){
    return (
        <>
        <h1>Fundamentos REACT</h1>
        <div className="cards">
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