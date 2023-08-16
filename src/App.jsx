import React from "react";
import './App.css'
import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/Comparametro"
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import ListaAlunos from './components/repeticao/List';
import Produtos from './components/repeticao/Produtos';
import ParOuimpar from "./components/condicional/ParOuimpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/contador";
import Mega from "./components/megasena/Mega";
// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
    return (
        <>
            <h1>Fundamentos REACT</h1>
            <div className="cards">
                <Card titulo="#01 - Primeiro" color="rgb(222, 50, 00)"> <Primeiro /></Card>
                <Card titulo="#02 - Com Parametro" color="rgb(222, 5, 8)">
                    <ComParametro
                        titulo="Segundo Componente Aula React"
                        aluno="Lucas Santos"
                        nota={10}
                    />
                </Card>
                <Card titulo="#03 - Aleatório" color="rgb(22, 5, 84)"><Aleatorio max={1} min={60} /></Card>
                <Card titulo="#04 - Exemplo Card" color="rgb(222, 5, 84)"></Card>
                <Card titulo="#05 - Componente Com Filhos" color="rgb(2, 55, 8)"> <Familia /> </Card>
                <Card titulo="#06 - Repetição" color="rgb(3, 0, 10)"> <ListaAlunos /> </Card>
                <Card titulo="#07 - Tabela Produto" color="rgb(3, 100, 100)"> <Produtos /> </Card>
                <Card titulo="#08 - par ou Impar" color="rgb(300, 100, 100)">
                    <ParOuimpar numero={22} />
                </Card>
                <Card titulo="#09 - Usuario Info" color="rgb(30, 00, 700)">
                    <UsuarioInfo usuario={{ nome: 'Lucas' }} />
                </Card>
                <Card titulo="#10 - Comunicação Direta" color="rgb(001, 20, 001)">
                    <DiretaPai />
                </Card>
                <Card titulo="#10 - Comunicação Indireta" color="rgb(405, 200, 001)">
                    <IndiretaPai />
                </Card>
                <Card titulo="#11 - Componente Controlado (Input)" color="rgb(45, 20, 001)">
                    <Input />
                </Card>
                <Card titulo="#12 e #13 - Contador" color="rgb(45, 20, 081)">
                    <Contador />
                </Card>
                <Card titulo="#14 e #15 - Desafio MegaSena" color="rgb(970, 20, 01)">
                    <Mega qtde={8}/>
                </Card>
            </div>
        </>
    )
}