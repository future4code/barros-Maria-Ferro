import React from "react";
import { DivStyle, ProductsStyle } from "./style";

export default function Products({product}) {
    const updateQty = (e) => {
        const currentQty = e.target.value
    }

    return (
        <ProductsStyle>
            <h2>Produtos selecionados:</h2>
            <DivStyle>
                <p>{product.name}</p> 
                <label htmlFor="qty"> Quantidade </label>
                <input
                name="quantity"
                id="qty"
                type="number" 
                value={product.quantity} 
                onChange={product.onChange}/>
                <p>R${product.totalPrice}</p> 
                <button>Remover</button>
            </DivStyle>
        </ProductsStyle>
    )
}