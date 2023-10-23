import App from "./App";

describe("Given an App component", () => {
  let container: HTMLDivElement;
  let app: App;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    app = new App(container, "");
    app.render();
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  describe("When it gets to the main section", () => {
    let main: Element;

    beforeEach(() => {
      main = container.querySelector(".main")!;
    });

    test("Then it should be rendered", () => {
      expect(main).toBeTruthy();
    });
  });

  describe("Given the header", () => {
    let header: Element;

    beforeEach(() => {
      header = container.querySelector(".main-header")!;
    });

    test("Then it should be rendered", () => {
      expect(header).toBeTruthy();
    });

    test("Then it should set the title text correctly", () => {
      const title = header.querySelector(".main-title")!;
      expect(title).toBeTruthy();
      expect(title.textContent).toBe("Pokédex - Pokémon Wiki");
    });
  });
});
