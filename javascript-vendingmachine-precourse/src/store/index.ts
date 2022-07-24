import { Charge, Menu, Product, Store } from '@/types';

class store {
  private actualMenu: Menu;
  private product: Product[];
  private charge: Charge;

  constructor({ actualMenu, product, charge }: Store) {
    this.actualMenu = actualMenu;
    this.product = product;
    this.charge = charge;
  }

  get store() {
    return {
      actualMenu: this.actualMenu,
      product: this.product,
      charge: this.charge,
    };
  }

  set setActualMenu(menu: Menu) {
    this.actualMenu = menu;
    this.render();
  }

  set setProduct(product: Product[]) {
    this.product = product;
    this.render();
  }

  set setCharge(charge: Charge) {
    this.charge = charge;
    this.render();
  }

  set resetStore({ charge, product }: Store) {
    this.charge = charge;
    this.product = product;
    this.render();
  }

  private render() {
    window.localStorage.setItem('store', JSON.stringify(this.store));
    //! 옵저빙 패턴 하기 전까지.. 리로드 하는걸로...
    location.reload();
  }
}

export default store;
