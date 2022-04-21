import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const TITTLES = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter',
  'Climate', 'Gravity', 'Terrain', 'Surface Water', 'Population', 'Films',
  'Created', 'Edited', 'URL'];

const normalizeName = (name) => name.toLowerCase().replace(' ', '_');
const mapProperties = (item) => TITTLES.map((attrib, i) => (
  <td key={ i }>{ item[normalizeName(attrib)] }</td>));

function Table() {
  const { getData, data, filterByName: { name },
    setPlanets, planets } = useContext(PlanetsContext);
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setPlanets(name === '' ? data : data.filter((item) => (
      item.name.toLowerCase().includes(name))));
  }, [name]);

  return (
    <table>
      <thead>
        <tr>
          { TITTLES.map((tittle, i) => <th key={ i }>{ tittle }</th>) }
        </tr>
      </thead>
      <tbody>
        { planets.map((planet, i) => <tr key={ i }>{mapProperties(planet)}</tr>) }
      </tbody>
    </table>
  );
}

export default Table;
