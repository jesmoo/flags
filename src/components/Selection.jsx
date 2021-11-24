import React from 'react';

const Selection = () => {
  return (
    <section className="container__selection">
      <select name="menu" label="Main Dish" className="selectFilter" id="menu">
        <option value="volvo">Africa</option>
        <option value="volvo">America</option>
        <option value="volvo">Asia</option>
        <option value="volvo">Europe</option>
        <option value="volvo">Oceania</option>
      </select>
    </section>
  );
};

export default Selection;
