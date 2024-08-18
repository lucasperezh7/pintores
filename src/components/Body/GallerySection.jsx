import React from "react";
import "../../App.css";
import yourNewImage from "../../assets/pintura.jpg";

function GallerySeccion() {
  return (
    <div className="new-section">
      <h1 className="new-section-title">Conócenos</h1>
      <div className="new-section-content">
        <div className="new-section-text-container">
          <p>
            Aquí tienes una galería de imágenes con nuestro trabajo en el día a
            día. Si quieres más información, ponte en contacto con nosotros y no
            dudaremos en atenderte.
          </p>
          <button className="new-section-button">Ver más</button>
        </div>
        <div className="new-section-image-frame">
          <img
            src={yourNewImage}
            alt="Descripción de la nueva imagen"
            className="new-section-image"
          />
        </div>
      </div>
    </div>
  );
}

export default GallerySeccion;
