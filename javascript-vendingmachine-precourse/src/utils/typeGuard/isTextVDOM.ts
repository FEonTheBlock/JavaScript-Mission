const isTextVDOM = (VDOM: any): VDOM is TextVDOM => {
  return VDOM && typeof VDOM.value !== 'undefined';
};

export default isTextVDOM;
