import React, { useState } from "react";
import { Link } from "gatsby";

import {
  MdArrowDropDown,
  MdClose,
  MdMenu,
  MdOutlineInfo,
  MdPerson,
} from "react-icons/md";

import { FaPenAlt } from "react-icons/fa";

const Header = ({ siteTitle }) => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">Meus Escritos</Link>
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
            <MdOutlineInfo />
            <FaPenAlt />
            <div className="terapias-dropdown">
              <Link>
                <MdPerson /> <MdArrowDropDown />
                <div className="terapias-dropdown-content"></div>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
