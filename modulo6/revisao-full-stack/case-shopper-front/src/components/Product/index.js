import React from "react";
import { MyProduct } from "./style";

export default function Product({product, productsList, setProductsList, removeProduct}) {
    const updateQty = (e) => {
        const currentQty = e.target.value
        const productsUpdate = productsList.map((item) => {
            if(item.id === product.id) {
                item.qty = currentQty
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
            max={(product.qty_stock.toString())}
            name="quantity"
            id="qty"
            type="number" 
            value={product.qty}
            onChange={updateQty}/>
            <p>R${parseFloat(product.price * product.qty).toFixed(2)}</p> 
            <button type="button" onClick={() => {removeProduct(product.id)}}>Remover</button>
        </MyProduct>
    )
}