import { useState, useContext } from 'react';
import { PokeListContext } from 'contexts/pokeListContext/PokeListProvider';
import { screenSize, zeroPad } from 'helpers';
import { checkIfPageBottom } from './helpers';
import Spinner from 'components/spinner/Spinner';
import { PokeDetailsContext } from 'contexts/pokeDetailsContext/PokeDetailsProvider';

import {
  Container,
  ListItem,
  ErrorMessage,
  Wrapper,
  PokeIcon
} from './styles';
import { PokemonDetailsInfo } from 'pages/pokedex/types';

const PokeList = () => {
  const [selected, setSelected] = useState(-1);
  const {
    listState,
    nextPage
  } = useContext(PokeListContext);
  const {
    setPokemon,
  } = useContext(PokeDetailsContext);

  const {
    paginatedList,
    isLoading,
    error
  } = listState;

  const scrollAllHandler = () => nextPage();

  const selectPokemonHandler = (poke: PokemonDetailsInfo) => {
    setSelected(poke.id);
    setPokemon(poke);
  };

  const listStatus = () => {
    if (error) {
      return (
        <Wrapper>
          <ErrorMessage>
            {error}
          </ErrorMessage>
        </Wrapper>
      )
    }
    return (
      <>
        {paginatedList.map((poke: any) => (
          <ListItem key={poke.id} selected={selected === poke.id} onClick={() => selectPokemonHandler(poke)}>
            <PokeIcon src={poke.iconUrl} />
            {screenSize() > 1400 && `No${zeroPad({ number: poke.id, size: 3 })}\u00A0\u00A0\u00A0`}
            {poke.name.toUpperCase()}
          </ListItem>
        ))}
        {isLoading && (
          <Wrapper>
            <Spinner />
          </Wrapper>
        )}
      </>
    )
  }

  return (
    <Container
      onScroll={(event) => !isLoading && checkIfPageBottom({
        event,
        handler: scrollAllHandler
      })}
    >
      {listStatus()}
    </Container>
  );
}

export default PokeList;