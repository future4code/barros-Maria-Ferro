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

    let sum = 0;
    if (productsList.length > 0) {
        productsList.forEach(element => {
            sum += (element.price * element.qty)            
        });
    }

    return (
        <>
        {productsList.length > 0 &&
        <ProductsStyle>
            <h1>Produtos Selecionados:</h1>
            <ListStyle>
            {productsList.map((product) => {
                return (
                    <Product
                    key={product.id}
                    product={product}
                    productsList={productsList}
                    setProductsList={setProductsList}
                    removeProduct={removeProduct}/>
                )
            })}
            </ListStyle>
            <h2>TOTAL: R${sum.toFixed(2)}</h2>
        </ProductsStyle>
        }
        </>
    )
}