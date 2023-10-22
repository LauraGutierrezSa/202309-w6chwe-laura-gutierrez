import App from "../components/App/App.js";
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
    const pokemonUrls = await getPokemons({
      _url: apiUrl,
      _page: 1,
      _urlSuffix: "&limit=10",
    });
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

let page = 0;
const urlPrefix = "https://pokeapi.co/api/v2/pokemon?offset=";
const urlSufix = "&limit=10";
let currentPokemons: Pokemon[];

export const printPokemons = () => {
  const pokedex = document.querySelector(".pokedex");

  currentPokemons.forEach(async (pokemon: Pokemon) => {
    try {
      const pokemonDetails = await getPokemonDetails(pokemon.url);
      const pokemonElement = document.createElement("div");
      pokemonElement.textContent = `Name: ${pokemon.name}, Type: ${pokemonDetails.type}`;
      pokedex?.appendChild(pokemonElement);
    } catch {
      console.error(`Error processing the pokémon ${pokemon.name}`);
    }
  });
};

export const getMorePokemons = async () => {
  page += 10;
  const pokemons = await getPokemons({
    _url: urlPrefix,
    _page: page,
    _urlSuffix: urlSufix,
  });
  currentPokemons = pokemons;
  printPokemons();
};

export const getLessPokemons = async () => {
  page -= 10;
  const pokemons = await getPokemons({
    _url: urlPrefix,
    _page: page,
    _urlSuffix: urlSufix,
  });
  currentPokemons = pokemons;
  printPokemons();
};

const bodyElement = document.querySelector(".app")!;
const appElement = new App(bodyElement);
appElement.render();
