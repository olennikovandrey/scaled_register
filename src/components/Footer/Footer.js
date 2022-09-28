import { contactData } from "./footerData";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content"></div>
      <div className="footer__socials">
        { contactData.map(item =>
          <div key={ item.link }>
            <a href={ item.link } target="_blank" rel="noreferrer">
              <img src={ item.icon } alt={ item.source } />
            </a>
          </div>
        ) }
      </div>
    </footer>
  );
};

export default Footer;
