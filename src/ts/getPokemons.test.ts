import { getPokemons } from ".";

describe("Given a url", () => {
  describe("When it recieves an invalid apiUrl", () => {
    test("then it should throw an error", async () => {
      const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=invalid&offset=0";

      await expect(getPokemons(apiUrl)).rejects.toThrow();
    });
  });
});

describe("Given the getPokemons function", () => {
  describe("When a valid apiUrl is provided", () => {
    test("Then it should return an array of Pokémons with their name and url", async () => {
      const apiUrl = "https://pokeapi.co/api/v2/pokemon";
      const mockResponse = {
        results: [
          { name: "Pikachu", url: "https://pokeapi.co/api/v2/pokemon/25/" },
        ],
      };
      const mockFetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => mockResponse,
      });

      global.fetch = mockFetch;

      const pokemons = await getPokemons(apiUrl);

      expect(Array.isArray(pokemons)).toBe(true);
      expect(pokemons.length).toBeGreaterThan(0);
      expect(pokemons[0]).toHaveProperty("name");
      expect(pokemons[0]).toHaveProperty("url");
    });
  });
});
