import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div className="app__footer section__padding">
      <div className="app__footer-links">
        <div className="app__footer-links_logo">
          <img src="#" alt="logo" /> {/* Mettez à jour le src avec votre chemin d'image */}
          <p>JC Plomberie</p>
        </div>
        <div className="app__footer-links_div">
          <h4>Liens</h4>
          <a href="#Accueil">Accueil</a>
          <a href="#Services">Services</a>
          <a href="#Contact">Contact</a>
        </div>
        <div className="app__footer-links_div">
          <h4>Société</h4>
          <p>Mentions légales</p>
        </div>
        <div className="app__footer-links_div">
          <h4>Nous trouver</h4>
          <p>4 rue de l'Egalité - 59580 Emerchicourt</p>
          <p>06 60 73 20 36</p>
          <p>jc.plomberie@laposte.net</p>
        </div>
      </div>
      <div className="app__footer-copyright">
        <p>© 2024 JC-PLOMBERIE. Tous droits réservés.</p>
      </div>
    </div>
  );
}

export default Footer;
