import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import planetsAPI from '../api/planetsAPI';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [column, setColumn] = useState('population');
  const [value, setValue] = useState(0);
  const [comparison, setComparison] = useState('maior que');
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [planets, setPlanets] = useState([]);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [filterFields, setFilterFields] = useState([]);
  const [order, setOrder] = useState({ column: 'population', sort: '' });
  const [columnOrder, setColumnOrder] = useState('population');
  const [sortOrder, setSortOrder] = useState('');

  const alphabetic = (a, b) => {
    const MENOS_UM = -1;
    if (a.name > b.name) return 1;
    if (a.name < b.name) return MENOS_UM;
    return 0;
  };

  async function getData() {
    const result = await planetsAPI();
    setData(result.sort((a, b) => alphabetic(a, b)));
    setPlanets(result.sort((a, b) => alphabetic(a, b)));
  }

  const contextValue = {
    data,
    getData,
    filterByName,
    setFilterByName,
    planets,
    setPlanets,
    filterByNumericValues,
    setFilterByNumericValues,
    column,
    setColumn,
    value,
    setValue,
    comparison,
    setComparison,
    filterFields,
    setFilterFields,
    order,
    setOrder,
    columnOrder,
    setColumnOrder,
    sortOrder,
    setSortOrder,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PlanetsProvider;
