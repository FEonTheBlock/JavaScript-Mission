export function Digits({ Parent, initState, onClick }) {
  this.Digits = document.createElement('div');
  this.Digits.className = 'digits flex';
  Parent.appendChild(this.Digits);

  this.state = initState;
  this.onClick = onClick;

  this.setState = newState => {
    this.state = newState;
    this.render();
  };

  this.render = () => {
    const digitList = Array.from({ length: 10 }, (v, i) => i).sort(
      (a, b) => b - a,
    );

    this.Digits.innerHTML = digitList
      .map(
        digit => `
                <button class="digit" data-digit="${digit}">${digit}</button>
                `,
      )
      .join('');

    this.Digits.addEventListener('click', this.onClick);
  };
}
