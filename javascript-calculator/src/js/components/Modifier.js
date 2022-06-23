export function Modifier({ Parent, initState, onClick }) {
  this.Modifier = document.createElement('div');
  this.Modifier.className = 'modifiers subgrid';
  Parent.appendChild(this.Modifier);

  this.state = initState;
  this.onClick = onClick;

  this.setState = newState => {
    this.state = newState;
    this.render();
  };

  this.render = () => {
    this.Modifier.innerHTML = `
        <button class="modifier">AC</button>
        `;

    this.Modifier.addEventListener('click', this.onClick);
  };
}
