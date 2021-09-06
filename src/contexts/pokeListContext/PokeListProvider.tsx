import { useState, useEffect, createContext, useRef } from 'react';
import { PokemonDetailsInfo, PokemonListInfo } from 'pages/pokedex/types';
import { getAllPokemon } from 'services/pokedex/PokedexService';
import {
  handleAllPokemonResponse,
  getNextPage,
  setFiltersHandler,
} from './helpers'

export type ListSetup = {
  count: number,
  page: number,
  originalList: Array<PokemonListInfo>,
  processedList: Array<PokemonListInfo>,
};

export type ListState = {
  error: Error | null,
  isLoading: boolean,
  paginatedList: Array<PokemonDetailsInfo>,
};

type PokeListProviderProps = {
  children: any
};

type SetFilters = {
  filter?: string,
  sort?: string,
  inverted?: boolean
};

export const PokeListContext = createContext<any>(undefined);

const PokeListProvider = ({ children }: PokeListProviderProps) => {
  const listSetup = useRef<ListSetup>({
    count: 0,
    page: 1,
    originalList: [],
    processedList: []
  });
  const [listState, setListState] = useState<ListState>({
    error: null,
    isLoading: true,
    paginatedList: []
  });

  useEffect(() => {
    const observer = getAllPokemon().subscribe({
      next: (list: any) => handleAllPokemonResponse({ listSetup, list, listState, setListState }),
      error: (error: any) => setListState((old: ListState) => ({
        ...old,
        error: error?.message,
        isLoading: false
      }))
    });
    return () => {
      observer.unsubscribe()
    };
  }, []);

  const nextPage = () => {
    getNextPage({ listSetup, listState, setListState });
  };
  const setFilters = ({ filter, sort, inverted }: SetFilters) => {
    setFiltersHandler({ listSetup, listState, setListState, filter, sort, inverted });
  };

  return (
    <PokeListContext.Provider value={{
      listState,
      nextPage,
      setFilters
    }}>
      {children}
    </PokeListContext.Provider>
  );
}


export default PokeListProvider;