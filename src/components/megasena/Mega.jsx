import React, {useState} from "react";
import './mega.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

    function geranumeronaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min

        return array.includes(aleatorio) ?
            geranumeronaoContido(min, max, array) :
            aleatorio
    }

    function gerarNumeros(qtde) {
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = geranumeronaoContido(1, 60, nums)
                return [...nums, novoNumero]
            }, [])
            .sort((n1, n2) => n1 - n2)
        return numeros
    }

 
    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciasis = Array(qtde).fill(0) 
    const [numeros, setNumeros] = useState(numerosIniciasis)

    return (
        <div className="mega">
           <h2>Mega</h2>
           <h3>{numeros.join(' ')}</h3>
           <div>
            <label>Quantidade de Números</label>
            <input
            type="number"
            min="5"
            max="10" 
            value={qtde} 
            onChange={(e)=>{
                setQtde(+e.target.value)
                setNumeros(gerarNumeros(+e.target.value))
            }}
            />
           </div>
           <button onClick={_ =>setNumeros(gerarNumeros(qtde))}>
            Gerar Numeros            
           </button>
        </div>
    )
}