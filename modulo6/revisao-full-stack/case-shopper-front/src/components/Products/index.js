import React from "react";
import { DivStyle, ProductsStyle } from "./style";

export default function Products() {
    return (
        <ProductsStyle>
            <h2>Produtos selecionados:</h2>
            <DivStyle>
                <p>Melão Rei Kg</p> 
                <input type="number"/> 
                <p>R$</p> 
                <button>Remover</button>
            </DivStyle>
            <DivStyle>
                <p>Melão Rei Kg</p> 
                <input type="number"/> 
                <p>R$</p> 
                <button>Remover</button>
            </DivStyle>
        </ProductsStyle>
    )
}