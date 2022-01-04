import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Página Não Encontrada" />
    <h1>404: Página Não Encontrada</h1>
    <p>A página que você tentou acessar não existe...</p>
    <button className="btn">
      <Link to="/">Home</Link>
    </button>
  </Layout>
);

export default NotFoundPage;
