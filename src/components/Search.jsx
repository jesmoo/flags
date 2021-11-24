import React from 'react';
import '../styles/components/Search.css';

const Search = () => {
  return (
    <section className="container__sectionSearch">
      <span className="sectionSearch__icon"/>
      <input
        className="sectionSearch__text"
        type="text"
        name="search"
        id="search"
        placeholder="Search for a country..."
      />
    </section>
  );
};

export default Search;
