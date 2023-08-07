import React, { useState } from "react";
import "./Contact.scss";

function Contact() {
  const [isGithubHovered, setIsGithubHovered] = useState(false);
  const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);
  const [isTwitterHovered, setIsTwitterHovered] = useState(false);
  const [isCodePenHovered, setIsCodePenHovered] = useState(false); // New state for CodePen

  const handleGithubMouseEnter = () => {
    setIsGithubHovered(true);
  };

  const handleGithubMouseLeave = () => {
    setIsGithubHovered(false);
  };

  const handleLinkedInMouseEnter = () => {
    setIsLinkedInHovered(true);
  };

  const handleLinkedInMouseLeave = () => {
    setIsLinkedInHovered(false);
  };

  const handleTwitterMouseEnter = () => {
    setIsTwitterHovered(true);
  };

  const handleTwitterMouseLeave = () => {
    setIsTwitterHovered(false);
  };

  const handleCodePenMouseEnter = () => {
    setIsCodePenHovered(true);
  };

  const handleCodePenMouseLeave = () => {
    setIsCodePenHovered(false);
  };

  return (
    <>
      <h2 class="h2Services">Contact</h2>
      <div id="ulContacts">
        <a href="https://github.com/CodrieN" target="blank">
          <i
            className={`fa-brands fa-brandsC fa-github ${
              isGithubHovered ? "fa-bounce" : ""
            }`}
            onMouseEnter={handleGithubMouseEnter}
            onMouseLeave={handleGithubMouseLeave}
          ></i>
        </a>{" "}
        <a href="https://www.linkedin.com/in/adrienmarguin" target="blank">
          <i
            className={`fa-brands fa-brandsC fa-linkedin-in ${
              isLinkedInHovered ? "fa-bounce" : ""
            }`}
            onMouseEnter={handleLinkedInMouseEnter}
            onMouseLeave={handleLinkedInMouseLeave}
          ></i>
        </a>{" "}
        <a href="https://twitter.com/AdrienMarguin" target="blank">
          <i
            className={`fa-brands fa-brandsC fa-twitter ${
              isTwitterHovered ? "fa-bounce" : ""
            }`}
            onMouseEnter={handleTwitterMouseEnter}
            onMouseLeave={handleTwitterMouseLeave}
          ></i>
        </a>{" "}
        <a href="https://codepen.io/CodrieN" target="blank">
          {" "}
          {/* CodePen link */}
          <i
            className={`fa-brands fa-brandsC fa-codepen ${
              isCodePenHovered ? "fa-bounce" : ""
            }`}
            onMouseEnter={handleCodePenMouseEnter}
            onMouseLeave={handleCodePenMouseLeave}
          ></i>
        </a>
      </div>
    </>
  );
}

export default Contact;
