import axios from 'axios';

const ROOT_URL = `http://api.population.io/1.0/population/`;

export const FETCH_POPULATION = 'FETCH_POPULATION';

export function fetchPopulation(country) {
  const url = `${ROOT_URL}${country}/today-and-tomorrow/`;
  const request = axios.get(url);

  console.log('Request:', request);

  return {
    type: FETCH_POPULATION,
    payload: request
  }
}
