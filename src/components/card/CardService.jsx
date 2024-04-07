import React from 'react';
import './CardService.scss';

function CardService({ title, description, image }) {
  return (
    <div className="container">
      <div className="box">
        <span style={{ '--i': 0 }}></span>
        <span style={{ '--i': 1 }}></span>
        <span style={{ '--i': 2 }}></span>
        <span style={{ '--i': 3 }}></span>
        <img src={image} alt="service-icon" />
        <div className="content">
          <h2>{title}</h2>
          <p>{description}</p>
          <a href="tel:0660732036">NOUS CONTACTER</a>
        </div>
      </div>
    </div>
  );
}

export default CardService;