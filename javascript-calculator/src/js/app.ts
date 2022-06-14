const $ = <T>(selector: string) => document.querySelector(selector) as unknown as T;

export default class Calculator {
  state = 0;

  constructor() {
    $<HTMLDivElement>('.digits').addEventListener('click', this.handleDigitsClick);
  }

  handleDigitsClick(e: MouseEvent) {
    console.log((e.target as HTMLButtonElement).textContent);
  }
}
