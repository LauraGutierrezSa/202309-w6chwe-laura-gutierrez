export interface Window {
  currentPokemons: PokemonDetails[];
}

import { printPokemons } from "../rendering.js";
import "@testing-library/jest-dom/extend-expect";
import { screen } from "@testing-library/dom";
import type { PokemonDetails } from "../types.js";

describe("Given a Pokédex Api,", () => {
  describe("When its printPokemons() function is called", () => {
    beforeEach(() => {
      document.body.innerHTML =
        '<div class="app"><div class="pokedex"></div></div>';
    });

    afterEach(() => {
      document.body.innerHTML = "";
    });

    test("Then it should render Pokémon elements", () => {
      const mockPokemons = [
        { name: "Pikachu", url: "https://pokeapi.co/api/v2/pokemon/25/" },
      ];
      // Window.currentPokemons = mockPokemons;
      printPokemons();
      for (const pokemon of mockPokemons) {
        const pokemonElement = screen.queryByText(`Name: ${pokemon.name}`) as
          | HTMLElement
          | undefined;
        expect(pokemonElement).toBeDefined();
      }
    });
  });
});
