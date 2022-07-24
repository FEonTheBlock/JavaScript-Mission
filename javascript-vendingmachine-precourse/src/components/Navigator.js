import Component from './Component.js';

import { MENUS } from '../utils/const.js';

const BUTTON_LIST = [
  {
    id: 'product-purchase-menu',
    dataset: MENUS.PURCHASE,
    name: '상품 구매',
  },
  {
    id: 'vending-machine-manage-menu',
    dataset: MENUS.CHANGES,
    name: '잔돈 충전',
  },
  {
    id: 'product-add-menu',
    dataset: MENUS.ADMIN,
    name: '상품 관리',
  },
];

export default class Navigator extends Component {
  setup() {
    this.$state = {
      currentPage: MENUS.PURCHASE,
    };
    this.$style = {
      ul: `
        display: flex;
        list-style: none;
        `,
      li: 'margin: 5px',
    };
  }

  template() {
    const list = BUTTON_LIST.map(
      ({ id, name, dataset }) =>
        ` <li style="${this.$style.li}">
            <button id="${id}" data-menu="${dataset}">${name}</button>
        </li>`,
    ).join(' ');

    return `
        <ul style="${this.$style.ul}">
            ${list}
        </ul>
    `;
  }

  setEvent() {
    const { changeMenu } = this.$props;
    this.addEvent('click', 'button', changeMenu);
  }
}
