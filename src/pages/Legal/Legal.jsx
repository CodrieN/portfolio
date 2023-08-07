import React from "react";
import "./Legal.scss";

function Legal() {
  return (
    <div>
      <h2 class="h2Services">Mentions légales</h2>
      <ul id="legalLi">
        <li>
          <p>Éditeur du site : </p>
          <p> Adrien Marguin </p>
          <p> Adresse : 6, chemin des Eigages - 06650 Opio</p>
          <p> Email : adrien.marguin@gmail.com </p>
          {/* <p> SIRET : XXXXXXXXXXXXXXX</p> */}
        </li>
        <li>
          <p>Directeur de la publication : </p>
          <p> Nom : Adrien Marguin </p>
          <p> Contact : adrien.marguin@gmail.com</p>
        </li>
        <li>
          <p> Hébergement :</p>
          <p>Nom de l'hébergeur : Github Inc </p>
          Adresse : San Francisco, California, U.S.
        </li>
        <li>
          <p>Propriété intellectuelle :</p> Le contenu de ce site (textes,
          images, vidéos, etc.) est la propriété intellectuelle de Adrien
          Marguin, sauf indication contraire. Toute reproduction,
          représentation, modification, publication ou adaptation, même
          partielle, est strictement interdite sans autorisation préalable.
        </li>
        <li>
          <p>Responsabilité :</p> Nous nous efforçons de fournir des
          informations exactes et à jour sur ce site. Cependant, Adrien Marguin
          ne peut garantir l'exactitude, la complétude ou la pertinence des
          informations fournies. En conséquence, l'utilisation des informations
          disponibles sur ce site se fait sous la seule responsabilité de
          l'utilisateur.
        </li>
        <li>
          <p>Liens externes :</p> Ce site peut contenir des liens vers des sites
          externes sur lesquels Adrien Marguin n'a aucun contrôle. Nous
          déclinons donc toute responsabilité quant au contenu et aux pratiques
          de ces sites externes.
        </li>
        <li>
          <p>Données personnelles : </p>Les données personnelles collectées via
          ce site sont utilisées uniquement dans le cadre de la relation
          commerciale avec nos clients. Conformément à la législation en
          vigueur, vous disposez d'un droit d'accès, de rectification, de
          suppression et de portabilité de vos données. Pour exercer ces droits,
          veuillez nous contacter à l'adresse suivante :
          adrien.marguin@gmail.com.
        </li>
        <li>
          <p>Cookies :</p> Ce site utilise des cookies pour améliorer
          l'expérience de navigation de l'utilisateur. Les cookies sont de
          petits fichiers texte stockés sur votre appareil lorsque vous visitez
          notre site. Vous pouvez paramétrer votre navigateur pour refuser
          l'utilisation des cookies, mais cela pourrait affecter certaines
          fonctionnalités du site. 9. Modification des mentions légales : Adrien
          Marguin se réserve le droit de modifier ces mentions légales à tout
          moment, sans préavis. Il est donc recommandé de consulter cette page
          régulièrement pour prendre connaissance des éventuelles mises à jour.
          En utilisant ce site, vous acceptez pleinement et sans réserve les
          présentes mentions légales. Fait à Opio, le 4 Aout 2023 | Adrien
          Marguin
        </li>
      </ul>
    </div>
  );
}

export default Legal;
