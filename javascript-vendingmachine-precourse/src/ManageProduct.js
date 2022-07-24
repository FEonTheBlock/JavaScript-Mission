import { createEl, getValueFromLocalStorage, validateProduct } from './utils.js';
import { ERROR_MSG, TEMPLATES } from './constants.js';

let products = getValueFromLocalStorage('products', []);

const handleProductAdd = e => {
  e.preventDefault();
  const [$nameInput, $priceInput, $quantityInput] = ['name', 'price', 'quantity'].map(type =>
    document.querySelector(`#product-${type}-input`)
  );
  const [name, price, quantity] = [
    $nameInput.value,
    parseInt($priceInput.value),
    parseInt($quantityInput.value),
  ];

  if (price < 100) {
    alert(ERROR_MSG.PRODUCT_MIN_PRICE);
  } else if (price % 10) {
    alert(ERROR_MSG.PRODUCT_MIN_PRICE_UNIT);
  } else if (quantity < 1) {
    alert(ERROR_MSG.PRODUCT_MIN_QUANTITY);
  }

  if (validateProduct(price, quantity)) {
    const newProduct = {
      name: name,
      price: price,
      quantity: quantity,
    };
    renderProduct(newProduct);
    saveProduct(newProduct);
    [$nameInput, $priceInput, $quantityInput].forEach($el => {
      $el.value = '';
    });
  }
};

const renderProduct = product => {
  const $table = document.querySelector('table');
  const $newTableRow = createEl({
    tagName: 'tr',
    className: 'product-manage-item',
  });
  const [$newProduct_name, $newProduct_price, $newProduct_quantity] = [
    'name',
    'price',
    'quantity',
  ].map(type =>
    createEl({
      tagName: 'td',
      className: `product-manage-${type}`,
      innerText: product[type],
    })
  );

  [$newProduct_name, $newProduct_price, $newProduct_quantity].forEach($el => {
    $newTableRow.append($el);
  });

  $table.append($newTableRow);
};

const saveProduct = newProduct => {
  products = [...products, newProduct];
  localStorage.setItem('products', JSON.stringify(products));
};

export const manageProduct = () => {
  document.querySelector('#app section').innerHTML = TEMPLATES.PRODUCT_ADD;

  products.forEach(product => {
    renderProduct(product);
  });

  const $form = document.querySelector('form');
  $form.addEventListener('submit', handleProductAdd);
};
