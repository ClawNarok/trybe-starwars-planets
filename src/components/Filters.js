import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filters() {
  const { filterByNumericValues, setFilterByNumericValues,
    setPlanets, data } = useContext(PlanetsContext);

  const removeFilter = (item) => {
    const newFilters = filterByNumericValues.filter(({ column }) => column !== item);
    setFilterByNumericValues(newFilters);
    setPlanets(data);
  };

  const filter = (item) => {
    const { column, comparison, value } = item;
    return (
      <p
        key={ column }
        data-testid="filter"
      >
        { `${column} ${comparison} ${value} ` }
        <button
          type="button"
          onClick={ () => removeFilter(column) }
        >
          x
        </button>
      </p>
    );
  };

  return (
    <section>
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ () => (setFilterByNumericValues([])) }
      >
        Remover todas filtragens
      </button>
      { filterByNumericValues.length !== 0 && <hr /> }
      { filterByNumericValues.map((item) => filter(item)) }
    </section>
  );
}

export default Filters;
