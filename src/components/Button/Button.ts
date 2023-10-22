import Component from "../Component.js";

export class Button extends Component {
  constructor(
    parentElement: Element,
    public text: string,
  ) {
    super(parentElement, "button", "change-pokemons");
  }

  protected populate(): void {
    this.element.textContent = this.text;
  }
}
