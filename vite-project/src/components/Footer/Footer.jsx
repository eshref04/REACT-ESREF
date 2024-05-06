import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer__start">
        <div className="container">
          <div className="footer__address">
            <div className="footer__icon">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div className="footer__address__text">
              <h3>Address</h3>
              <p>
                2118 Thornridge Cir. Syracuse,
                <br />
                Connecticut 35624
              </p>
            </div>
          </div>

          <div className="footer__call">
            <div className="footer__icon">
              <i class="fa-solid fa-phone"></i>
            </div>
            <div>
              <h3>Lets talk us</h3>
              <a href="#">(603) 555-0123</a>
              <br />
              <a href="#">(603) 555-0123</a>
            </div>
          </div>

          <div className="footer__mail">
            <div className="footer__icon">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <div>
              <h3>Send us email</h3>
              <a href="#">deanna.curtis@example.com</a>
              <br />
              <a href="#">curtis@example.com</a>
            </div>
          </div>
        </div>
      </footer>

      <footer className="footer__end">
        <div className="container">
          <p>© CodeeFly 2023 | All Rights Reserved</p>

          <ul>
            <li>Trams & Condition</li>
            <li>Privacy Policy</li>
            <li>Sitemap </li>
          </ul>
        </div>

        <div className="footer__end__icon">
          <a href="header.jsx">
            <i class="fa-solid fa-chevron-up"></i>
          </a>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
