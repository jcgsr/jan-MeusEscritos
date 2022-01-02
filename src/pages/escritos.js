import React, { useState, useMemo, useRef } from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

// import { createEditor } from "slate";
// import { Slate, Editable, withReact } from "slate-react";

import JoditEditor from "jodit-react";

const Escritos = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("Start writing");
  const config = {
    readonly: false,
    height: 400,
  };
  const handleUpdate = event => {
    const editorContent = event.target.innerHTML;
    setContent(editorContent);
  };
  // const editor = useMemo(() => withReact(createEditor()), []);
  // const [value, setValue] = useState([
  //   {
  //     type: "paragraph",
  //     children: [{ text: "We have some base content." }],
  //   },
  // ]);
  return (
    <Layout>
      <Seo title="Formulário para enviar e salvar os seus escritos para serem publicados" />
      <h1>Adicionar novo Escrito</h1>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={handleUpdate}
        onChange={newContent => {}}
      />
      {/* <Slate
        editor={editor}
        value={value}
        onChange={newValue => setValue(newValue)}
      >
        <Editable style={{ border: "1px solid black" }} />
      </Slate>*/}
    </Layout>
  );
};

export default Escritos;
