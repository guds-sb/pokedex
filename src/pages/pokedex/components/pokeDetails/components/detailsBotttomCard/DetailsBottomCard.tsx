import Text from 'components/text/Text';
import { PokeDetailsContext } from 'contexts/pokeDetailsContext/PokeDetailsProvider';
import { useContext } from 'react';
import {
  Container,
  MovesList,
  MoveDisplay
} from './styles';

const DetailsBottomCard = () => {
  const {
    pokemon
  } = useContext(PokeDetailsContext);

  return (
    <>
      <Text>LIST OF MOVES:</Text>
      <Container>
        <MovesList>
          {pokemon.moves.map((move: any) => (
            <MoveDisplay>
              <Text>{move}</Text>
            </MoveDisplay>
          ))}
        </MovesList>
      </Container>
    </>
  );
}

export default DetailsBottomCard;