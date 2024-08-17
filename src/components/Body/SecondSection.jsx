import React from "react";
import "../../App.css";
import yourImage from "../../assets/pintura.jpg"; // Importa la imagen

const SecondSection = () => {
  return (
    <div className="second-section">
      <div className="image-container">
        <img src={yourImage} alt="Descripción de la imagen" />
      </div>
      <div className="text-container">
        <p>
          En Pintores Aparicio, transformamos tus espacios con profesionalidad y
          dedicación. Somos un equipo de pintores a domicilio especializados en
          brindar soluciones personalizadas para cada hogar o negocio. Con
          acabados impecables y atención a los detalles, nos aseguramos de que
          tu visión se haga realidad, todo sin complicaciones. ¡Confía en
          nosotros para renovar tus paredes y disfrutar de un ambiente
          completamente nuevo!
        </p>
      </div>
    </div>
  );
};

export default SecondSection;
