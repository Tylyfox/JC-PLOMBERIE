import React from 'react';
import {SeparateItem, Map} from '../../components';
import AppWrap from '../../wrapper/AppWrap';
import {email, smartphone, gps} from "../../assets/images";
import './Contact.scss';

const contacts = [
  {
    image: gps,
    title: 'ADRESSE:',
    description: '4 rue de l\'Egalité, 59580 EMERCHICOURT',
    type: 'address'
  },
  {
    image: email,
    title: 'EMAIL:',
    description: 'jc.plomberie@laposte.net',
    type: 'mail'
  },
  {
    image: smartphone,
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
              {contact.type === 'phone' && <a href={`tel:${contact.description}`}>{contact.description.match(/..?/g).join(' ')}</a>}
              {contact.type === 'address' && <p>{contact.description}</p>}
            </div>
          ))}
        </div>
        <Map />
      </div>
    </div>
  );
}

export default AppWrap(Contact, 'contact');
