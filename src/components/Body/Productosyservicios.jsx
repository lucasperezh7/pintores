import React from "react";
import "../../App.css";
import yourImage from "../../assets/pintura.jpg"; // Importa la imagen

function Productosyservicios() {
  return (
    <div className="services-section">
      <h1 className="services-title">Nuestros Servicios</h1>
      <div className="services-content">
        <div className="image-frame">
          <img
            src={yourImage}
            alt="Descripción de la imagen"
            className="services-image"
          />
        </div>

        <div className="services-text-container">
          <p>
            En Pintores Aparicio, transformamos tus espacios con profesionalidad
            y dedicación. Somos un equipo de pintores a domicilio especializados
            en brindar soluciones personalizadas para cada hogar o negocio. Con
            acabados impecables y atención a los detalles, nos aseguramos de que
            tu visión se haga realidad, todo sin complicaciones. ¡Confía en
            nosotros para renovar tus paredes y disfrutar de un ambiente
            completamente nuevo!
          </p>
        </div>
        <div className="button-container">
          <button className="read-more-button">Leer más</button>
        </div>
      </div>
    </div>
  );
}

export default Productosyservicios;
