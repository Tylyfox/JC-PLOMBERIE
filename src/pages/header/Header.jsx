import React from 'react';
import './Header.scss';

function Header() {
  return (
    <div className="app__header">
      <div className="app_header-infos">
        <h1>Bienvenue chez JC-PLOMBERIE, votre expert en plomberie!</h1>
        <p>Profitez de mon expertise pour tous vos besoins en plomberie, de la recherche de fuites au dépannage de chauffe-eau.</p>
        <p><strong>Devis gratuit pour tout projet à partir de 250 euros.</strong></p>
        <p>Chez JC Plomberie, nous sommes dédiés à fournir des solutions de plomberie efficaces et durables, garantissant votre satisfaction à chaque étape.</p>
      </div>
      <div className="app__header-contact">
        <div className="app__header-contact_infos">
          <h2>Une urgence?</h2>
          <h2>Nous Contacter</h2>
        </div>
        <a href="tel:0660732036">06 60 73 20 36</a>
        <a href="mailto:jc.plomberie@laposte.net">jc.plomberie@laposte.net</a>
      </div>
    </div>
  );
}

export default Header;
