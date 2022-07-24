import { AddMenu, ManageMenu, PurchaseMenu } from '@/components';
import { Store } from '@/types';

export const Content = (store: Store) => {
  const $content = document.createElement('div');
  $content.className = 'content';
  $content.append(PurchaseMenu(store), ManageMenu(store), AddMenu(store));

  return $content;
};
