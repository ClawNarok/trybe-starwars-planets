import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Table from '../components/Table';

function Planets() {
  const { filterByName: { name }, setFilterByName } = useContext(PlanetsContext);

  return (
    <section>
      <input
        type="text"
        value={ name }
        data-testid="name-filter"
        onChange={ (e) => setFilterByName({ name: e.target.value }) }
      />
      <Table />
    </section>
  );
}

export default Planets;
