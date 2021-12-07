import React, { useState, useEffect } from 'react';
import ListMap from './ListMap';
import getData from '../utils/getData';
import '../styles/components/Main.css';

const Main = () => {
  const [typed, setTyped] = useState({});

  const [auxData, setAuxData] = useState({
    loading: true,
    error: null,
    information: undefined,
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllDatas();
  }, []);

  const getAllDatas = async () => {
    // data requests are prepared
    setAuxData({ loading: true, error: null });
    try {
      const datas = await getData();
      setData(datas);
      setAuxData({ loading: false, information: datas });
    } catch (error) {
      setAuxData({ loading: false, error: error });
    }
  };

  const handleTyped = (e) => {
    const optionTyped = e.target.value;
    setTyped({ ...typed, value: optionTyped });
    filterTyped(optionTyped);
  };

  const handleSelection = (e) => {
    const optionSelect = e.target.value;
    if (optionSelect === '2') {
      setData(auxData.information);
    } else {
      filterSelection(optionSelect);
    }
  };

  const filterSelection = (country) => {
    // data is filtered
    const filterCountry = auxData.information.filter((item) => {
      if (item.region === country) {
        return item;
      }
      return null;
    });
    setData(filterCountry);
  };
  const filterTyped = (optionTyped) => {
    // data is filtered
    const filteName = auxData.information.filter((item) => {
      if (
        item.name.toString().toLowerCase().includes(optionTyped.toLowerCase())
      ) {
        return item;
      }
      return null;
    });
    setData(filteName);
  };

  return (
    <main className="main__container">
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
      <section className="container__list">
        {data.loading ? (
          <h1>Cargando</h1>
        ) : (
          data && data.map((item, id) => <ListMap key={id} {...item} />)
        )}
      </section>
    </main>
  );
};

export default Main;
