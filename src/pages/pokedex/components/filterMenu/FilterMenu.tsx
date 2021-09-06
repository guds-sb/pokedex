import { useContext, useState } from 'react';
import { PokeListContext } from 'contexts/pokeListContext/PokeListProvider';
import Text from 'components/text/Text';
import Select from 'components/select/Select';
import { letterList, regionList } from './helpers';

import {
  Container,
  Category,
  TextWrapper,
} from './styles';

const FilterMenu = () => {
  const {
    setFilters
  } = useContext(PokeListContext);

  const letterFilterHandler = (option: string) => {
    setFilters({
      filter: option,
    });
  };

  const sortFilterHandler = (option: string) => {
    setFilters({
      sort: option,
    });
  };

  return (
    <Container>
      <Category>
        <TextWrapper>
          <Text color={'FFFFFF'}>FILTER BY</Text>
        </TextWrapper>
        <Select
          options={regionList}
          clickHandler={letterFilterHandler}
        >
          REGION
        </Select>
        <Select
          options={letterList}
          clickHandler={letterFilterHandler}
        >
          NAME
        </Select>
      </Category>
      <Category>
        <TextWrapper>
          <Text color={'FFFFFF'}>SORT BY</Text>
        </TextWrapper>
      </Category>
    </Container>
  );
}

export default FilterMenu;