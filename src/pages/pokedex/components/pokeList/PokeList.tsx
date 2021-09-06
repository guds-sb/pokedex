import { useState, useContext, useCallback } from 'react';
import { PokeListContext } from 'contexts/pokeListContext/PokeListProvider';
import { zeroPad } from 'helpers';
import { checkIfPageBottom } from './helpers';

import {
  Container,
  ListItem,
  ErrorMessage,
  Wrapper,
  PokeIcon
} from './styles';
import Spinner from 'components/spinner/Spinner';

const PokeList = () => {
  const [selected, setSelected] = useState(-1);
  const {
    listState,
    nextPage
  } = useContext(PokeListContext);

  const {
    paginatedList,
    isLoading,
    error
  } = listState;

  const scrollAllHandler = () => nextPage();

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
          <ListItem key={poke.id} selected={selected === poke.id} onClick={() => setSelected(poke.id)}>
            <PokeIcon src={poke.iconUrl} />
            {`No${zeroPad({ number: poke.id, size: 3 })}\u00A0\u00A0\u00A0${poke.name.toUpperCase()}`}
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