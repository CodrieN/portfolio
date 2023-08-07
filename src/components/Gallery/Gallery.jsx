import React, { useState, useEffect, useRef } from "react";
import "./Gallery.scss";

function Gallery() {
  const [hoverStates, setHoverStates] = useState([false, false, false]);
  const [dialogStates, setDialogStates] = useState([false, false, false]);
  const dialogRefs = [useRef(null), useRef(null), useRef(null)];

  // Function to handle hover on card
  const handleHover = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
  };

  // Function to handle mouse leave
  const handleMouseLeave = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };

  // Function to handle card click and toggle dialog
  const handleCardClick = (index) => {
    const newDialogStates = [...dialogStates];
    newDialogStates[index] = !newDialogStates[index];
    setDialogStates(newDialogStates);
  };

  // Function to handle clicks outside the dialog and close it
  const handleOutsideClick = (event) => {
    for (let i = 0; i < dialogRefs.length; i++) {
      if (
        dialogRefs[i].current &&
        !dialogRefs[i].current.contains(event.target)
      ) {
        setDialogStates((prevState) =>
          prevState.map((state, index) => (index === i ? false : state))
        );
      }
    }
  };

  useEffect(() => {
    // Attach event listener for clicks outside the dialog
    document.addEventListener("mousedown", handleOutsideClick);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  return (
    <>
      <div id="gridCard">
        {/* First Card */}
        <div
          className="card"
          onMouseEnter={() => handleHover(0)}
          onMouseLeave={() => handleMouseLeave(0)}
          onClick={() => handleCardClick(0)}
        >
          {/* Show imgCard if hover state is false, otherwise show gifCard */}
          {hoverStates[0] ? (
            <img
              className="gifCard"
              id="gifBooki"
              src="./img/AnimationBooki.gif"
              alt="Booki"
            />
          ) : (
            <img
              className="imgCard"
              id="imgBooki"
              src="./img/imgBooki0.jpg"
              alt="BookiB&W"
            />
          )}
          <div className="titleCard" id="titleCardBooki">
            <div className="titleContent">{hoverStates[0] ? "Booki" : ""}</div>
            <div className="devTools">
              {hoverStates[0] ? (
                <>
                  <i className="fa-brands fa-html5"></i>
                  <i className="fa-brands fa-css3"></i>
                  <i className="fa-brands fa-figma"></i>
                </>
              ) : (
                <>{/* Add any other icons for imgCard */}</>
              )}
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div
          className="card"
          onMouseEnter={() => handleHover(1)}
          onMouseLeave={() => handleMouseLeave(1)}
          onClick={() => handleCardClick(1)}
        >
          {/* Show imgCard if hover state is false, otherwise show gifCard */}
          {hoverStates[1] ? (
            <img
              className="gifCard"
              id="gifNina"
              src="./img/AnimationNina.gif"
              alt="Nina Carducci"
            />
          ) : (
            <img
              className="imgCard"
              id="imgNina"
              src="./img/Nina0.png"
              alt="NinaB&W"
            />
          )}
          <div className="titleCard" id="titleCardNina">
            <div className="titleContent">
              {hoverStates[1] ? "Nina Carduci" : ""}
            </div>
            <div className="devTools">
              {hoverStates[1] ? (
                <>
                  <i className="fa-brands fa-html5"></i>
                  <i className="fa-brands fa-css3"></i>
                  <i className="fa-brands fa-js"></i>
                  <i className="fa-brands fa-bootstrap"></i>
                  <i className="fa-brands fa-figma"></i>
                </>
              ) : (
                <>{/* Add any other icons for imgCard */}</>
              )}
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div
          className="card"
          onMouseEnter={() => handleHover(2)}
          onMouseLeave={() => handleMouseLeave(2)}
          onClick={() => handleCardClick(2)}
        >
          {/* Show imgCard if hover state is false, otherwise show gifCard */}
          {hoverStates[2] ? (
            <img
              className="gifCard"
              id="gifSophie"
              src="./img/AnimationSophie.gif"
              alt="Sophie Bluel"
            />
          ) : (
            <img
              className="imgCard"
              id="imgSophie"
              src="./img/Sophie0.png"
              alt="SophieB&W"
            />
          )}
          <div className="titleCard" id="titleCardSophie">
            <div className="titleContent">
              {hoverStates[2] ? "Sophie Bluel" : ""}
            </div>
            <div className="devTools">
              {hoverStates[2] ? (
                <>
                  <i className="fa-brands fa-html5"></i>
                  <i className="fa-brands fa-css3"></i>
                  <i className="fa-brands fa-js"></i>
                  <i className="fa-brands fa-node"></i>
                  <i className="fa-brands fa-figma"></i>
                </>
              ) : (
                <>{/* Add any other icons for imgCard */}</>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Dialog elements for each card */}
      <dialog ref={dialogRefs[0]} open={dialogStates[0]}>
        {/* Dialog content for the 2nd card */}
        <div id="dialClassBooki" className="dialClass">
          <h2>Booki</h2>
          <h3>Présentation</h3>
          <p>
            L’entreprise Booki souhaitait développer un site Internet qui
            permette aux usagers de trouver des hébergements et des activités
            dans la ville de leur choix. Depuis une maquette
            <a
              href="https://www.figma.com/file/aen32jonHhD7JnIEL2b3sE/ARCHIVED-Maquettes-Booki-(desktop%2C-mobile%2C-tablette)?type=design&node-id=3-0&mode=design&t=sQeiw501tA4xodga-0"
              target="blank"
            >
              <i class="fa-brands fa-figma"></i>Figma
            </a>
            fournie, j’ai développé le site en HTML et CSS.
          </p>
          <h3>Problématiques :</h3>
          <p>
            La contrainte principale de ce travail a consisté à faire
            correpondre le plus fidèlement possible la maquette fournie avec le
            site. Une attention particulière a également été portée au
            responsive.
          </p>
          <h3>Compétences employée :</h3>
          <p>
            Pour ce projet, j'ai exclusivement travaillé en HTML & CSS. J'ai eu
            l'occasion d'utiliser les flexbox et les media queries. J'ai
            également utilisé la librairie Font Awesome pour les icônes.
            <i class="fa-brands fa-html5"></i>
            <i class="fa-brands fa-css3"></i>
          </p>
          <h3>Liens :</h3>
          <div>
            <h4>
              <a href="https://codrien.github.io/Pr-Pr_2/" target="blank">
                <i class="fa-solid fa-globe"></i>lien du site
              </a>
            </h4>
            <h4>
              <a href="https://github.com/CodrieN/Pr-Pr_2" target="blank">
                <i class="fa-brands fa-github"></i>lien du code
              </a>
            </h4>
          </div>
          <button onClick={() => handleCardClick(0)}>
            <i class="fa-regular fa-circle-xmark fa-beat"></i>
          </button>
        </div>
      </dialog>

      <dialog ref={dialogRefs[1]} open={dialogStates[1]}>
        {/* Dialog content for the first card */}
        <div id="dialClassNina" className="dialClass">
          <h2>Nina Carduci</h2>
          <h3>Présentation</h3>
          <p>
            La photographe professionnelle Nina Carducci souhaitait une
            optimisation de son site existant, construit il y a quelques années
            sur une base bootstrap. J’ai donc réalisé une refonte complète du
            site en me focalisant sur l’expérience utilisateur et le
            référencement.
            <p>
              Un certain nombre de petits bugs ont été corigés en Js, un gros
              travail sur le HTML sémantique a été réalisé et quelques soucis de
              contrast CSS ont été également réglés.{" "}
            </p>{" "}
            <a
              href="https://course.oc-static.com/projects/D%C3%A9veloppeur+Web/IW_P9+Optimisation/audit_nina_carducci.pdf"
              target="blank"
            >
              <i class="fa-solid fa-bug-slash"></i>L'audit du site initiale
            </a>
            fournie a fait l'objet d'une analyse approfondie.
          </p>
          <h3>Problématiques :</h3>
          <p>
            La contrainte principale de ce travail a consisté à plonger dans du
            code ancien et à le réécrire en respectant les bonnes pratiques
            actuelles. Une attention particulière a également été portée au
            responsive.
          </p>
          <h3>compétences employée :</h3>
          <p>
            <i class="fa-brands fa-html5"></i>
            <i class="fa-brands fa-css3"></i>
            <i class="fa-brands fa-js"></i>
            <i class="fa-brands fa-bootstrap"></i>
          </p>
          <h3>Liens :</h3>
          <div>
            <h4>
              <a href="https://codrien.github.io/Pr-Pr_5/" target="blank">
                <i class="fa-solid fa-globe"></i>lien du site
              </a>
            </h4>
            <h4>
              <a href="https://github.com/CodrieN/Pr-Pr_5" target="blank">
                <i class="fa-brands fa-github"></i>lien du code
              </a>
            </h4>
          </div>
          <button onClick={() => handleCardClick(1)}>
            <i class="fa-regular fa-circle-xmark fa-beat"></i>
          </button>
        </div>
      </dialog>

      <dialog ref={dialogRefs[2]} open={dialogStates[2]}>
        {/* Dialog content for the 3rd card */}
        <div id="dialClassSophie" className="dialClass">
          <h2>Sophie Bluel</h2>
          <h3>présentation :</h3>
          <p></p>
          Pour ce projet, j'ai été envoyé en renfort comme développeur front-end
          d’une équipe qui travaille sur la conception du site portfolio d’une
          architecte d’intérieur. Tous les éléments graphiques et le contenu du
          site ont été fournis à l'équipe. J'ai donc travaillé sur la partie
          front-end du site.
          <p>
            Voilà là maquette
            <a
              href="https://www.figma.com/file/kfKHknHySoTibZfdolGAX6/Desktop?type=design&node-id=0-1&mode=design&t=580QaCBl1cNiOFvK-0"
              target="blank"
            >
              <i class="fa-brands fa-figma"></i>Figma
            </a>
            fournie.
          </p>
          <h3>Problématiques :</h3>
          <p>
            La contrainte principale de ce travail a consisté à construir
            intégralement le site en faisant attention au caractère dynamique
            des éléments graphiques. J'ai également dû faire attention à la
            compatibilité avec les navigateurs et la réactivité du site. La
            gestion de l'autentification des utilisateurs a été réalisée en JS.
          </p>
          <h3>Compétences employée :</h3>
          <p>
            Pour ce projet, j'ai exclusivement travaillé en HTML, CSS et JS.
            <i class="fa-brands fa-html5"></i>
            <i class="fa-brands fa-css3"></i>
            <i class="fa-brands fa-js"></i>
          </p>
          <h3>Liens :</h3>
          <div>
            <h4>
              <a href="https://github.com/CodrieN/Pr-Pr_3" target="blank">
                <i class="fa-brands fa-github"></i>lien du code
              </a>
            </h4>
          </div>
          <button onClick={() => handleCardClick(2)}>
            <i class="fa-regular fa-circle-xmark fa-beat"></i>
          </button>
        </div>
      </dialog>
    </>
  );
}

export default Gallery;

//         <a href="#" target="_blank">
//           <div className="card">
//             Nina Carducci
//             <div className="devTools">
//               <i class="fa-brands fa-html5"></i>
//               <i class="fa-brands fa-css3"></i>
//               <i class="fa-brands fa-js"></i>
//               <i class="fa-brands fa-figma"></i>
//               <i class="fa-brands fa-bootstrap"></i>
//             </div>
//           </div>
//         </a>

//         <a href="#" target="_blank">
//           <div className="card">Kasa</div>
//         </a>

//         <a href="#" target="_blank">
//           <div className="card">Mon Vieux Grimoire</div>
//         </a>

//         <a href="https://codrien.github.io/OTEA/index.html" target="_blank">
//           <div className="card">Otea</div>
//         </a>

//         <a href="https://sunstudiosite.wordpress.com/" target="_blank">
//           <div className="card">Sun Studios</div>
//         </a>

//         <a href="https://perlinette-atelier.com/" target="_blank">
//           <div className="card">Prelinette Atelier</div>
//         </a>
//       </div>
//     </>
//   );
// }
