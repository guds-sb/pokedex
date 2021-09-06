import {
  Container,
} from './styles';

type TextProps = {
  children?: any,
  color?: string
};

const Text = ({ children, color }: TextProps) => {
  return (
    <Container color={color}>
      {children}
    </Container>
  );
}

export default Text;