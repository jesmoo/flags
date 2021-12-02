import React from 'react';
import ListMap from './ListMap';
import useInitialState from '../Hooks/useInitialState';
import '../styles/components/MapContainer.css';

const MapContainer = () => {
  const initialState = useInitialState();
  return (
    <section className="container__list">
      {initialState.loading ? (
        <h1>Cargando</h1>
      ) : (
        initialState &&
        initialState.information.map((item) => (
          <ListMap key={item.name} {...item} />
        ))
      )}
    </section>
  );
};

export default MapContainer;
