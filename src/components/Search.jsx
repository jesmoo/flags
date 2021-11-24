import React from 'react';

const Search = () => {
  return (
    <section className="container__sectionSearch">
      <span className="sectionSearch__icon" />
      <input
        className="sectionSearch__text"
        type="text"
        name="search"
        id="search"
      />
    </section>
  );
};

export default Search;
