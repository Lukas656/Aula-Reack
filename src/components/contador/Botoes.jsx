import React from "react";
import './contador.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return (
        <>
            <div className="btns">
                <button onClick={props.setInc}>+</button>
                <button onClick={props.setDec}>-</button>
            </div>
        </>
    )
}