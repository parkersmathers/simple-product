import React from "react";
import logo from "../logo.svg";

const Header = () => {
  return (
    <header className="navbar navbar-fixed navbar-bordered p-4">
      <img className="navbar-brand-logo" src={logo} alt="logo" />
    </header>
  );
};

export default Header;
