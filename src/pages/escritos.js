import React, { useState, useRef } from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

import { toast, Toaster } from "react-hot-toast";

import JoditEditor from "jodit-react";

import app from "gatsby-plugin-firebase-v9.0";

import {
  addDoc,
  collection,
  getDocs,
  doc,
  getFirestore,
} from "firebase/firestore";

const Escritos = () => {
  const editor = useRef(null);
  const [escrito, setEscrito] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState();
  const [autor, setAutor] = useState("");
  const [titulo, setTitulo] = useState("");

  if (typeof window !== "undefined") {
    const db = getFirestore(app);
    const escritosColRef = collection(db, "escritos");
  }

  const config = {
    readonly: false,
    height: 400,
    placeholder: "Comece a escrever...",
  };

  const handleInsert = async e => {
    let emailValid = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    e.preventDefault();

    if (!email) {
      toast.error("O campo e-mail tem que ser preenchido!");
      return;
    } else if (emailValid.test(email) === false) {
      toast.error("email inválido!");
    } else if (emailValid.test(email) === true) {
      try {
        await addDoc(escritosColRef, {
          date: date,
          email: email,
          autor: autor,
          titulo: titulo,
          escrito: escrito,
        });
        toast.success("Escrito salvo!");

        limpar();
      } catch (error) {
        toast.error(error);
      }
    } else {
      toast.error("Erro");
    }
  };
  const limpar = () => {
    setDate("");
    setEmail("");
    setAutor("");
    setTitulo("");
    setEscrito("");
  };

  return (
    <Layout>
      <Seo title="Formulário para enviar e salvar os seus escritos para serem publicados" />
      <h1>Adicionar novo Escrito</h1>
      <Toaster />
      <section>
        <form className="form">
          <section className="credentials">
            <input
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
            />
            <input
              placeholder="e-mail*"
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              placeholder="autor"
              type="text"
              value={autor}
              onChange={e => setAutor(e.target.value)}
            />
            <input
              placeholder="título"
              type="text"
              value={titulo}
              onChange={e => setTitulo(e.target.value)}
            />
            <p id="obrigatorio">*Campo obrigatório</p>
          </section>
          <div id="jodit-editor">
            <JoditEditor
              ref={editor}
              value={escrito}
              config={config}
              onBlur={newContent => setEscrito(newContent)}
              onChange={newContent => {}}
            />
            <button type="submit" className="btn" onClick={handleInsert}>
              publicar
            </button>
          </div>
        </form>
      </section>
    </Layout>
  );
};

export default Escritos;
