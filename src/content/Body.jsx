import React from "react";
import "../App.css";
import WelcomeSection from "../components/Body/Welcomesection";
import SecondSection from "../components/Body/SecondSection";
import Productosyservicios from "../components/Body/Productosyservicios";
import GallerySeccion from "../components/Body/GallerySection";
function Body() {
  return (
    <div className="body-container">
      <WelcomeSection />
      <SecondSection />
      <Productosyservicios />
      <GallerySeccion />
    </div>
  );
}

export default Body;
