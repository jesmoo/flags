import React from 'react';

const Search = ({ auxData, handleTyped, typed }) => {
  return (
    <section className="container__sectionSearch">
      <span className="sectionSearch__icon" />
      {auxData && !auxData.loading ? (
        <>
          <input
            onChange={handleTyped}
            value={typed.value}
            className="sectionSearch__text"
            type="text"
            name="search"
            id="search"
            placeholder="Search for a country..."
          />
        </>
      ) : (
        <>
          <input className="sectionSearch__text" placeholder="Loading..." />
        </>
      )}
    </section>
  );
};

export default Search;
