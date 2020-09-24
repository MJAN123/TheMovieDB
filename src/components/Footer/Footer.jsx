import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer">
      <img
        className="logo-box"
        src={require("../../assets/Logo/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg")}
        alt="Logo"
      />

      <ul className=" menu">
        <li>
          <Link to="/" className="link">
            Movies
          </Link>
        </li>
        <li>
          <Link to="/tvshows" className="link">
            TV Shows
          </Link>
        </li>
        <li>
          <Link to="/people" className="link">
            People
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
