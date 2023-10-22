import { getPokemonDetails } from "../index.js";

describe("Given a URL", () => {
  describe("When it receives an invalid Pokémon URL", () => {
    const invalidUrl = "https://pokeapi.co/api/v2/pokemon/invented-pokemon";

    test("Then it should throw an error", async () => {
      const mockFetch = jest.fn(async () =>
        Promise.reject(new Error("Failed to fetch")),
      );
      (global as any).fetch = mockFetch;
      await expect(getPokemonDetails(invalidUrl)).rejects.toThrow();
    });
  });
});
