import { useState } from 'react';

import {
  Container,
  SortArea,
  ListArea
} from './styles';
import Button from 'components/button/Button';

type PokeListProps = {
  pokemons: Array<any>
};

const PokeList = ({ pokemons = [] }: PokeListProps) => {
  const [list, setList] = useState<Array<any>>([]);

  return (
    <Container>
      <SortArea>
        <Button>FIGO</Button>
        <Button>FAPS</Button>
      </SortArea>
      <ListArea>
        {pokemons.map((poke: any, index: number) => <p key={index}>{poke.name}</p>)}
      </ListArea>
    </Container>
  );
}

export default PokeList;