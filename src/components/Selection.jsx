import React from 'react';

const Selection = ({ auxData, handleSelection }) => {
  return (
    <section className="container__selection">
      <select
        name="menu"
        className="selectFilter"
        onChange={handleSelection}
        id="menu"
      >
        {auxData && !auxData.loading ? (
          <>
            <option value="1" disabled selected>
              Filer by Region
            </option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="2">Clean filter</option>
          </>
        ) : (
          <>
            <option value="Loading">Loading...</option>
          </>
        )}
      </select>
    </section>
  );
};

export default Selection;
