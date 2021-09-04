import {
  Container,
} from './styles';

type TextProps = {
  children?: any
};

const Text = ({ children }: TextProps) => {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default Text;