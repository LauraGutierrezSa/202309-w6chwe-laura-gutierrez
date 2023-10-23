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
    <div class= "app">
      <header class="main-header">
        <h1 class="main-title">Pokédex - Pokémon Wiki</h1>
        <img class="main-logo" src=".images/pokemon-logo.svg">
      </header>
      <main class="main">
        <section class="frame container">
        </section>
      </main>
      </div>
    `;
  }
}

export default App;
