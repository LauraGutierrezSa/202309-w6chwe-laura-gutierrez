import PokemonCard from "./PokemonCard";

describe("Given a PokemonCard component", () => {
  describe("When it receives a section element and Pokemon data", () => {
    test("Then it should show the Pokemon's name in a span with the class pokemon-name", () => {
      const expectedName = "charmander";
      const pokemonData = {
        name: "charmander",
        url: "https://pokeapi.co/api/v2/pokemon-form/4/",
      };

      const parentElement = document.createElement("div");
      const card = new PokemonCard(parentElement, pokemonData);
      card.render();

      const span = parentElement.querySelector(".pokemon-name");

      expect(span).not.toBeNull();
      expect(span!.textContent).toBe(expectedName);
    });
  });
});
