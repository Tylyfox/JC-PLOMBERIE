import React from 'react';
import CardService from '../../components/card/CardService';
import SeparateItem from '../../components/common/SeparateItem';
import AppWrap from '../../wrapper/AppWrap';
import './Services.scss';

import repairImage from '../../assets/images/services/repair.png';
import pipingImage from '../../assets/images/services/piping.png';
import sinkImage from '../../assets/images/services/sink.png';
import radiatorImage from '../../assets/images/services/radiator.png';
import waterHeaderImage from '../../assets/images/services/water-heater.png';
import pipelineImage from '../../assets/images/services/pipeline.png';

const services = [
    {
        title: 'Réparation Fuite',
        description: "Spécialiste dans la réparation rapide et efficace des fuites d'eau, utilisant des techniques avancées pour minimiser les dommages et garantir une réparation durable.",
        image: repairImage
      },
      {
        title: 'Recherche Fuite',
        description: 'Détection de fuites, j\'utilise des méthodes non invasives pour localiser l\'origine de toute fuite d\'eau. Une approche préventive qui permet d\'éviter des dégâts majeurs.',
        image: pipingImage
      },
      {
        title: 'Remplacement robinetterie/appareil sanitaire',
        description: "Services de remplacement de robinetterie et d'appareils sanitaires, offrant des solutions modernes et efficaces adaptées à vos besoins.",
        image: sinkImage
      },
      {
        title: 'Dépannage chauffe-eau électrique',
        description: "Spécialiste du dépannage de chauffe-eau électrique, je diagnostique et résous rapidement tout problème.",
        image: waterHeaderImage
      },
      {
        title: 'Débouchage canalisation',
        description: 'Je me charge du débouchage de vos canalisations, utilisant des techniques et outils spécifiques pour éliminer tout blocage.',
        image: pipelineImage
      },
      {
        title: 'Désembouage canalisation',
        description: 'Expert en désembouage, je traite vos canalisations de radiateur et plancher chauffant pour en retirer les boues accumulées.',
        image: radiatorImage
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