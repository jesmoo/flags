import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/ListMap.css';

const ListMap = ({ name, population, region, capital, flags }) => {
  return (
    <Link to="/details" className="container__listMap">
      <div className="listMap__img">
        <img
          src={flags && flags.png}
          alt="flag of the countries"
          loading="lazy"
        />
      </div>
      <section className="listMap__text">
        <h2>{name}</h2>
        <div className="textPopulation">
          <p className="text__main">Population: </p>
          <p className="text__subMain">{population}</p>
        </div>
        <div className="textRegion">
          <p className="text__main">Region: </p>
          <p className="text__subMain">{region}</p>
        </div>
        <div className="textPopulation">
          <p className="text__main">Capital: </p>
          <p className="text__subMain">{capital}</p>
        </div>
      </section>
    </Link>
  );
};

export default ListMap;
