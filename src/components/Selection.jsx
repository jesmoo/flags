import React from 'react';
import '../styles/components/Selection.css';

const Selection = () => {
  return (
    <section className="container__selection">
      <select name="menu" className="selectFilter" id="menu">
        <option value="1" disabled selected>
          Filer by Region
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </section>
  );
};

export default Selection;
