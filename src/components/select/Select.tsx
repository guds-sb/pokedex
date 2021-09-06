import { useState, useEffect, useRef } from 'react';
import Button from 'components/button/Button';
import Text from 'components/text/Text';

import {
  Container,
  SelectArea,
  ClearOption,
  SelectOption
} from './styles';

type SelectProps = {
  children?: any,
  options: Array<string>,
  clickHandler: Function
};

const Select = ({
  children,
  options,
  clickHandler
}: SelectProps) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const container = useRef<any>(null);

  useEffect(() => {
    const eventListener = (event: any) => {
      if (!container.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', eventListener);
    return () => {
      document.removeEventListener('click', eventListener);
    }
  }, []);

  return (
    <Container ref={container}>
      <Button clickHandler={() => setOpen(!open)} >
        {selected
          ? selected
          : children
        }
      </Button>
      {open && (
        <SelectArea>
          <ClearOption
            onClick={() => {
              clickHandler(null);
              setSelected(null);
              setOpen(false);
            }}
          >
            <Text color={'283840'}>
              clear...
            </Text>
          </ClearOption>
          {options.map(option => (
            <SelectOption
              onClick={() => {
                clickHandler(option);
                setSelected(option);
                setOpen(false);
              }}
              selected={option === selected}
            >
              <Text>{option}</Text>
            </SelectOption>
          ))}
        </SelectArea>
      )}
    </Container>
  );
}

export default Select;