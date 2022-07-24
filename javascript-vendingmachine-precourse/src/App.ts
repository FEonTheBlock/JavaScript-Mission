import { Menu } from '@/types';
import { addClassWithoutExcept } from '@/utils';
import { TabMenu, Content } from '@/components';
import store from '@/store';

export const App = (store: store) => {
  const actualMenu = store.store.actualMenu;

  const $app = document.createDocumentFragment();
  const $title = document.createElement('h1');
  $title.textContent = '자판기';

  const $tabs = TabMenu(store);
  const $content = Content(store);
  const $contentChildren = Array(...$content.children);
  $app.append($title, $tabs, $content);

  addClassWithoutExcept('hidden', $contentChildren, [actualMenu]);

  $tabs.addEventListener('click', (e: any) => {
    const id: Menu = e.target.getAttribute('id');
    if (id === store.store.actualMenu || e.target.type !== 'button') return;
    store.setActualMenu = id;
    addClassWithoutExcept('hidden', $contentChildren, [id]);
  });

  return $app;
};
