export const getItem = key => {
  return JSON.parse(localStorage.getItem(key));
};

export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
