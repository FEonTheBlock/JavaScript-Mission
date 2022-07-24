import { AddMenu, ManageMenu, PurchaseMenu } from '@/components';
import store from '@/store';

export const Content = (store: store) => {
  const $content = document.createElement('div');
  $content.className = 'content';
  $content.append(PurchaseMenu(store), ManageMenu(store), AddMenu(store));

  return $content;
};
