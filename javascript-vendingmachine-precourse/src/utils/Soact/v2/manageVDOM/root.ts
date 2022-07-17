let $root: HTMLElement;

export const getRoot = () => {
  return $root;
};

export const setRoot = (currentRoot: HTMLElement) => {
  $root = currentRoot;
};
