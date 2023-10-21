import type { Pokemon } from "./types.js";
import type { PokemonResponse } from "./types.js";

const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

const getPokemons = async (apiUrl: string): Promise<Pokemon[]> => {
  const response = await fetch(apiUrl);
  const getPokemonsPromise = (await response.json()) as PokemonResponse;

  return getPokemonsPromise.results;
};

const pokemons = await getPokemons(apiUrl);

console.log(pokemons);
