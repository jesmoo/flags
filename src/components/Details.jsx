import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TextContain from './TextContain';
import useOneData from '../Hooks/useOneData';
import SkeletonDetails from './SkeletonDetails';
import '../styles/components/Details.css';
import '../styles/breakpoints/detailsQueris.css';

const Details = () => {
  const { name } = useParams();
  const initialState = useOneData(name);
  const data = initialState.information;
  const numberFormat = new Intl.NumberFormat('en-US');
  return (
    <main className="container__main">
      <Link to="/" className="main__back">
        <span className="back__icon" />
        <p>Back</p>
      </Link>
      {initialState && initialState.loading ? (
        <SkeletonDetails />
      ) : (
        <>
          <img
            src={data[0].flags && data[0].flags.png}
            alt="flag"
            className="main__flag"
          />
          <h1 className="main__country">{data[0].name}</h1>
          <section className="Maincontain__text">
            <TextContain title="Native Name" contain={data[0].nativeName} />
            <TextContain title="Capital" contain={data[0].capital} />
            <TextContain title="Region" contain={data[0].region} />
            <TextContain title="Subregion" contain={data[0].subregion} />
            <TextContain title="Timezones" contain={data[0].timezones[0]} />
            <TextContain
              title="Currencies"
              contain={data[0].currencies[0].code}
            />
            <TextContain
              title="Population"
              contain={numberFormat.format(data[0].population)}
            />
            <TextContain
              title="Languages"
              contain={`${data[0].languages.map((item) => ` ${item.name}`)}`}
            />
          </section>
        </>
      )}
    </main>
  );
};

export default Details;
