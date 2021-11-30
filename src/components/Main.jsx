import React from 'react';
import Search from './Search';
import Selection from './Selection';
import MapContainer from './MapContainer';
import '../styles/components/Main.css';

const Main = () => {
  return (
    <main className="main__container">
      <Search />
      <Selection />
      <MapContainer />
    </main>
  );
};

export default Main;
