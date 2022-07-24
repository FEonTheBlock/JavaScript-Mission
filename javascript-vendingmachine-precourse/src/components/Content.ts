import { AddMenu, ManageMenu, PurchaseMenu } from '@/components';

export const Content = (className = 'content') => {
  const $content = document.createElement('div');
  $content.className = className;
  $content.append(PurchaseMenu(), ManageMenu(), AddMenu());

  return $content;
};
