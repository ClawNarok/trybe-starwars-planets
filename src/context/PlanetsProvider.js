import React, { useState } from 'react';
import PlanetsContext from './PlanetsContext';
import planetsAPI from '../api/planetsAPI';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [planets, setPlanets] = useState([]);

  async function getData() {
    const result = await planetsAPI();
    setData(result);
    setPlanets(result);
  }

  const contextValue = {
    data,
    getData,
    filterByName,
    setFilterByName,
    planets,
    setPlanets,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      { children }
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;
