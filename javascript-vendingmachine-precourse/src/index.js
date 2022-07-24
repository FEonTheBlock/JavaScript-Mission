import Component from './components/Component.js';
import Main from './components/Main.js';
import Navigator from './components/Navigator.js';
import { MENUS } from './utils/const.js';

class App extends Component {
  setup() {
    this.$state = {
      currentPage: MENUS.CHANGES,
      products: [
        {
          name: '콜라',
          cost: 1000,
          count: 34,
        },
      ],
      changes: {
        coins: {
          500: 0,
          100: 0,
          50: 0,
          10: 0,
        },
        total: 0,
      },
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
    new Main('Main', $main, {
      currentPage: this.$state.currentPage,
      products: this.$state.products,
      updateProduct: this.updateProduct.bind(this),
      changes: this.$state.changes,
      addCoins: this.addCoins.bind(this),
      decreaseProduct: this.decreaseProduct.bind(this),
    });
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
