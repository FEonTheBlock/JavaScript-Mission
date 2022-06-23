export function Operation({ Parent, initState, onClick }) {
  this.Operation = document.createElement('div');
  this.Operation.className = 'operations subgrid';
  Parent.appendChild(this.Operation);

  this.state = initState;
  this.onClick = onClick;

  this.setState = newState => {
    this.state = newState;
    this.render();
  };

  this.render = () => {
    const operationList = ['/', 'X', '-', '+', '='];

    this.Operation.innerHTML = operationList
      .map(
        operation => `
            <button class="operation" data-operation="${operation}">${operation}</button>
        `,
      )
      .join('');

    this.Operation.addEventListener('click', this.onClick);
  };
}
