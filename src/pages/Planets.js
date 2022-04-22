import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Table from '../components/Table';

function Planets() {
  const { setFilterByNumericValues,
    filterByName: { name }, setFilterByName,
    value, setValue,
    column, setColumn,
    comparison, setComparison } = useContext(PlanetsContext);

  const resetFilter = () => {
    setColumn('population');
    setComparison('maior que');
    setValue(0);
  };

  const handleFilter = () => {
    const newFilter = { column, comparison, value };
    setFilterByNumericValues((prevState) => [...prevState, newFilter]);
    resetFilter();
  };

  return (
    <section>
      <input
        type="text"
        value={ name }
        data-testid="name-filter"
        onChange={ (e) => setFilterByName({ name: e.target.value }) }
      />
      <hr />
      <div>
        <select
          value={ column }
          data-testid="column-filter"
          onChange={ (e) => setColumn(e.target.value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          value={ comparison }
          data-testid="comparison-filter"
          onChange={ (e) => setComparison(e.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          value={ value }
          onChange={ (e) => setValue(e.target.value) }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleFilter }
        >
          Filtrar
        </button>
      </div>
      <Table />
    </section>
  );
}

export default Planets;
