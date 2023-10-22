interface DataOptions {
  tagName: string;

  className: string;
}

abstract class Component {
  protected readonly element: Element;

  constructor(
    options: DataOptions,
    protected readonly parentElement: Element,
  ) {
    this.parentElement = parentElement;

    this.element = document.createElement(options.tagName);

    this.element.className = options.className;
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
