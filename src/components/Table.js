import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const TITTLES = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter',
  'Climate', 'Gravity', 'Terrain', 'Surface Water', 'Population', 'Films',
  'Created', 'Edited', 'URL'];

const comparisonFunc = {
  maior_que: (value, target) => (Number(value) > Number(target)),
  menor_que: (value, target) => (Number(value) < Number(target)),
  igual_a: (value, target) => (Number(value) === Number(target)),
};

const normalizeField = (name) => name.toLowerCase().replace(' ', '_');
const mapProperties = (item) => TITTLES.map((attrib, i) => (
  attrib === 'Name' ? (
    (<td key={ i } data-testid="planet-name">{ item[normalizeField(attrib)] }</td>)
  ) : (<td key={ i }>{ item[normalizeField(attrib)] }</td>)));

function Table() {
  const { getData, data,
    filterByName: { name },
    setPlanets, planets,
    filterByNumericValues,
    order,
  } = useContext(PlanetsContext);

  const sortPlanets = (arr) => {
    const { column, sort } = order;
    if (column === '' || sort === '') return arr;
    return sort === 'ASC' ? (
      arr.sort((a, b) => Number(a[column]) - Number(b[column]))
    ) : (
      arr.sort((a, b) => Number(b[column]) - Number(a[column])));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setPlanets(name === '' ? data : data.filter((item) => (
      item.name.toLowerCase().includes(name))));
  }, [name]);

  useEffect(() => {
    if (filterByNumericValues.length === 0) {
      setPlanets(data);
    } else {
      filterByNumericValues.forEach(({ column, comparison, value }) => {
        setPlanets(
          planets.filter((item) => (
            comparisonFunc[normalizeField(comparison)](item[column], value))),
        );
      });
    }
  }, [filterByNumericValues]);

  return (
    <table>
      <thead>
        <tr>
          { TITTLES.map((tittle, i) => <th key={ i }>{ tittle }</th>) }
        </tr>
      </thead>
      <tbody>
        { sortPlanets(planets)
          .map((planet, i) => <tr key={ i }>{mapProperties(planet)}</tr>) }
      </tbody>
    </table>
  );
}

export default Table;
