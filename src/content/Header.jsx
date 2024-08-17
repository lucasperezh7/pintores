import React from "react";
import "../App.css";
import Titulo from "../components/Header/Titulo";
import NavbarComponent from "../components/Header/Navbar";
import Logo from "../components/Header/Logo";

function Header() {
  return (
    <header className="header-container">
      <Titulo />
      <NavbarComponent />
      <Logo />
    </header>
  );
}

export default Header;
