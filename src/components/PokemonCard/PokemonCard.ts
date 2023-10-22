import Component from "../../components/Component.js";
import { type Pokemon } from "../../ts/types.js";

class PokemonCard extends Component {
  constructor(
    parentElement: Element,
    private readonly resultPokemonData: Pokemon,
  ) {
    super(parentElement, "section", "card-section");
  }

  protected populate(): void {
    this.element.innerHTML = `
<div class="pokemon-item">
<span class="pokemon-name">${this.resultPokemonData.name}</span>
`;
  }
}

export default PokemonCard;
