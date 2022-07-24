import { Menu } from '@/types';

export const TabMenu = (className?: string) => {
  const $tabs = document.createElement('ul');
  $tabs.className = className || 'tabs';

  $tabs.innerHTML = `<li>
  <button id="product-purchase-menu">상품 관리</button>
</li>
<li>
  <button id="vending-machine-manage-menu">잔동 충전</button>
</li>
<li>
  <button id="product-add-menu">상품 구매</button>
</li>`;

  const $title = document.createElement('h2');
  $title.textContent = '메뉴 이동';
  $tabs.insertBefore($title, $tabs.firstChild);

  return $tabs;
};
