import { apiUrl, getPokemonDetails, getPokemons } from "./index.js";
import type { Pokemon } from "./types.js";

export const renderPokemonList = (pokemons: Pokemon[]): void => {
  const containerElement = document.getElementById("pokemon-container");
  if (!containerElement) return;

  const pokemonListElement = document.createElement("ul");
  pokemons.forEach((pokemon) => {
    const listItem = document.createElement("li");
    listItem.textContent = pokemon.name;
    pokemonListElement.appendChild(listItem);
  });

  containerElement.appendChild(pokemonListElement);
};

export const fetchAndRenderPokemons = async () => {
  try {
    const pokemonUrls = await getPokemons(apiUrl);
    const pokemonDataPromises = pokemonUrls.map(async () =>
      getPokemonDetails(apiUrl),
    );
    const pokemons = await Promise.all(pokemonDataPromises);

    renderPokemonList(pokemons);
  } catch {
    console.error("Error! Couldn't fetch nor render any Pokémon.");
  }
};

document.addEventListener("DOMContentLoaded", fetchAndRenderPokemons);
