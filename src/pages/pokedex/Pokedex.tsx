import pokeballImage from 'assets/pokedexPokeball.png';
import PokeList from './components/pokeList/PokeList';
import PokeDetailsProvider from 'contexts/pokeDetailsContext/PokeDetailsProvider';
import PokeListProvider from 'contexts/pokeListContext/PokeListProvider';
import FilterMenu from './components/filterMenu/FilterMenu';
import PokeDetails from './components/pokeDetails/PokeDetails';

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
          <PokeDetailsProvider>
            <FilterMenu />
            <PokeList />
            <PokeDetails />
          </PokeDetailsProvider>
        </PokeListProvider>
      </ContentArea>
    </Container>
  );
}

export default Pokedex;