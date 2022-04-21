import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const TITTLES = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter',
  'Climate', 'Gravity', 'Terrain', 'Surface Water', 'Population', 'Films',
  'Created', 'Edited', 'URL'];

const normalizeName = (name) => name.toLowerCase().replace(' ', '_');
const mapProperties = (item) => TITTLES.map((attrib, i) => (
  <td key={ i }>{ item[normalizeName(attrib)] }</td>));

function Table() {
  const { getPlanets, data } = useContext(PlanetsContext);

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          { TITTLES.map((tittle, i) => <th key={ i }>{ tittle }</th>) }
        </tr>
      </thead>
      <tbody>
        { data.map((planet, i) => <tr key={ i }>{mapProperties(planet)}</tr>) }
      </tbody>
    </table>
  );
}

export default Table;
