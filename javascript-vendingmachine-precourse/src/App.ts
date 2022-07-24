import { Menu } from '@/types';
import { store } from '@/store';
import { addClassWithoutExcept } from '@/utils';
import { TabMenu, Content } from '@/components';

let { actualMenu } = store;

export const App = () => {
  const $app = document.createDocumentFragment();
  const $title = document.createElement('h1');
  $title.textContent = '자판기';

  const $tabs = TabMenu();
  const $content = Content();
  const $contentChildren = Array(...$content.children);
  $app.append($title, $tabs, $content);

  addClassWithoutExcept('hidden', $contentChildren, [actualMenu]);

  $tabs.addEventListener('click', (e: any) => {
    const id: Menu = e.target.getAttribute('id');
    if (id === actualMenu || !id) {
      return;
    }
    actualMenu = id;
    addClassWithoutExcept('hidden', $contentChildren, [id]);
  });

  return $app;
};
