import App from "../components/App/App.js";
import { apiUrl, getPokemonDetails, getPokemons } from "./index.js";
import type { Pokemon } from "./types.js";

let page = 0;
const urlPrefix = "https://pokeapi.co/api/v2/pokemon?offset=";
const urlSuffix = "&limit=10";
let currentPokemons: Pokemon[];

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
      _urlPrefix: urlPrefix,
      _page: page,
      _urlSuffix: urlSuffix,
    });
    const pokemonDataPromises = pokemonUrls.map(async () =>
      getPokemonDetails(apiUrl),
    );
    const pokemons = await Promise.all(pokemonDataPromises);

    renderPokemonList(pokemons);
  } catch {
    throw new Error("Error! Couldn't fetch nor render any Pokémon.");
  }
};

document.addEventListener("DOMContentLoaded", fetchAndRenderPokemons);

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
    _urlPrefix: urlPrefix,
    _page: page,
    _urlSuffix: urlSuffix,
  });
  currentPokemons = pokemons;
  printPokemons();
};

export const getLessPokemons = async () => {
  page -= 10;
  const pokemons = await getPokemons({
    _urlPrefix: urlPrefix,
    _page: page,
    _urlSuffix: urlSuffix,
  });
  currentPokemons = pokemons;
  printPokemons();
};

const bodyElement = document.querySelector(".app")!;
const appElement = new App(bodyElement, "main-container");
type ButtonAction = (event: MouseEvent) => void;
appElement.render();

const controllersElement = document.querySelector(".pokemon-box__controllers")!;

const buttonLess = document.createElement("button");
buttonLess.className = "button--search";
buttonLess.textContent = "Go back";
controllersElement.appendChild(buttonLess);

const buttonMore = document.createElement("button");
buttonMore.className = "button--search";
buttonMore.textContent = "Search More";
controllersElement.appendChild(buttonMore);

buttonMore.addEventListener(
  "click",
  getMorePokemons as unknown as ButtonAction,
);

buttonLess.addEventListener(
  "click",
  getLessPokemons as unknown as ButtonAction,
);

const pokemons = await getPokemons({
  _urlPrefix: urlPrefix,
  _page: page,
  _urlSuffix: urlSuffix,
});
currentPokemons = pokemons;
printPokemons();
