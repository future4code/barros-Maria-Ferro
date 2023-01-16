import React, { useState } from "react";
import { FormStyle, ShowClient } from "./style";
import { useRequestData } from "../../hooks/useRequestData";
import { useForm } from "../../hooks/useForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goToEndOrder } from "../../routers/Coordinator";

export default function Form({productsList, setProductsList}) {
    const navigate = useNavigate()
    const [showClient, setShowClient] = useState(false)
    const [formClient, onChangeClient, clearClient] = useForm({name: ""})
    const [formProducts, onChangeProducts, clearProducts] = useForm({name: "", quantity: 1, deliveryDate: ""})
    const [dataClient, isLoadingClient, errorClient, upClient, setUpClient] = useRequestData("http://localhost:3003/clients")
    const [dataProducts, isLoadingProducts, errorProducts] = useRequestData("http://localhost:3003/products")
    const [orderError, setOrderError] = useState("")

    // clientes

    const optionsClient = dataClient && dataClient.map((client) => {
        return (
            <option key={client.id}> {client.name} </option>
        )
    })

    const selectedClient = dataClient && dataClient.find(client => client.name === formClient.name)

    const insertClient = () => {
        axios.post("http://localhost:3003/clients", formClient, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
            setUpClient(!upClient)
        })
        .catch((error) => {
            window.alert(`ERRO! ${error.response.data}`)
            clearClient()
        })
    }

    const handleClickClient = (e) => {
        e.preventDefault()
        insertClient()
    }

    const handleClickSelect = (e) => {
        e.preventDefault()
        setShowClient(true)
    }

    // produtos

    const optionsProducts = dataProducts && dataProducts.map((product) => {
        return (
            <option key={product.id}> {product.name} </option>
        )
    })

    const selectedProduct = dataProducts && dataProducts.find(product => product.name === formProducts.name)

    const addProduct = (e) => {
        e.preventDefault()
        const newProduct = selectedProduct
        newProduct.qty = formProducts.quantity
        setProductsList([...productsList, newProduct])
        clearProducts()
    }

    // pedido

    const clientId = selectedClient && selectedClient.id
    const productsListDB = productsList && productsList.map((product) => {
        return {
            "id": product.id,
            "qty": Number(product.qty)
        }
    })

    const createOrder = () => {
        const body = {
            delivery_date: formProducts.deliveryDate,
            fk_client: clientId,
            products: productsListDB
        }

        axios.post("http://localhost:3003/orders", body, {
            headers: {
                "Content-Type": "application/json"
            }
            })
            .then((response) => {
                goToEndOrder(navigate)
            })
            .catch((error) => {
                setOrderError(error.response.data)
            })
    }

    const addOrder = (e) => {
        e.preventDefault()
        createOrder()
    }

    return (
        <FormStyle>
            {selectedClient && showClient && <ShowClient> <h1>Cliente: {selectedClient.name}</h1> </ShowClient>}
            {!showClient && 
            <div>
                <label htmlFor="client"> Cliente </label>
                <input
                value={formClient.name}
                name="name"
                onChange={onChangeClient}
                id="client" 
                list="dataclient"/>
                <datalist id="dataclient">
                    {isLoadingClient && <option>Carregando...</option>}
                    {!isLoadingClient && errorClient && <option>Ocorreu um erro.</option>}
                    {!isLoadingClient && dataClient && dataClient.length > 0 && optionsClient}
                    {!isLoadingClient && dataClient && dataClient.length === 0 && <option>Nenhum cliente cadastrado.</option>}
                </datalist>

                {selectedClient && <button onClick={handleClickSelect}> Confirmar </button>}
                {!selectedClient && <button onClick={handleClickClient}> Cadastrar </button>}     
            </div>
            }

            {selectedClient && showClient &&
            <>
            <div>
            <label htmlFor="products"> Produto </label>
                <input 
                value={formProducts.name}
                name="name"
                onChange={onChangeProducts}
                id="products"
                list="dataproducts"/>
                <datalist id="dataproducts">
                    {isLoadingProducts && <option>Carregando...</option>}
                    {!isLoadingProducts && errorProducts && <option>Ocorreu um erro.</option>}
                    {!isLoadingProducts && dataProducts && dataProducts.length > 0 && optionsProducts}
                    {!isLoadingProducts && dataProducts && dataProducts.length === 0 && <option>Nenhum produto disponível.</option>}
                </datalist>

            <label htmlFor="qty"> Quantidade </label>
            <input
            min="1"
            name="quantity"
            id="qty" 
            type="number" 
            value={formProducts.quantity} 
            onChange={onChangeProducts}/>

            {selectedProduct && formProducts.quantity > 0 && selectedProduct.qty_stock >= formProducts.quantity &&
            <>
                <p>R${selectedProduct && parseFloat(selectedProduct.price * formProducts.quantity).toFixed(2)}</p>
                <button onClick={addProduct}> Ok </button>
            </>
            }

            {selectedProduct && selectedProduct.qty_stock < formProducts.quantity &&
            <p>Produto sem estoque!</p>
            }
            </div>

            <div id="end-order">
                <label htmlFor="delivery-date"> Data de Entrega (DD/MM/AAAA) </label>
                <input
                id="delivery-date"
                type="date"
                name="deliveryDate"
                value={formProducts.deliveryDate}
                onChange={onChangeProducts}/>
                {orderError && <p>{orderError}</p>}
                <button onClick={addOrder}> Finalizar pedido </button>
            </div>
            </>
            }
        </FormStyle>
    )
}