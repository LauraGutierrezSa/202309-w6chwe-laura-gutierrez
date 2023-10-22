abstract class Component {
  protected readonly element: Element;

  constructor(
    protected readonly parentElement: Element,
    tagName: string,
    className: string,
  ) {
    this.parentElement = parentElement;

    this.element = document.createElement(tagName);

    this.element.className = className;
  }

  public render(): void {
    if (this.parentElement) {
      this.parentElement.appendChild(this.element);

      this.populate();
    } else {
      throw new Error(
        "Error! Parent element was not found, hence cannot render component.",
      );
    }
  }

  protected abstract populate(): void;
}

export default Component;
