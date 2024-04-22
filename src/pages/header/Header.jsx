import React from 'react';
import './Header.scss';
import AppWrap from '../../wrapper/AppWrap';

function Header() {
  return (
    <div className="app__header" id="Accueil">
      <div className="app_header-infos">
        <h1>JC-PLOMBERIE, votre expert en plomberie.</h1>
        <p>Profitez de notre expertise pour tous vos besoins en plomberie, depuis la recherche minutieuse de fuites jusqu'au dépannage spécialisé de vos chauffe-eau.</p>
        <p><strong>Un devis gratuit vous est proposé pour tout projet d'une valeur de 250 euros ou plus.</strong></p>
        <p>Chez JC Plomberie, nous nous engageons à vous fournir des solutions de plomberie non seulement efficaces mais également durables. Nous sommes déterminés à assurer votre entière satisfaction à chaque étape de notre intervention. Faites confiance à notre savoir-faire pour un service irréprochable et des résultats qui durent.</p>
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

export default AppWrap(Header, 'acceuil');
