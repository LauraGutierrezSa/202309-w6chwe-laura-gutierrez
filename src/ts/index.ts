import type { Pokemon } from "./types.js";
import type { PokemonResponse } from "./types.js";
import type { PokemonDetails } from "./types.js";

export const apiUrl = "https://pokeapi.co/api/v2/pokemon";

export const getPokemons = async (_url: string): Promise<Pokemon[]> => {
  try {
    const response = await fetch(apiUrl);
    const getPokemonsPromise = (await response.json()) as PokemonResponse;

    return getPokemonsPromise.results;
  } catch {
    throw new Error("Error! Failed to fetch the pokémon list.");
  }
};

export const getPokemonDetails = async (
  _url: string,
): Promise<PokemonDetails> => {
  try {
    const response = await fetch(apiUrl);
    return (await response.json()) as PokemonDetails;
  } catch {
    throw new Error("Error! Failed to fetch the selected Pokémon details.");
  }
};
