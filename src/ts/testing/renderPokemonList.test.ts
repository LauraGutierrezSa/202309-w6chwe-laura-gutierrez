import { renderPokemonList } from "../rendering";
import type { Pokemon } from "../types";

describe("Given a Pokemon API", () => {
  describe("When invoking its renderPokemonList function", () => {
    test("Then it should create list items with Pokémon names and their corresponding individual URL", () => {
      const containerElement = document.createElement("div");
      containerElement.id = "pokemon-container";
      const pokemons: Pokemon[] = [
        { name: "Pikachu", url: "string" },
        { name: "Charmander", url: "string" },
        { name: "Bulbasaur", url: "string" },
      ];
      document.body.appendChild(containerElement);
      renderPokemonList(pokemons);
      const listItemElements = containerElement.querySelectorAll("li");
      expect(listItemElements.length).toBe(pokemons.length);
      listItemElements.forEach((listItem, index) => {
        expect(listItem.textContent).toBe(pokemons[index].name);
      });
      document.body.removeChild(containerElement);
    });
  });
});
