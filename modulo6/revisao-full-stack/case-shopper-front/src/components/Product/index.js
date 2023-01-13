import React from "react";
import { MyProduct } from "./style";

export default function Product({product, productsList, setProductsList, removeProduct}) {
    const updateQty = (e) => {
        const currentQty = e.target.value
        const productsUpdate = productsList.map((item) => {
            if(item.id === product.id) {
                item.quantity = currentQty
            }

            return product
        })
        
        setProductsList(productsUpdate)
    }

    return (
        <MyProduct key={product.id}>
            <p>{product.name}</p> 
            <label htmlFor="qty"> Quantidade </label>
            <input
            min="1"
            name="quantity"
            id="qty"
            type="number" 
            value={product.qty}
            onChange={() => updateQty(product.id)}/>
            <p>R${parseInt(product.price * product.qty).toFixed(2)}</p> 
            <button type="button" onClick={removeProduct(product.id)}>Remover</button>
        </MyProduct>
    )
}