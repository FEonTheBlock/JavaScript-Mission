import {
  getInitVDOM,
  setInitVDOM,
  setVDOMHead,
  setCurrentCreateVirtualDOM,
} from './virtualDOM';
import { appendDOM } from './manageDOM';

const render = (
  createvirtualDOM: () => VDOM,
  $rootElement: HTMLElement | null
) => {
  if (!$rootElement) {
    throw new Error('rootElement를 찾을 수 없습니다.');
  }
  setVDOMHead($rootElement);
  setCurrentCreateVirtualDOM(createvirtualDOM);
  setInitVDOM([createvirtualDOM()]);

  const initVDOM = getInitVDOM();
  // console.log({ initVDOM });
  appendDOM(initVDOM);
};

export default render;
