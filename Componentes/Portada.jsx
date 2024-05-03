import React from "react";
import laptop1 from "../img/Laptos/MacBook_Air_13_chip_M1-removebg-preview.png"
import laptop2 from "../img/Laptos/ASUS ROG Strix Scar 16.png"
import laptop3 from "../img/Laptos/chuwi-removebg-preview.png"
import '../Hoja-de-estilo/Portada.css'

function Portada() {
    return(
        <div className="containerCover">   
        <div className="containerInfo">
         
            <h1>Una Plataforma de Ventas para </h1> 
                <h1>Todas las Necesidades</h1>
           
            <div className="containerImg">
                <div className="rectangulo">
                <a href="/"><img src={laptop1} alt=""/></a>
                <a href="/"><img src={laptop2} alt=""/></a>
                <a href="/"><img src={laptop3} alt=""/></a>
            </div>
            </div>
        
            <button className="botonComprar" type="button"><a href="../paginas/tiendaGaming.html">Comprar Ahora</a></button>   
        </div>
    </div>
    );
}

export default Portada;