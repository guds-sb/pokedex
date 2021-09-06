import { useEffect, useRef, useState } from 'react';
import { getAllPokemon } from 'services/pokedex/PokedexService';
import pokeballImage from 'assets/pokedexPokeball.png';
import PokeList from './components/pokeList/PokeList';
import PokeListProvider from 'contexts/pokeListContext/PokeListProvider';
import FilterMenu from './components/filterMenu/FilterMenu';

import {
  Container,
  PokeballScroll,
  ContentArea
} from './styles';

type PokedexProps = {
};

const Pokedex = (props: PokedexProps) => {
  return (
    <Container>
      <PokeballScroll src={pokeballImage} />
      <ContentArea>
        <PokeListProvider>
          <FilterMenu />
          <PokeList />
        </PokeListProvider>
      </ContentArea>
    </Container>
  );
}

export default Pokedex;