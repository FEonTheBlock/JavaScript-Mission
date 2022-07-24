import { MENUS } from '../utils/const.js';
import Admin from './Admin.js';
import Changes from './Changes.js';
import Component from './Component.js';
import Purchase from './Purchase.js';

export default class Main extends Component {
  mounted() {
    const {
      currentPage,
      products,
      updateProduct,
      decreaseProduct,
      changes,
      addCoins,
    } = this.$props;
    const $main = this.$target;

    switch (currentPage) {
      case MENUS.ADMIN:
        new Admin('Admin', $main, { products, updateProduct });
        break;
      case MENUS.CHANGES:
        new Changes('Changes', $main, { changes, addCoins });
        break;
      case MENUS.PURCHASE:
        new Purchase('Purchase', $main, { products, changes, decreaseProduct });
    }
  }
}
