import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import { StaticImage } from "gatsby-plugin-image";

const Info = () => {
  return (
    <Layout>
      <Seo title="Info" />
      <h1>Informações</h1>
      <section className="info">
        <h2>Instruções</h2>
        <h4>Enviar um Escrito</h4>
        <ul>
          <li>
            Na página principal (Home), clique na ícone da caneta lá no menu{" "}
            <StaticImage
              src="../images/caneta.png"
              quality={95}
              alt="caneta para publicar escrito"
              layout="constrained"
              placeholder="blurred"
            />{" "}
            ou no botão{" "}
            <StaticImage
              src="../images/publicar.png"
              quality={95}
              alt="caneta para publicar escrito"
              layout="constrained"
              placeholder="blurred"
            />
            .
          </li>
          <li>
            Na página seguinte, preencha os dados. Atenção para o campo
            "E-mail": ele é{" "}
            <strong>
              <u>obrigatório</u>
            </strong>{" "}
            porque somente por ele poderemos contactar o autor caso sua obra
            seja escolhida para ser publicada por alguma editora. Cole seu
            Escrito no editor de texto da página e depois clique em{" "}
            <StaticImage
              src="../images/publicar2.png"
              quality={95}
              alt="caneta para publicar escrito"
              layout="constrained"
              placeholder="blurred"
            />
            . Espere a confirmação e pronto: seu escrito já poderá ser lido na
            página principal.
          </li>
          <li>
            Se for criar o Escrito na hora de enviar, basta fazê-lo no editor de
            texto e clicar no botão{" "}
            <StaticImage
              src="../images/publicar2.png"
              quality={95}
              alt="caneta para publicar escrito"
              layout="constrained"
              placeholder="blurred"
            />
            .
            <strong>
              {" "}
              <u>Atenção</u>:
            </strong>{" "}
            uma vez enviado, não se pode mais editar seu Escrito, por isso só o
            envie se ele já estiver terminado.
          </li>
          <li>
            Se estiver criando seu Escrito no editor de texto nesse site, tenha
            em mente que o seu progresso não será salvo de nenhuma maneira por
            esse site. Então, há o risco de perder tudo que você já criou.
          </li>
          <li>
            Se quiser excluir seu Escrito, basta entrar em contato pelo{" "}
            <a
              className="info-links"
              href="https://api.whatsapp.com/send?phone=5579988284730&text=Opa! Gostaria de falar sobre Meus Escritos."
              target="blank"
            >
              Whatsapp
            </a>
            , pelo{" "}
            <a
              className="info-links"
              href="https://telegram.me/jcgsr"
              target="blank"
            >
              Telegram
            </a>{" "}
            ou{" "}
            <a className="info-links" href="mailto:cabralguerra@gmail.com">
              E-mail
            </a>
            . Seu Escrito será excluído o mais rápido possível do banco de
            dados.
          </li>
          <li>
            Esse site é totalmente <strong>gratuito</strong>. Se alguém cobrar
            qualquer coisa para enviar seu Escrito, não pague!
          </li>
        </ul>

        <h5>Disclaimer</h5>
        <p>
          As personagens e o universo ficcional de todas as obras nesse site são
          propriedade exclusiva de seus criadores e, por isso, de sua inteira
          responsabilidade. Este site é apenas um veículo para que se possa
          divulgar os Escritos dos escritores (principalmente de estudantes)
          para um público mais amplo, sem fins lucrativos.
        </p>
        <hr />
        <h4>Contatos</h4>
        <section className="contatos">
          <button>
            <a
              href="https://api.whatsapp.com/send?phone=5579988284730&text=Opa! Gostaria de falar sobre Meus Escritos."
              target="blank"
            >
              <IoLogoWhatsapp />
            </a>
          </button>{" "}
          <button>
            <a href="https://telegram.me/jcgsr" target="blank">
              <FaTelegramPlane />
            </a>
          </button>{" "}
          <button>
            <a href="mailto:cabralguerra@gmail.com">
              <MdEmail />
            </a>
          </button>
        </section>
      </section>
    </Layout>
  );
};

export default Info;
