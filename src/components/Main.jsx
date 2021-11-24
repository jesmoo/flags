import React from 'react';
import Search from './Search';
import Selection from './Selection';
import ListMap from './ListMap';
import '../styles/components/Main.css';

const Main = () => {
  return (
    <main className="main__container">
      <Search />
      <Selection />
      <ListMap />
    </main>
  );
};

export default Main;
