import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/notFound.css';

const NotFound = () => {
  return (
    <main className="container__main-notFound">
      <Link to="/" className="main__back btnNotfound">
        <span className="back__icon" />
        <p>Back</p>
      </Link>
      <h1>Not found</h1>
      <span className="main-notFound__icon" />
    </main>
  );
};

export default NotFound;
