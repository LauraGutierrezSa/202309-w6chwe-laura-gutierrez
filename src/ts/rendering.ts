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
