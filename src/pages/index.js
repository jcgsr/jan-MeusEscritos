import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <main className="page">
      <section>
        <h1>Meus Escritos</h1>
        <StaticImage
          src="../images/pen.jpg"
          quality={95}
          alt="Foto de uma caneta antiga"
          layout="constrained"
          placeholder="blurred"
        />
      </section>
      <button className="btn" id="ler-btn">
        Ler Escritos
      </button>{" "}
      <button className="btn" id="publicar-btn">
        Publicar Escritos
      </button>
    </main>
  </Layout>
);

export default IndexPage;
