import React from "react";
import '../Hoja-de-estilo/Cabecera.css'
import logo from '../img/HEADER/laptop.png'
import user from '../img/HEADER/user.png'
import cart from '../img/HEADER/cart.png'

function Cabecera() {
    return (
        <header className="cabecera">
            <div className="logo">
                <img src={logo} alt="LaptopGama Logo" />
                <h1>LaptopGama</h1>
            </div>
            <nav className="menu">
                <ul> 
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/">Tienda</a></li>
                    <li><a href="/">Contáctanos</a></li>
                    <li><a href="/"><img src={user} alt="Cuenta" /></a></li>
                    <li><img src={cart} alt='Carrito'/></li>
                </ul>   
            </nav>
        </header>
    );
}

export default Cabecera;