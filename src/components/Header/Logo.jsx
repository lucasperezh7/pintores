import React from "react";
import logo from "../../assets/Colors.png";

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="Logo" style={{ width: "100px", height: "50px" }} />
    </div>
  );
};

export default Logo;
