import Component from "../Component.js";
import { type ButtonInfo } from "../../ts/types.js";
export class Button extends Component {
  innerHtml;
  method;

  constructor(
    parentElement: Element,
    public text: string,
    buttonInfo: ButtonInfo,
  ) {
    super(parentElement, "button", "change-pokemons");
    const { innerHtml, method } = buttonInfo;
    this.innerHtml = innerHtml;
    this.method = method;
  }

  protected populate(): void {
    this.element.textContent = this.text;
  }
}
