import { from } from 'rxjs';
import axios from 'axios';

export const getAllPokemon = () => {
  const requestPromise = axios.get(`${process.env.REACT_APP_POKEDEX_API}/pokemdon?limit=898`);
  return from(requestPromise);
}