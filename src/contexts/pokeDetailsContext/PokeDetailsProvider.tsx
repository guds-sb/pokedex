import { PokemonDetailsInfo } from 'pages/pokedex/types';
import { useState, createContext } from 'react';

type PokeDetailsProviderProps = {
  children?: any
};

export const PokeDetailsContext = createContext<any>(undefined);

const PokeDetailsProvider = ({ children }: PokeDetailsProviderProps) => {
  const [pokemon, setPokemon] = useState<PokemonDetailsInfo | null>(null);

  return (
    <PokeDetailsContext.Provider value={{
      pokemon,
      setPokemon
    }}>
      {children}
    </PokeDetailsContext.Provider>
  );
}


export default PokeDetailsProvider;