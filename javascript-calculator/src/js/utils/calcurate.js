export const calculate = (numbers, operation) => {
  if (numbers.length !== 2) return numbers[0];

  switch (operation) {
    case '/':
      return Math.floor(+numbers[0] / +numbers[1]);
    case 'X':
      return +numbers[0] * +numbers[1];
    case '-':
      return +numbers[0] - +numbers[1];
    case '+':
      return +numbers[0] + +numbers[1];
  }
};
