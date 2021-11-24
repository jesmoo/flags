import React from 'react';

const ListMap = () => {
  return (
    <section className="container__listMap">
      <div className="listMap__img">
        <img src="" alt="flag of the countries" loading="lazy" />
      </div>
      <selection className="listMap__text">
        <h2>Pais</h2>
        <div className="textPopulation">
          <p className="text__main">Population </p>
          <p className="text__subMain">123,456,789</p>
        </div>
        <div className="textRegion">
          <p className="text__main">Americas </p>
          <p className="text__subMain">123,456,789</p>
        </div>
        <div className="textPopulation">
          <p className="text__main">Capital </p>
          <p className="text__subMain">Cancun</p>
        </div>
      </selection>
    </section>
  );
};

export default ListMap;
