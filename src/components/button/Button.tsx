import Text from 'components/text/Text';
import { MouseEventHandler } from 'react';

import {
  Container,
} from './styles';

type ButtonProps = {
  children?: any,
  handler?: MouseEventHandler,
  active?: boolean
};

const Button = ({
  children,
  handler = () => {},
  active = false
}: ButtonProps) => {
  return (
    <Container
      active={active}
      onClick={handler}
    >
      <Text>
        {children}
      </Text>
    </Container>
  );
}

export default Button;