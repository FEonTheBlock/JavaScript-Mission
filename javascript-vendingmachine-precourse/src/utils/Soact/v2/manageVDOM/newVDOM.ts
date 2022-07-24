let createVDOM: () => VDOM;

export const getNewVDOM = () => {
  if (!createVDOM) {
    throw new Error('아직 createVDOM 함수가 바인딩 되지 않았음');
  }
  return createVDOM();
};
export const setCreateVDOM = (currentCreateVDOM: () => VDOM) => {
  createVDOM = currentCreateVDOM;
};
