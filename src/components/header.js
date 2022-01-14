import React, { useState } from "react";
import { Link } from "gatsby";

import { MdOutlineLogin, MdClose, MdMenu, MdInfo } from "react-icons/md";

import logo from "../images/logo.svg";

import { FaPenAlt } from "react-icons/fa";

const Header = ({ siteTitle }) => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img
              src={logo}
              alt="Meus Escritos logo"
              style={{ height: "1.3rem" }}
            />
          </Link>
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            {!showLinks ? <MdMenu /> : <MdClose />}
          </button>
        </div>
        <div
          className={`${
            showLinks ? "links-container show-container" : " links-container"
          }`}
        >
          <ul className="links">
            <Link to="/info">
              <MdInfo />
            </Link>
            <Link to="/escritos">
              <FaPenAlt />
            </Link>
            <Link to="/login">
              <MdOutlineLogin />
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
