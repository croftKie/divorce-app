import React from "react";
import logo from "../assets/LOGO1.svg";
const Nav = ({ setPageState }) => {
  return (
    <div className="nav">
      <img
        onClick={() => {
          setPageState(1);
        }}
        className="logo"
        src={logo}
        alt="divorce-app-logo"
      ></img>
    </div>
  );
};

export default Nav;
