import { getPageOffset } from "helpers";
import { PokemonDetailsInfo, PokemonListInfo } from "pages/pokedex/types";
import { getPaginatedPokemon } from "services/pokedex/PokedexService";
import { ListSetup, ListState } from "./PokeListProvider";

type HandleAllPokemonResponse = {
  listSetup: React.MutableRefObject<ListSetup>,
  list: Array<PokemonListInfo>,
  listState: ListState,
  setListState: Function
};

type GetNextPage = {
  listSetup: React.MutableRefObject<ListSetup>,
  listState: ListState,
  setListState: Function,
  clearList?: boolean
}

type IsLastPage = {
  page: number,
  count: number
}

type HandlePaginatedPokemonResponse = {
  list: Array<PokemonDetailsInfo>,
  setListState: Function,
  listState: ListState,
  clearList?: boolean
};

type SetFiltersHandler = {
  listSetup: React.MutableRefObject<ListSetup>,
  listState: ListState,
  setListState: Function,
  filter?: string,
  sort?: string,
  inverted?: boolean
}

type GetProcessedList = {
  list: Array<PokemonListInfo>,
  filter?: string,
  sort?: string,
  inverted?: boolean
}

type Regions = {
  [key: string]: Array<number>
}

const regions: Regions = {
  kanto: [0, 151],
  johto: [151, 251],
  hoenn: [251, 386],
  sinoh: [386, 493],
  unova: [493, 649],
  kalos: [649, 721],
  alola: [721, 809],
  galar: [809, 898]
};

export const handleAllPokemonResponse = ({
  listSetup,
  list,
  listState,
  setListState
}: HandleAllPokemonResponse) => {
  listSetup.current.count = list.length;
  listSetup.current.page = 0;
  listSetup.current.originalList = list;
  listSetup.current.processedList = getProcessedList({ list });

  getNextPage({ listSetup, listState, setListState });
}

export const getNextPage = ({
  listSetup,
  listState,
  setListState,
  clearList
}: GetNextPage) => {
  const {
    page,
    count,
    processedList
  } = listSetup.current;

  if (!isLastPage({ page, count })) {
    const newPage =  page + 1;
    const newPageIds = processedList.slice(
      getPageOffset({ page }),
      getPageOffset({ page: newPage })
    ).map(poke => poke.id);

    listSetup.current.page = newPage;
    if (clearList) {
      setListState((old: ListState) => ({
        ...old,
        error: null,
        isLoading: true,
        paginatedList: []
      }));
    }
    else {
      setListState((old: ListState) => ({
        ...old,
        error: null,
        isLoading: true
      }));
    }

    getPaginatedPokemon({ ids: newPageIds }).subscribe({
      next: (list: any) => handlePaginatedPokemonResponse({ 
        list,
        listState,
        setListState,
        clearList
      }),
      error: (error: any) => setListState((old: ListState) => ({
        ...old,
        error: error?.message,
        isLoading: false
      }))
    });
  }
}

export const setFiltersHandler = ({
  listSetup,
  listState,
  setListState,
  filter,
  sort,
  inverted
}: SetFiltersHandler) => {
  const processedList = getProcessedList({
    list: listSetup.current.originalList,
    filter,
    sort,
    inverted
  });
  listSetup.current.count = processedList.length;
  listSetup.current.page = 0;
  listSetup.current.processedList = processedList;

  getNextPage({ listSetup, listState, setListState, clearList: true });
}

const isLastPage = ({ page, count }: IsLastPage) => {
  const items = getPageOffset({ page });
  return items >= count;
}

const handlePaginatedPokemonResponse = ({
  list,
  listState,
  setListState,
  clearList
}: HandlePaginatedPokemonResponse) => {
  const formattedResponse = fomatPaginationResponse({ list });
  const newPaginatedList = listState.paginatedList.concat(formattedResponse);
  setListState((old: ListState) => ({
    ...old,
    isLoading: false,
    paginatedList: clearList ? formattedResponse : newPaginatedList
  }));
}

const fomatPaginationResponse = ({ list }: any) => {
  return list.map(({ data }: any) => ({
    id: data.id,
    name: data.name,
    height: data.height,
    weight: data.weight,
    types: data.types.map((type: any) => type.type.name),
    artUrl: data.sprites.other['official-artwork'].front_default,
    iconUrl: data.sprites.versions['generation-viii'].icons.front_default,
    moves: data.moves.map((move: any) => move.move.name)
  }));
}

// FUNCTIONS TO BUILD NEW LOCAL LIST BASED ON FILTERS
export const getProcessedList = ({ list, filter = '', sort, inverted }: GetProcessedList) => {
  const newList = getFilteredList({ list, filter });
  return sortList({ list: newList, sort, inverted });
}

const getFilteredList = ({ list, filter = '' }: GetProcessedList) => {
  if (Object.keys(regions).find(region => region === filter)) {
    return list.slice(regions[filter][0], regions[filter][1]);
  }
  else if (filter?.length === 1) {
    return list.filter(poke => poke.name[0] === filter);
  }
  else {
    return [ ...list ];
  }
}

const sortList = ({ list, sort, inverted }: GetProcessedList) => {
  if (sort === 'region' && inverted) {
    return getChunkedList({ list }).reverse().flat();
  }
  else if (sort === 'name') {
    return list.sort((a, b) => a.name.localeCompare(b.name) * (inverted ? -1 : 1));
  }
  return list;
}

const getChunkedList = ({ list }: GetProcessedList) => {
  return Object.values(regions).map(range =>
    list.slice(range[0], range[1])
  );
}