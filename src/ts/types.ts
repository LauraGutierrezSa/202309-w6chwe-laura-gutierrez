export interface PokemonResponse {
  id: number;
  next: string;
  previous: string;
  results: Pokemon[];
}
export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetails {
  name: string;
  url: string;
  type: string;
  sprites: {
    front_default: string;
    front_shiny: string;
  };
}
