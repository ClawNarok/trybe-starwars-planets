import React, { useState } from 'react';
import PlanetsContext from './PlanetsContext';
import planetsAPI from '../api/planetsAPI';

function PlanetsProvider({ children }) {
  const [data, setPlanets] = useState([]);

  async function getPlanets() {
    const planets = await planetsAPI();
    setPlanets(planets);
  }

  const props = {
    data,
    getPlanets,
  };

  return (
    <PlanetsContext.Provider value={ props }>
      { children }
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;
