import React from "react";
import logo from "../../images/logo.svg";
import phone from "../../images/icon-phone.svg";
import email from "../../images/icon-email.svg";
import facebook from "../../images/icon-facebook.svg";
import instagram from "../../images/icon-instagram.svg";
import twitter from "../../images/icon-twitter.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer-logo" src={logo} alt="logo" />
      <div className="footer-links">
        <ul className="footer-list1">
          <li>
            <div>
              <img src={phone} alt="phone" />
              <p>Phone: +1-543-123-4567</p>
            </div>
          </li>
          <li>
            <div>
              <img src={email} alt="email" />
              <p>example@fylo.com</p>
            </div>
          </li>
        </ul>
        <ul className="footer-list2">
          <li>About Us</li>
          <li>Jobs</li>
          <li>Press</li>
          <li>Blog</li>
        </ul>
        <ul className="footer-list3">
          <li>Contact Us</li>
          <li>Terms</li>
          <li>Privacy</li>
        </ul>
        <ul className="footer-list4">
          <li>
            <button>
              <img src={facebook} alt="facebook" />
            </button>
          </li>
          <li>
            <button>
              <img src={twitter} alt="twitter" />
            </button>
          </li>
          <li>
            <button>
              <img src={instagram} alt="instagram" />
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
