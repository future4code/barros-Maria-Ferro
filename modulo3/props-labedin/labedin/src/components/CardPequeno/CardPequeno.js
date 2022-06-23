import React from 'react'
import './CardPequeno.css'

function CardPequeno (props) {
    return <div className = "card-pequeno-container">
        <img src={props.imagem} />
        <p className="categoria"> {props.categoria} </p>
        <p> {props.info} </p>
    </div>
}

export default CardPequeno