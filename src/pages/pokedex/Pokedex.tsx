import { useEffect, useRef, useState } from 'react';
import { getAllPokemon } from 'services/pokedex/PokedexService';
import pokeballImage from 'assets/pokedexPokeball.png';
import PokeList from './components/pokeList/PokeList';

import {
  Container,
  PokeballScroll,
  ContentArea
} from './styles';

type PokedexProps = {
  mode: 'cached' | 'sortable'
};

const Pokedex = ({ mode }: PokedexProps) => {
  const [serviceError, setServiceError] = useState<Error>(null!);
  const [serviceResponse, setServiceResponse] = useState<any>({});
  const scrollDirection = useRef<number>(0);

  useEffect(() => {
    getAllPokemon().subscribe({
      next: (data: any) => setServiceResponse(data),
      error: (error: any) => setServiceError(error)
    });
  }, []);

  const figo = (e: any) => {
    console.log(Math.sign(e.deltaY));
    scrollDirection.current += Math.sign(e.deltaY);
  }

  if (serviceError) {
    return (
      <Container>
        {serviceError.message}
      </Container>
    );
  }

  return (
    <Container onWheel={figo}>
      <PokeballScroll src={pokeballImage} />
      <ContentArea>
        <PokeList pokemons={serviceResponse?.results} />
      </ContentArea>
    </Container>
  );
}

export default Pokedex;