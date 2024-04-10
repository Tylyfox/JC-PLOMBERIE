import React from 'react';
import {CardService, SeparateItem} from "../../components"
import AppWrap from '../../wrapper/AppWrap';
import './Services.scss';

import {repair, piping, sink, radiator, waterHeader, pipeline} from "../../assets/images";

const services = [
    {
        title: 'Réparation Fuite',
        description: "Spécialiste dans la réparation rapide et efficace des fuites d'eau, utilisant des techniques avancées pour minimiser les dommages et garantir une réparation durable.",
        image: repair
      },
      {
        title: 'Recherche Fuite',
        description: 'Détection de fuites, j\'utilise des méthodes non invasives pour localiser l\'origine de toute fuite d\'eau. Une approche préventive qui permet d\'éviter des dégâts majeurs.',
        image: piping
      },
      {
        title: 'Remplacement robinetterie/appareil sanitaire',
        description: "Services de remplacement de robinetterie et d'appareils sanitaires, offrant des solutions modernes et efficaces adaptées à vos besoins.",
        image: sink
      },
      {
        title: 'Dépannage chauffe-eau électrique',
        description: "Spécialiste du dépannage de chauffe-eau électrique, je diagnostique et résous rapidement tout problème.",
        image: waterHeader
      },
      {
        title: 'Débouchage canalisation',
        description: 'Je me charge du débouchage de vos canalisations, utilisant des techniques et outils spécifiques pour éliminer tout blocage.',
        image: pipeline
      },
      {
        title: 'Désembouage canalisation',
        description: 'Expert en désembouage, je traite vos canalisations de radiateur et plancher chauffant pour en retirer les boues accumulées.',
        image: radiator
      }
];

function Services() {
  return (
    <div className="app__service" id="Services">
      <SeparateItem />
      <h1>Nos services</h1>
      <section>
        {services.map((service) => (
          <CardService
            key={service.title}
            title={service.title}
            description={service.description}
            image={service.image} />
        ))}
      </section>
    </div>
  );
}

export default AppWrap(Services, 'services');