export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonResponse extends Pokemon {
  id: number;
  next: string;
  previous: string;
  results: Pokemon[];
}
