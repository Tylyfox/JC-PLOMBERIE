import React from 'react';
import SeparateItem from '../../components/common/SeparateItem'; 
import MapComponent from '../../components/map/Map';
import AppWrap from '../../wrapper/AppWrap';
import emailImage from '../../assets/images/contact/email.png'; // Ajustez les chemins selon votre structure
import phoneImage from '../../assets/images/contact/smartphone.png';
import gpsImage from '../../assets/images/contact/gps.png';
import './Contact.scss';

const contacts = [
  {
    image: gpsImage,
    title: 'ADRESSE:',
    description: '4 rue de l\'Egalité, 59580 EMERCHICOURT',
    type: 'address'
  },
  {
    image: emailImage,
    title: 'EMAIL:',
    description: 'jc.plomberie@laposte.net',
    type: 'mail'
  },
  {
    image: phoneImage,
    title: 'APPELEZ NOUS:',
    description: '0660732036',
    type: 'phone'
  }
];

function Contact() {
  return (
    <div className="app__contact" id="Contact">
      <SeparateItem />
      <h1>Nous contacter</h1>
      <div className="app__contact-details">
        <div className="app__contact-details_infos">
          {contacts.map((contact) => (
            <div className="app__contact-details_item" key={contact.title}>
              <div className="app__contact-details_img">
                <img src={contact.image} alt={contact.title} />
              </div>
              <h2>{contact.title}</h2>
              {contact.type === 'mail' && <a href={`mailto:${contact.description}`}>{contact.description}</a>}
              {contact.type === 'phone' && <a href={`tel:${contact.description}`}>{contact.description}</a>}
              {contact.type === 'address' && <p>{contact.description}</p>}
            </div>
          ))}
        </div>
        <MapComponent />
      </div>
    </div>
  );
}

export default AppWrap(Contact, 'contact');
