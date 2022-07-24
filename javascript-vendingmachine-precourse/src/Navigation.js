import { manageProduct } from './ManageProduct.js';
import { manageVendingMachine } from './VendingMachineManage.js';
import { managePurchase } from './ProductPurchase.js';
import { createEl } from './utils.js';

const handleNavigation = e => {
  if (e.target.id === 'product-add-menu') {
    manageProduct();
  }
  if (e.target.id === 'vending-machine-manage-menu') {
    manageVendingMachine();
  }
  if (e.target.id === 'product-purchase-menu') {
    managePurchase();
  }
};

const initNavigation = () => {
  const $app = document.querySelector('#app');
  const $menuBar = createEl({ tagName: 'nav', id: 'navigation' });
  const $productAddMenuButton = createEl({
    tagName: 'button',
    id: 'product-add-menu',
    innerText: '상품 관리',
  });
  const $vendingMachineManageMenuButton = createEl({
    tagName: 'button',
    id: 'vending-machine-manage-menu',
    innerText: '잔돈 충전',
  });
  const $productPurchaseMenuButton = createEl({
    tagName: 'button',
    id: 'product-purchase-menu',
    innerText: '상품 구매',
  });
  $menuBar.append(
    $productAddMenuButton,
    $vendingMachineManageMenuButton,
    $productPurchaseMenuButton
  );
  $app.append($menuBar);

  const $section = createEl({ tagName: 'section' });
  $section.innerHTML = '<h2>메뉴를 선택하세요!</h2>';
  $app.append($section);
};

export const renderVendingMachine = () => {
  initNavigation();
  document.querySelector('#navigation').addEventListener('click', handleNavigation);
};
