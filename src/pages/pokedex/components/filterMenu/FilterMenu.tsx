import { useContext, useState, useRef, useCallback } from 'react';
import { PokeListContext } from 'contexts/pokeListContext/PokeListProvider';
import Text from 'components/text/Text';
import Select from 'components/select/Select';
import {
  letterList,
  regionList,
  setNameFilter,
  setRegionFilter,
  setNameSort,
  setRegionSort
} from './helpers';

import {
  Container,
  Category,
  TextWrapper,
} from './styles';
import SortButton from 'components/sortButton/SortButton';

const FilterMenu = () => {
  const regionFilterRef = useRef<string | null>(null);
  const nameFilterRef = useRef<string | null>(null);
  const regionSortRef = useRef<string | null>(null);
  const nameSortRef = useRef<string | null>(null);
  const {
    setFilters
  } = useContext(PokeListContext);

  const nameFilterHandler = useCallback((option: string) => {
    setNameFilter({
      regionFilterRef,
      nameFilterRef,
      regionSortRef,
      nameSortRef,
      option,
      setFilters
    });
  }, [regionFilterRef, nameFilterRef, regionSortRef, nameSortRef]);

  const regionFilterHandler = useCallback((option: string) => {
    setRegionFilter({
      regionFilterRef,
      nameFilterRef,
      regionSortRef,
      nameSortRef,
      option,
      setFilters
    });
  }, [regionFilterRef, nameFilterRef, regionSortRef, nameSortRef]);

  const nameSortHandler = useCallback((option: string) => {
    setNameSort({
      regionFilterRef,
      nameFilterRef,
      regionSortRef,
      nameSortRef,
      option,
      setFilters
    });
  }, [regionFilterRef, nameFilterRef, regionSortRef, nameSortRef]);

  const regionSortHandler = useCallback((option: string) => {
    setRegionSort({
      regionFilterRef,
      nameFilterRef,
      regionSortRef,
      nameSortRef,
      option,
      setFilters
    });
  }, [regionFilterRef, nameFilterRef, regionSortRef, nameSortRef]);

  return (
    <Container>
      <Category>
        <TextWrapper>
          <Text color={'FFFFFF'}>FILTER BY</Text>
        </TextWrapper>
        <Select
          options={letterList}
          selected={nameFilterRef.current}
          setSelected={nameFilterHandler}
        >
          NAME
        </Select>
        <Select
          options={regionList}
          selected={regionFilterRef.current}
          setSelected={regionFilterHandler}
        >
          REGION
        </Select>
      </Category>
      <Category>
        <TextWrapper>
          <Text color={'FFFFFF'}>SORT BY</Text>
        </TextWrapper>
        <SortButton
          clickHandler={nameSortHandler}
          state={nameSortRef.current}
        >
          NAME
        </SortButton>
        <SortButton
          clickHandler={regionSortHandler}
          state={regionSortRef.current}
        >
          REGION
        </SortButton>
      </Category>
    </Container>
  );
}

export default FilterMenu;