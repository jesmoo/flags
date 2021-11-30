import React from 'react';
import ListMap from './ListMap';
import '../styles/components/MapContainer.css';

const MapContainer = () => {
  return (
    <section className="container__list">
      <ListMap />
      <ListMap />
      <ListMap />
    </section>
  );
};

export default MapContainer;
