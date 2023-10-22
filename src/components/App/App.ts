import Component from "../Component.js";

class App extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "div", "main-container");
  }

  protected populate(): void {
    this.element.innerHTML = `
      <header class="main-header">
        <h1 class="main-title">Pokemon Page</h1>
      </header>
      <main class="main">
        <section class="frame container">
        </section>
      </main>
    `;
  }
}

export default App;
