import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  const [isGithubHovered, setIsGithubHovered] = useState(false);
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);
  const logo = "../img/am.jpg";

  const handleGithubMouseEnter = () => {
    setIsGithubHovered(true);
  };

  const handleGithubMouseLeave = () => {
    setIsGithubHovered(false);
  };

  const handleHomeMouseEnter = () => {
    setIsHomeHovered(true);
  };

  const handleHomeMouseLeave = () => {
    setIsHomeHovered(false);
  };

  const handleLinkedInMouseEnter = () => {
    setIsLinkedInHovered(true);
  };

  const handleLinkedInMouseLeave = () => {
    setIsLinkedInHovered(false);
  };

  const [isHandshakeHovered, setHandshakeHovered] = useState(false);
  const [isPenToSquareHovered, setPenToSquareHovered] = useState(false);
  const [isAddressCardHovered, setAddressCardHovered] = useState(false);
  const [isCommentsHovered, setCommentsHovered] = useState(false);

  const handleHandshakeMouseEnter = () => {
    setHandshakeHovered(true);
  };

  const handleHandshakeMouseLeave = () => {
    setHandshakeHovered(false);
  };

  const handlePenToSquareMouseEnter = () => {
    setPenToSquareHovered(true);
  };

  const handlePenToSquareMouseLeave = () => {
    setPenToSquareHovered(false);
  };

  const handleAddressCardMouseEnter = () => {
    setAddressCardHovered(true);
  };
  const handleAddressCardMouseLeave = () => {
    setAddressCardHovered(false);
  };

  const handleCommentsMouseEnter = () => {
    setCommentsHovered(true);
  };

  const handleCommentsMouseLeave = () => {
    setCommentsHovered(false);
  };

  return (
    <>
      <header>
        <NavLink to="/" className="logo-link">
          <img id="imgAd" alt="" src={logo} width="200" title="HOME" />
        </NavLink>
        <div className="divNav">
          <a href="https://github.com/CodrieN" target="_blank" rel="noreferrer">
            <i
              className={`fa-brands fa-github ${
                isGithubHovered ? "fa-bounce" : ""
              }`}
              onMouseEnter={handleGithubMouseEnter}
              onMouseLeave={handleGithubMouseLeave}
            ></i>
          </a>
          <Link
            to="/"
            onMouseEnter={handleHomeMouseEnter}
            onMouseLeave={handleHomeMouseLeave}
          >
            <i
              className={`fa-solid fa-house ${isHomeHovered ? "fa-beat" : ""}`}
            ></i>
          </Link>
          <a
            href="https://www.linkedin.com/in/adrienmarguin"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className={`fa-brands fa-linkedin-in ${
                isLinkedInHovered ? "fa-bounce" : ""
              }`}
              onMouseEnter={handleLinkedInMouseEnter}
              onMouseLeave={handleLinkedInMouseLeave}
            ></i>
          </a>
        </div>
        <nav>
          <ul id="serviceNav">
            <li>
              <Link
                to="/Services"
                className={`serviceLi ${
                  isHandshakeHovered ? "scale-text" : ""
                }`}
                onMouseEnter={handleHandshakeMouseEnter}
                onMouseLeave={handleHandshakeMouseLeave}
              >
                <span>
                  <i
                    className={`fa-solid fa-handshake-simple ${
                      isHandshakeHovered ? "fa-fade" : ""
                    }`}
                  ></i>
                </span>
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/About"
                className={`serviceLi ${
                  isAddressCardHovered ? "scale-text" : ""
                }`}
                onMouseEnter={handleAddressCardMouseEnter}
                onMouseLeave={handleAddressCardMouseLeave}
              >
                <span>
                  <i
                    className={`fa-solid fa-address-card ${
                      isAddressCardHovered ? "fa-fade" : ""
                    }`}
                  ></i>
                </span>
                A propos
              </Link>
            </li>

            <li>
              <Link
                to="/Contact"
                className={`serviceLi ${isCommentsHovered ? "scale-text" : ""}`}
                onMouseEnter={handleCommentsMouseEnter}
                onMouseLeave={handleCommentsMouseLeave}
              >
                <span>
                  <i
                    className={`fa-solid fa-comments ${
                      isCommentsHovered ? "fa-fade" : ""
                    }`}
                  ></i>
                </span>
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/Legal"
                className={`serviceLi ${
                  isPenToSquareHovered ? "scale-text" : ""
                }`}
                onMouseEnter={handlePenToSquareMouseEnter}
                onMouseLeave={handlePenToSquareMouseLeave}
              >
                <span>
                  <i
                    className={`fa-solid fa-pen-to-square ${
                      isPenToSquareHovered ? "fa-fade" : ""
                    }`}
                  ></i>
                </span>
                Mentions légales
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
