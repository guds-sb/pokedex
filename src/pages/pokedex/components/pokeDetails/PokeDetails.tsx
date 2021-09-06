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
      {pokemon && (
        <>
          <DetailsTopCard />
          <DetailsBottomCard />
        </>
      )}
    </Container>
  );
}

export default PokeDetails;