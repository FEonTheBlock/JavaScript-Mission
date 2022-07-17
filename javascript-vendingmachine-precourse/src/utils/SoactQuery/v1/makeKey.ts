const makeKey = (queryKey: string | string[]) =>
  Array.isArray(queryKey) ? queryKey.join('&') : queryKey;

export default makeKey;
