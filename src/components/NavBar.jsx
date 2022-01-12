import React from "react";
import './NavBar.css'
import logo from "./img/logo.jpeg"
export default function NavBar (){
    return(
    <>
    <header class="header">
        <img class="logo" src={logo} alt="" />

        <nav>
            <ul class="navbar">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Sobre nosotros</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
    </header>
    </>
    )
}