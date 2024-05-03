import React from "react";
import "../Hoja-de-estilo/Destacados.css";
import Laptop1 from "../img/Laptos/ASUS ROG Strix Scar 16.png";
import Laptop2 from "../img/Laptos/MacBook_Air_13_chip_M1-removebg-preview.png";

function Destacados() {
  return (
    <div>
      {/* Título DESTACADOS */}
      <div className="destacados">
        <h1>DESTACADOS</h1>
      </div>

      {/* Elementos destacados */}
      <div className="elementosDestacados">
        {/* Primer elemento destacado */}
        <div className="recomendado1">
          <div className="rectangulo1">
            <figure className="destacadosImg">
              <a href="/">
                <img style={{ width: "100%" }} src={Laptop1} alt="" />
              </a>
            </figure>
          </div>
          <h4>ASUS ROG Strix Scar 16</h4>
          <p>S/. 14.720,54</p>
        </div>

        {/* Segundo elemento destacado */}
        <div className="recomendado2">
          <div className="rectangulo1">
            <figure className="destacadosImg">
              <a href="/">
                <img style={{ width: "100%" }} src={Laptop2} alt="" />
              </a>
            </figure>
          </div>
          <h4>MacBook Air 13 Chip M1</h4>
          <p>S/. 4,049.00</p>
        </div>
      </div>

      {/* Contenedor de imagen de fondo */}
      <div className="containerCover2">
        {/* Contenido de containerCover2 */}
      </div>

      {/* Pie de página */}
      <div className="antesFooter">
        <br />
        <h1>SOBRE LA TIENDA</h1>
        <p>Una Aventura Tecnológica en la Plataforma de Ventas para</p>
        <p>Todas las Necesidades</p>
        <br />
        <hr />
      </div>
    </div>
  );
}

export default Destacados;
