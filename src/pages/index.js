import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

import app from "gatsby-plugin-firebase-v9.0";

import PulseLoader from "react-spinners/PulseLoader";

import { toast, Toaster } from "react-hot-toast";

import {
  collection,
  getDocs,
  doc,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";

const IndexPage = () => {
  // Escritos mostrar
  const [escritos, setEscritos] = useState([]);
  const [loading, setLoading] = useState(true);
  const db = getFirestore(app);
  const escritosColRef = collection(db, "escritos");
  const q = query(escritosColRef, orderBy("autor"));

  useEffect(() => {
    const getEscritos = async () => {
      const escritosData = await getDocs(q);
      setEscritos(
        escritosData.docs.map(doc => ({ ...doc.data(), id: doc.id }))
      );
      setLoading(false);
      toast(
        "As personagens e o universo ficcional de todas as obras nesse site são propriedade exclusiva de seus criadores e, por isso, de sua inteira responsabilidade. Este site é apenas um veículo para que se possa divulgar os Escritos dos escritores (principalmente de estudantes) para um público mais amplo, sem fins lucrativos.",
        {
          icon: "⚠️",
        }
      );
    };
    getEscritos();
  }, []);
  if (loading) {
    return (
      <div className="spinner">
        <PulseLoader coloer="grey" />
      </div>
    );
  }
  return (
    <Layout>
      <Seo title="Home" />
      <main className="page">
        <section>
          <Toaster />
          <h1>Meus Escritos</h1>
          <StaticImage
            src="../images/pen.jpg"
            quality={95}
            alt="Foto de uma caneta antiga"
            layout="constrained"
            placeholder="blurred"
          />
        </section>
        {/*<button className="btn" id="ler-btn">
        Ler Escritos
      </button>{" "}*/}
        <button className="btn" id="publicar-btn">
          <Link to="/escritos">Publicar Escritos</Link>
        </button>
        <h2>Escritos</h2>
        <section className="escritos">
          {escritos.map(escrito => {
            return (
              <div>
                <p>
                  Autor: <strong>{escrito.autor}</strong>
                </p>
                <p>
                  {" "}
                  Título: <strong>{escrito.obra_titulo}</strong>
                </p>
                <hr />
                <p>{escrito.escrito}</p>
              </div>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;
