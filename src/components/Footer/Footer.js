import { contactData } from "./footerData";
import logo from "../../assets/images/header/favicon55px.svg";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={ logo } alt="logo" className="footer__logo" />
      <div className="footer__socials">
        { contactData.map(item =>
          <a href={ item.link } target="_blank" key={ item.link } rel="noreferrer">
            <img src={ item.icon } alt={ item.source } />
          </a>
        ) }
      </div>
    </footer>
  );
};

export default Footer;
