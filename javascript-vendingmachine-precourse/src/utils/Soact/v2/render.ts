import { setRoot } from './manageVDOM/root';
import { setCreateVDOM } from './manageVDOM/newVDOM';
import { updateDOM } from './manageDOM';

const render = (createVDOM: () => VDOM, $root: HTMLElement | null) => {
  if (!$root) {
    throw new Error('rootElement를 찾을 수 없습니다.');
  }
  setRoot($root);
  setCreateVDOM(createVDOM);
  updateDOM();
};

export default render;
