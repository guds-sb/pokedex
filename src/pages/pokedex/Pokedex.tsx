import { useEffect, useState } from 'react';
import { getAllPokemon } from '../../services/pokedex/PokedexService';

type PokedexProps = {
};

const Pokedex = (props: PokedexProps) => {
  const [serviceError, setServiceError] = useState<any>(null!);
  const [serviceResponse, setServiceResponse] = useState<any>({});

  useEffect(() => {
    getAllPokemon().subscribe({
      next: (data: any) => setServiceResponse(data),
      error: (error: any) => setServiceError(error)
    });
  }, []);

  console.log(serviceError);
  console.log(serviceResponse);

  if (serviceError) {
    return (
      <div>
        {serviceError.message}
      </div>
    );
  }

  return (
    <div>
      {serviceResponse?.data?.results?.map((poke: any, index: number) => <p key={index}>{poke.name}</p>)}
    </div>
  );
}

export default Pokedex;