import React from 'react';
import { MapContainer, TileLayer, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.scss';

function Map() {

  const center = [50.3333, 3.1833];
  const zoom = 9;
  const circleCenter = [50.3333, 3.1833];
  const circleRadius = 25000;
  const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

  return (
    <div style={{ height: '300px', width: '500px', zIndex: 4 }}>
      <MapContainer className="app__map" center={center} zoom={zoom} style={{ height: '100%', width: '100%', zIndex: 4 }}>
        <TileLayer url={url} attribution={attribution} />
        <Circle center={circleCenter} radius={circleRadius} />
      </MapContainer>
    </div>
  );
}

export default Map;
