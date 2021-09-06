type FilterHandler = {
  regionFilterRef: React.MutableRefObject<string | null>,
  nameFilterRef: React.MutableRefObject<string | null>,
  regionSortRef: React.MutableRefObject<string | null>,
  nameSortRef: React.MutableRefObject<string | null>,
  option: string,
  setFilters: Function
};

type ProcessSort = {
  name: string | null,
  region: string | null
};

type ProcessInverted = {
  option: string | null
};

export const letterList = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

export const regionList = [
  'kanto',
  'johto',
  'hoenn',
  'sinoh',
  'unova',
  'kalos',
  'alola',
  'galar'
]

export const setNameFilter = ({
  regionFilterRef,
  nameFilterRef,
  regionSortRef,
  nameSortRef,
  option,
  setFilters
}: FilterHandler) => {
  nameFilterRef.current = option;
  if (option) regionFilterRef.current = null;

  const sort = processSort({ name: nameSortRef.current, region: regionSortRef.current });
  const inverted = processInverted({ name: nameSortRef.current, region: regionSortRef.current });
  setFilters({
    filter: regionFilterRef.current || nameFilterRef.current,
    sort,
    inverted
  });
};

export const setRegionFilter = ({
  regionFilterRef,
  nameFilterRef,
  regionSortRef,
  nameSortRef,
  option,
  setFilters
}: FilterHandler) => {
  regionFilterRef.current = option;
  if (option) nameFilterRef.current = null;
  
  const sort = processSort({ name: nameSortRef.current, region: regionSortRef.current });
  const inverted = processInverted({ name: nameSortRef.current, region: regionSortRef.current });
  setFilters({
    filter: regionFilterRef.current || nameFilterRef.current,
    sort,
    inverted
  });
};

export const setNameSort = ({
  regionFilterRef,
  nameFilterRef,
  regionSortRef,
  nameSortRef,
  option,
  setFilters
}: FilterHandler) => {
  nameSortRef.current = option;
  regionSortRef.current = null;
  
  const sort = processSort({ name: nameSortRef.current, region: regionSortRef.current });
  const inverted = processInverted({ name: nameSortRef.current, region: regionSortRef.current });
  setFilters({
    filter: regionFilterRef.current || nameFilterRef.current,
    sort,
    inverted
  });
};

export const setRegionSort = ({
  regionFilterRef,
  nameFilterRef,
  regionSortRef,
  nameSortRef,
  option,
  setFilters
}: FilterHandler) => {
  regionSortRef.current = option;
  nameSortRef.current = null;

  const sort = processSort({ name: nameSortRef.current, region: regionSortRef.current });
  const inverted = processInverted({ name: nameSortRef.current, region: regionSortRef.current });
  setFilters({
    filter: regionFilterRef.current || nameFilterRef.current,
    sort,
    inverted
  });
};

const processSort = ({ name, region }: ProcessSort) => {
  const processedNameSort = name ? 'name' : null;
  const processedRegionSort = region ? 'region' : null;
  return processedNameSort || processedRegionSort;
}

const processInverted = ({ name, region }: ProcessSort) => {
  return (name === 'inverted') || (region === 'inverted');
}