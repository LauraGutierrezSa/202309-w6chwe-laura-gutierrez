import type { Pokemon } from "./types.js";
import type { PokemonResponse } from "./types.js";

const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

export const getPokemons = async (apiUrl: string): Promise<Pokemon[]> => {
  const response = await fetch(apiUrl);
  const getPokemonsPromise = (await response.json()) as PokemonResponse;

  return getPokemonsPromise.results;
};

(async () => {
  try {
    const pokemons = await getPokemons(apiUrl);
    console.log(pokemons);
  } catch (error) {
    console.error("There has been an error fetching pokemons array:", error);
  }
})();
