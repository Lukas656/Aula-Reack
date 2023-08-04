import ReactDOM from "react-dom"
import './index.css'
import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/Comparametro"

ReactDOM.render(
    <>
    <Primeiro/>
    <ComParametro 
        titulo="Segundo Componente Aula React"
        aluno="Lucas Santos"
        nota={10}
    
    />
    </>, 
    document.getElementById('root')
)