import styled from 'styled-components'
import { TypeColors, typeColors } from './helpers';

type ContainerProps = {
  pokeType: TypeColors
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 96px;
  height: 56px;
  justify-content: center;
  align-items: center;
  border: 4px solid #000000B0;
  border-radius: 8px;
  background-color: ${({ pokeType }) => `#${typeColors[pokeType]}`};
  flex: 1;
`
