let initVDOM: VDOM;
let diffVDOM: VDOM;

let currentCreateVirtualDOM: () => VDOM;

export const getInitVDOM = () => initVDOM;
export const getDiffVDOM = () => {
  setDiffVDOM();
  return diffVDOM;
};

export const setVDOMHead = ($rootElement: HTMLElement) => {
  const tagName =
    $rootElement.tagName.toLowerCase() as keyof HTMLElementTagNameMap;

  initVDOM = {
    el: tagName,
    props: null,
    children: [],
    current: $rootElement,
    key: 0,
  };
  diffVDOM = {
    el: tagName,
    props: null,
    children: [],
    current: $rootElement,
    key: 0,
  };
};
export const setInitVDOM = (children: Children) => {
  initVDOM.children = children;
};
export const setDiffVDOM = () => {
  diffVDOM.children = [currentCreateVirtualDOM()];
};
export const setCurrentCreateVirtualDOM = (createVirtualDOM: () => VDOM) => {
  currentCreateVirtualDOM = createVirtualDOM;
};
