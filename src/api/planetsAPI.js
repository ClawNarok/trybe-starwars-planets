const STARWARS = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchPlanets() {
  const response = await fetch(STARWARS);
  const result = await response.json();
  return result.results;
}

export default fetchPlanets;
