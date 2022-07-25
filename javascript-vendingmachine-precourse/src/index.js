import Admin from './components/Admin.js';
import Changes from './components/Changes.js';
import Component from './components/Component.js';
import Navigator from './components/Navigator.js';
import Purchase from './components/Purchase.js';
import { MENUS } from './utils/const.js';
import { getItem } from './utils/localStorage.js';

class App extends Component {
  setup() {
    const newState = getItem('App');

    this.$state = {
      currentPage: MENUS.CHANGES,
      products: [],
      changes: {
        coins: {
          500: 0,
          100: 0,
          50: 0,
          10: 0,
        },
        total: 0,
      },
      ...newState,
    };
  }
  template() {
    return `
    <nav id="navigator"></nav>
    <main id="main"></main>
    `;
  }

  mounted() {
    const $navigator = this.$target.querySelector('#navigator');
    const $main = this.$target.querySelector('#main');

    new Navigator('Navigator', $navigator, {
      changeMenu: this.changeMenu.bind(this),
    });

    const { currentPage, products, changes } = this.$state;

    switch (currentPage) {
      case MENUS.ADMIN:
        new Admin('Admin', $main, {
          products,
          updateProduct: this.updateProduct.bind(this),
        });
        break;
      case MENUS.CHANGES:
        new Changes('Changes', $main, {
          changes,
          addCoins: this.addCoins.bind(this),
        });
        break;
      case MENUS.PURCHASE:
        new Purchase('Purchase', $main, {
          products,
          changes,
          decreaseProduct: this.decreaseProduct.bind(this),
        });
    }
  }

  removeCoins(useTotal, useCoins) {
    const { coins, total } = this.$state.changes;
    const newCoins = {};
    Object.entries(coins).map(([coin, count]) => {
      newCoins[coin] = count - useCoins[coin];
    });

    this.setState({
      changes: {
        coins: { ...newCoins },
        total: total - Number(useTotal),
      },
    });
  }

  addCoins(newTotal, newCoins) {
    this.setState({
      changes: {
        coins: { ...newCoins },
        total: this.$state.changes.total + Number(newTotal),
      },
    });
  }

  changeMenu(e) {
    const { menu } = e.target.closest('button').dataset;
    if (!menu) return;
    this.setState({ currentPage: menu });
  }

  updateProduct(newProduct) {
    this.setState({
      products: [...this.$state.products, newProduct],
    });
  }

  decreaseProduct(product) {
    if (product.count === 1) {
      this.setState({
        products: this.$state.products.filter(
          ({ name }) => name !== product.name,
        ),
      });
      return;
    }
    this.setState({
      products: this.$state.products.map(({ name, cost, count }) => ({
        name,
        cost,
        count: name === product.name ? count - 1 : count,
      })),
    });
  }
}

new App('App', document.querySelector('#app'));
