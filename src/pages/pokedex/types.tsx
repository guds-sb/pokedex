export type PokemonListInfo = {
  id: number,
  name: string
}

export type PokemonDetailsInfo = {
  id: number,
  name: string,
  height: number,
  weight: number,
  types: Array<string>,
  artUrl: string,
  iconUrl: string,
  moves: Array<string>
}
