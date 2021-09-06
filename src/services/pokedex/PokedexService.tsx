import { from, map, zip } from 'rxjs';
import axios from 'axios';
import { getIdFrolUrl } from 'helpers';

type GetPaginatedPokemon = {
  ids: Array<number>
}

type ListPokemonResponse = {
  name: string,
  url: string
}

export const getPaginatedPokemon = ({ ids }: GetPaginatedPokemon) => {
  return zip(...ids.map(id =>
    from(axios.get(`${process.env.REACT_APP_POKEDEX_API}/pokemon/${id}`))
  ));
}

export const getAllPokemon: any = () => {
  const requestPromise = axios.get(`${process.env.REACT_APP_POKEDEX_API}/pokemon?limit=898`);
  return from(requestPromise).pipe(
    map(data => data?.data?.results?.map(({ name, url }: ListPokemonResponse) => ({
      name,
      id: getIdFrolUrl({ url })
    })))
  );
}
