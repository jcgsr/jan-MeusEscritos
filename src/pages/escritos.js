import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const Escritos = () => (
  <Layout>
    <Seo title="Formulário para enviar e salvar os seus escritos para serem publicados" />
    <h1>Adicionar novo Escrito</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Escritos;
