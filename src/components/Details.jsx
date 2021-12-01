import React from 'react';
import { Link } from 'react-router-dom';
import TextContain from './TextContain';
import '../styles/components/Details.css';

const Details = () => {
  return (
    <main className="container__main">
      <Link to="/" className="main__back">
        <span className="back__icon" />
        <p>Back</p>
      </Link>
      <img src="" alt="flag" className="main__flag" />
      <h1 className="main__country">Pais</h1>
      <TextContain />
      <TextContain />
      <TextContain />
    </main>
  );
};

export default Details;
