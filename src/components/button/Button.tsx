import Text from 'components/text/Text';

import {
  Container,
} from './styles';

type ButtonProps = {
  children?: any,
  clickHandler?: Function,
  active?: boolean
};

const Button = ({
  children,
  clickHandler,
  active = false
}: ButtonProps) => {
  return (
    <Container
      active={active}
      onClick={() => clickHandler && clickHandler()}
    >
      <Text>
        {children}
      </Text>
    </Container>
  );
}

export default Button;