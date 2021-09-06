import Text from 'components/text/Text';
import { PokeDetailsContext } from 'contexts/pokeDetailsContext/PokeDetailsProvider';
import { useContext } from 'react';
import DetailsBottomCard from './components/detailsBotttomCard/DetailsBottomCard';
import DetailsTopCard from './components/detailsTopCard/DetailsTopCard';
import {
  Container,
} from './styles';

const PokeDetails = () => {
  const {
    pokemon
  } = useContext(PokeDetailsContext);

  return (
    <Container>
      {pokemon 
        ? (
          <>
            <DetailsTopCard />
            <DetailsBottomCard />
          </>
        )
        : (
          <Text>
            Select a Pokémon on the left to view its details
          </Text>
        )
      }
    </Container>
  );
}

export default PokeDetails;