import logo from "../../assets/images/header/favicon.svg";
import React from "react";

const Header = () => {

  return (
    <header className="header">
      <img src={ logo } alt="logo" className="header__logo" />
      <div className="header__content">Scaled SPA for registration</div>
    </header>
  );
};

export default Header;
