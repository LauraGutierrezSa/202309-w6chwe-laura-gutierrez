import { getPokemons } from ".";

describe("Given a url", () => {
  describe("When it recieves an invalid apiUrl", () => {
    test("then it should throw an error", async () => {
      const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=invalid&offset=0";

      await expect(getPokemons(apiUrl)).rejects.toThrow();
    });
  });
});
