import React from "react";
import storeLogo from '../../assets/images/store.png'
import { HeaderStyle } from "./style";

export default function Header() {
    return (
        <HeaderStyle>
            <img src={storeLogo} alt="Caramel Market Logo" />
            <h1>Caramel Market</h1>
        </HeaderStyle>
    )
}