import React from "react";
import Product from "../Product";
import { ListStyle, ProductsStyle } from "./style";

export default function ProductsList({productsList, setProductsList}) {
    const removeProduct = (id) => {
        const newProductList = productsList.filter((p) => {
            return p.id !== id
        })

        setProductsList(newProductList)
    }
    return (
        <>
        {productsList.length > 0 &&
        <ProductsStyle>
            <h2>Produtos Selecionados:</h2>
            <ListStyle>
            {productsList.map((product) => {
                return (
                    <Product
                    product={product}
                    productsList={productsList}
                    setProductsList={setProductsList}
                    removeProduct={() => {removeProduct(product.id)}}/>
                )
            })}
            </ListStyle>
        </ProductsStyle>
        }
        </>
    )
}