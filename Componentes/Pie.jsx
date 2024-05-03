import React from "react";
import '../Hoja-de-estilo/Pie.css'
import FBlogo from "../img/FOOTER/facebook.png"
import IGlogo from "../img/FOOTER/instagram.png"
import Xlogo from "../img/FOOTER/x.png"
import LaptopLogo from "../img/FOOTER/laptop.png"


        function Pie() {
            return (
                <div className="container"> 
                    <div className="footer-row">
                        <div className="containerLogo">
                            <div className="footer-logo">
                                <img src={LaptopLogo} alt="Logo laptop" />
                            </div>      
                            <div className="footer-logo">
                                <h4>LaptopGama</h4>
                            </div>
                        </div>
                        
                        <div className="footer-links">
                            <h4>MENU</h4>
                            <ul>
                                <li><a href="/">Inicio</a></li>
                                <li><a href="/">Tienda</a></li>
                                <li><a href="/">Contáctanos</a></li>
                            </ul>
                        </div>
            
                        <div className="footer-links">
                            <h4>REDES SOCIALES</h4>
                            <ul>
                                <li><img src={FBlogo} alt="Logo de fb" /><a href="/">Facebook</a></li>
                                <li><img src={Xlogo} alt="logo de ig" /><a href="/">Twitter</a></li>
                                <li><img src={IGlogo} alt="logo  de x" /><a href="/">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
        );
    }
export default Pie;
        
