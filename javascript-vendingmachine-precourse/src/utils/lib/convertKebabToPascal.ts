const convertKebabToPascal = (string: string) =>
  string.replace(/(^[a-z])|([-][a-z])/g, (snake) =>
    snake.replace('-', '').toUpperCase()
  );

export default convertKebabToPascal;
