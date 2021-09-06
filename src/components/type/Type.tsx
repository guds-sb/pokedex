import Text from 'components/text/Text';
import { TypeColors } from './helpers';
import {
  Container,
} from './styles';

type TypeProps = {
  children: TypeColors
};

const Type = ({ children }: TypeProps) => {
  return (
    <Container pokeType={children}>
      <Text color={'FFFFFF'}>
        {children.toUpperCase()}
      </Text>
    </Container>
  );
}

export default Type;