import React, { useState, useMemo } from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

const Escritos = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "We have some base content." }],
    },
  ]);
  return (
    <Layout>
      <Seo title="Formulário para enviar e salvar os seus escritos para serem publicados" />
      <h1>Adicionar novo Escrito</h1>
      <Slate
        editor={editor}
        value={value}
        onChange={newValue => setValue(newValue)}
      >
        <Editable style={{ border: "1px solid black" }} />
      </Slate>
      <div></div>
    </Layout>
  );
};

export default Escritos;
