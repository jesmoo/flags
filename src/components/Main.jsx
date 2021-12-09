import React, { useState, useEffect } from 'react';
import Search from './Search';
import Selection from './Selection';
import ContainerFlags from './ContainerFlags';
import getData from '../utils/getData';
import '../styles/components/Main.css';
import '../styles/breakpoints/mainQueris.css';

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
      <Search auxData={auxData} handleTyped={handleTyped} typed={typed} />
      <Selection auxData={auxData} handleSelection={handleSelection} />
      <ContainerFlags auxData={auxData} data={data} />
    </main>
  );
};

export default Main;
