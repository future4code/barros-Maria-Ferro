import React, {useState} from "react";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Header from "../../components/Header";
import ProductsList from "../../components/ProductList";

export default function HomePage() {

    const [productsList, setProductsList] = useState([])

    return (
        <>
            <Header/>
            <ProductsList
            productsList={productsList}
            setProductsList={setProductsList}
            />
            <Form
            productsList={productsList}
            setProductsList={setProductsList}/>
            <Footer/>
        </>
    )
}