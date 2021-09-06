import Text from 'components/text/Text';

import {
  Container,
} from './styles';

type SortButtonProps = {
  children?: any,
  clickHandler?: Function,
  state?: string | null,
};

const SortButton = ({
  children,
  clickHandler,
  state = null
}: SortButtonProps) => {
  const arrowDisplay = () => {
    switch (state) {
      case 'active':
        return <Text>{`\u2193`}</Text>
      case 'inverted':
        return <Text>{`\u2191`}</Text>
    }
  };

  const switchMode = () => {
    if (!state)
      return 'active';
    else if (state === 'active')
      return 'inverted';
    else return null;
  }

  return (
    <Container
      active={!!state}
      onClick={() => clickHandler && clickHandler(switchMode())}
    >
      <Text>
        {children}
      </Text>
      <Text>
        {arrowDisplay()}
      </Text>
    </Container>
  );
}

export default SortButton;