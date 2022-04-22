import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Table from '../components/Table';

const filterField = ['population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water'];

function Planets() {
  const { setFilterByNumericValues, filterByNumericValues,
    filterByName: { name }, setFilterByName,
    value, setValue,
    column, setColumn,
    comparison, setComparison,
    filterFields, setFilterFields } = useContext(PlanetsContext);

  useEffect(() => (
    setFilterFields(filterField)
  ), []);

  const resetFilter = (fields) => {
    setColumn(fields[0]);
    setComparison('maior que');
    setValue(0);
  };

  useEffect(() => {
    const newFilters = filterField.filter((field) => (
      filterByNumericValues.every((item) => (
        field !== item.column
      ))
    ));
    setFilterFields(newFilters);
    resetFilter(newFilters);
  }, [filterByNumericValues]);

  const handleFilter = () => {
    const newFilter = { column, comparison, value };
    const exist = filterByNumericValues
      .some((item) => JSON.stringify(item) === JSON.stringify(newFilter));
    if (!exist) setFilterByNumericValues((prevState) => [...prevState, newFilter]);
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
          { filterFields.map((field) => (
            <option key={ field } value={ field }>{ field }</option>)) }
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
