import React from "react";
import { FormStyle } from "./style";

export default function Form() {
    return (
        <FormStyle>
            <div>
                <label htmlFor="client"> Cliente </label>
                <input id="client" list="dataclient"></input>
                <datalist id="dataclient">
                    <option>Oi</option>
                </datalist>

                <button>
                    Confirmar
                </button>                
            </div>

            <div>
            <label htmlFor="products"> Produto </label>
                <input id="products" list="dataproducts"></input>
                <datalist id="dataproducts">
                    <option>Oi</option>
                </datalist>

            <label htmlFor="qty"> Quantidade </label>
            <input id="qty" type="number"></input>

            <p>R$</p>

                <button>
                    Ok
                </button>
            </div>

            <div id="end-order">
            <label htmlFor="delivery-date"> Data de Entrega (DD/MM/AAAA) </label>
                <input id="delivery-date" type="date"></input>

                <button> Finalizar pedido  </button>
            </div>
        </FormStyle>
    )
}