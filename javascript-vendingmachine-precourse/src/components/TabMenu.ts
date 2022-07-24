import { INITIAL_VENDOR_STORE } from '@/constants';
import store from '@/store';

export const TabMenu = (store: store) => {
  const $tabs = document.createElement('ul');
  $tabs.className = 'tabs';

  $tabs.innerHTML = `
    <h2>메뉴 이동</h2>
    <li>
    <button id="product-purchase-menu" type="button">상품 관리</button>
    </li>
    <li>
      <button id="vending-machine-manage-menu" type="button">잔동 충전</button>
    </li>
    <li>
      <button id="product-add-menu" type="button">상품 구매</button>
    </li>
  `;

  const $resetListItem = document.createElement('li');
  const $resetButton = document.createElement('button');
  $resetButton.innerHTML = '자판기 리셋하기';
  $resetButton.addEventListener('click', () => {
    store.resetStore = INITIAL_VENDOR_STORE;
  });

  $resetListItem.append($resetButton);

  $tabs.append($resetListItem);

  return $tabs;
};
