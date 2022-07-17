const convertKebabToCamel = (string: string) =>
  string.replace(/([-][a-z])/g, (snake) =>
    snake.replace('-', '').toUpperCase()
  );

export default convertKebabToCamel;
