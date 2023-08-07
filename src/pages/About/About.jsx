import React from "react";
import "./About.scss";

function About() {
  const birthdate = new Date("1988-06-30");
  const ageDiffInMilliseconds = Date.now() - birthdate.getTime();
  const ageDate = new Date(ageDiffInMilliseconds);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  return (
    <>
      {" "}
      <h2 class="h2Services">Bonjour</h2>
      <div id="about">
        <p>
          Je m'appelle Adrien Marguin, j'ai {age} ans et je suis développeur web
          fullstack.
        </p>
        <p>
          Indépendant d'esprit et dynamique, j'aime relever des défis et prendre
          des initiatives. Je n'apprécie guère le statu quo. Selon moi, toute
          situation demande à être évaluée et dépassée. J'ai comme habitude de
          me fixez des buts audacieux que je m'efforce d'atteindre avec toute
          mon énergie. Cette fascination pour les opportunités et le progrès me
          pousse à mener simultanément plusieurs projets de front, ce qui peut
          je dois le reconnaiotre, parfois m'absorber et me charger
          considérablement.
        </p>
        <h2>Formations</h2>
        <img src="/img/Capture d’écran 2023-02-03 134633.png" alt="Formation" />
        <img src="/img/Capture d’écran 2023-08-06 212948.png" alt="Formation" />
        <h2>Compétences</h2>
        <img id="imgTalent" src="/img/talent.png" alt="Talent" />

        <iframe
          title="Miro"
          width="1330"
          height="900"
          src="https://miro.com/app/live-embed/uXjVM0iSZNg=/?moveToViewport=-1403,-238,2886,1268&embedId=323404140097"
          frameborder="0"
          scrolling="no"
          allow="fullscreen; clipboard-read; clipboard-write"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}

export default About;
