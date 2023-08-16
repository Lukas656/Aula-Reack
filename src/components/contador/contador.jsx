import React, { Component } from "react";
import './contador.css'

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    }
    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        });
    }

    setPasso = (e) => {
        this.setState({
            passo: +e.target.value,
        });
    }

    render() {
        return (
            <div className="contador">
                <h2>Contador</h2>
                <p>Valor Inicial <strong>{this.state.numero}</strong> </p>
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input
                        id="passoInput"
                        type="number"
                        value={this.state.passo}
                        onChange={this.setPasso}
                    />
                </div>
                <div className="btns">
                    <button onClick={this.inc}>+</button>
                    <button onClick={this.dec}>-</button>
                </div>
            </div>
        )
    }
}


export default Contador