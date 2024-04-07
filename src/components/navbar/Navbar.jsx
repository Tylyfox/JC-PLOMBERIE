import React from 'react';
import { IoMdPhonePortrait } from "react-icons/io";
import './Navbar.scss';

function Navbar() {
  const links = ['Accueil', 'Services', 'Contact'];

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src="#" alt="JC-PLOMBERIE-LOGO" /> {/* Mettez à jour le src avec votre chemin d'image */}
      </div>
      <ul className="app__navbar-links">
        {links.map((link, index) => (
          <li className="nav-item" key={`link-${index}`}>
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-contact">
        <IoMdPhonePortrait size={24} className="icon"/>
        <a href="tel:0660732036">06 60 73 20 36</a>
      </div>
    </nav>
  );
}

export default Navbar;