import React from "react";
import "../../App.css";
import fondo from "../../assets/pintura.jpg"; // Importa la imagen

const Welcome = () => {
  return (
    <div
      className="welcome-section"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="welcome-content">
        <div className="overlay">
          <h1>Bienvenido a Pintores</h1>
          <p>Explora y encuentra el mejor servicio para tus necesidades.</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
