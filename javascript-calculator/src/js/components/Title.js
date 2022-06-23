export function Title({ Parent, initState }) {
  this.Title = document.createElement('div');
  this.Title.id = 'total';
  Parent.appendChild(this.Title);

  this.state = initState;

  this.setState = newState => {
    this.state = newState;
    this.render();
  };

  this.render = () => {
    const active = this.state.numbers[this.state.activeIndex];
    const total =
      active === null ? this.state.numbers[this.state.activeIndex - 1] : active;

    this.Title.innerHTML = `
      <h1 id="total">${total}</h1>
        `;
  };
}
