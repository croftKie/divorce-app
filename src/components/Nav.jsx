import React from "react";
import logo from "../assets/antiDivorce.svg";
import navIcon1 from "../assets/heart.svg";
import navIcon2 from "../assets/peace.svg";
const Nav = ({ setPageState }) => {
  return (
    <>
      <div className="nav">
        <div className="nav-icon rotate">
          <img src={navIcon1} alt="heart"></img>
        </div>
        <img
          onClick={() => {
            setPageState(1);
          }}
          className="logo"
          src={logo}
          alt="divorce-app-logo"
        ></img>
        <div className="nav-icon rotate">
          <img src={navIcon2} alt="peace"></img>
        </div>
      </div>
    </>
  );
};

export default Nav;
