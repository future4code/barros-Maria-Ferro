import React from "react";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Header from "../../components/Header";
import Products from "../../components/Products";

export default function HomePage() {
    return (
        <div>
            <Header/>
            <Products/>
            <Form/>
            <Footer/>
        </div>
    )
}