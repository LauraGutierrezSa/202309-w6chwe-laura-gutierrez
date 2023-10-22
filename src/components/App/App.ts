import Component from "../Component.js";

class App extends Component {
  private readonly nexturl: string;
  private readonly previousurl: string;
  private readonly children: unknown[];
  constructor(
    parentElement: Element,
    private readonly pokemonUrlApi: string,
  ) {
    super(parentElement, "div", "App");
    this.children = [];
  }

  protected populate(): void {
    this.element.innerHTML = `
      <header class="main-header">
        <h1 class="main-title">Pokemon Page</h1>
        <img class="image_title" src="pokemon-logo.svg">
      </header>
      <main class="main">
        <section class="frame container">
        </section>
      </main>
    `;
  }
}

export default App;
