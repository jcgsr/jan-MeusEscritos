import React, { useState } from "react";

import { Link } from "gatsby";

import app from "gatsby-plugin-firebase-v9.0";

import { BsFillArrowUpCircleFill } from "react-icons/bs";

import parse from "html-react-parser";

import {
  collection,
  /*getDocs,*/
  // doc,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";

const Escrito = ({ escrito }) => {
  const [escritos, setEscritos] = useState([]);
  const [loading, setLoading] = useState(true);
  const db = getFirestore(app);
  const escritosColRef = collection(db, "escritos");
  const q = query(escritosColRef, orderBy("autor"));

  // Mostrar mais/menos
  const [readmore, setReadmore] = useState(false);

  return (
    <div>
      <p>
        Autor: <strong>{escrito.autor}</strong>
      </p>
      <p>
        {" "}
        Título: <strong>{escrito.titulo}</strong>
      </p>
      <div id="obras">
        {" "}
        {readmore
          ? parse(escrito.escrito)
          : parse(escrito.escrito.substring(0, 200))}
        <button id="readmore" onClick={() => setReadmore(!readmore)}>
          {readmore ? "ler menos" : "ler mais"}
        </button>
        <Link to="#beginning">
          <BsFillArrowUpCircleFill />
        </Link>
      </div>
      <hr />
    </div>
  );
};

export default Escrito;
