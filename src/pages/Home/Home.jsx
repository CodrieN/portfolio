import React, { useState } from "react";
import Gallery from "../../components/Gallery/Gallery";
import Legal from "../Legal/Legal";

import "./Home.scss";

function Home() {
  return (
    <>
      <div>
        <section>
          <h1>
            <span id="span1">Adrien Marguin</span>
            <span id="span2"> Web Developer</span>
          </h1>
        </section>

        <main>
          <Gallery />
        </main>
      </div>
    </>
  );
}

export default Home;

// <div class="mainPic">
// <i class="fa-brands fa-html5"></i>
// <i class="fa-brands fa-css3"></i>
// <i class="fa-brands fa-js"></i>
// <i class="fa-brands fa-react"></i>
// <i class="fa-brands fa-node"></i>
// <i class="fa-brands fa-node-js"></i>
// <i class="fa-brands fa-git-alt"></i>
// <i class="fa-brands fa-github"></i>
// <i class="fa-brands fa-ubuntu"></i>
// <i class="fa-brands fa-digital-ocean"></i>
// <i class="fa-brands fa-figma"></i>
// <i class="fa-brands fa-wordpress"></i>
// <i class="fa-brands fa-windows"></i>
// <i class="fa-brands fa-bootstrap fa-fade"></i>
// <i class="fa-brands fa-slack fa-spin"></i>
// <i class="fa-brands fa-linkedin"></i>
// </div>
