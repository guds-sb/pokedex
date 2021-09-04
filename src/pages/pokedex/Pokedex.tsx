import React from 'react';

type PokedexProps = {
  test?: string
};

const Pokedex = (props: PokedexProps) => {
  return (
    <div>
      {props.test}
    </div>
  );
}

export default Pokedex