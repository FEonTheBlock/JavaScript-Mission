import { VendingMachine } from '../layouts';
import { createElement, useState } from '../utils/Soact';

interface ProductAddMenuProps extends DefaultProps {
  data: Data;
  setData: SetState<Data>;
}

const productAddMenu = ({ data, setData }: ProductAddMenuProps) => {
  const [currentProduct, setCurrentProduct] = useState<Product>({
    product: '',
    price: 0,
    quantity: 0,
  });

  const changeProduct = (e: InputEvent) => {
    setCurrentProduct({
      ...currentProduct,
      product: (e.target as HTMLInputElement)?.value,
    });
  };
  const changePrice = (e: InputEvent) => {
    setCurrentProduct({
      ...currentProduct,
      price: +(e.target as HTMLInputElement)?.value,
    });
  };
  const changeQuantity = (e: InputEvent) => {
    setCurrentProduct({
      ...currentProduct,
      quantity: +(e.target as HTMLInputElement)?.value,
    });
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log({ currentProduct });
    if (
      data.products.find(({ product }) => product === currentProduct.product)
    ) {
      data.products = data.products.map((dataProducts) => {
        if (dataProducts.product === currentProduct.product) {
          return currentProduct;
        } else {
          return dataProducts;
        }
      });
    } else {
      data.products = [...data.products, currentProduct];
    }

    console.log({ ...data });
    setData({ ...data });
  };

  return VendingMachine({
    children: `
        <h2>상품 추가하기</h2>
        ${createElement(
          'form',
          {
            onsubmit: handleSubmit,
          },
          `
        
        ${createElement('input', {
          id: 'product-name-input',
          type: 'text',
          value: currentProduct.product,
          oninput: changeProduct,
        })}
        ${createElement('input', {
          id: 'product-price-input',
          type: 'number',
          value: currentProduct.price,
          oninput: changePrice,
        })}
        ${createElement('input', {
          id: 'product-quantity-input',
          type: 'number',
          value: currentProduct.quantity,
          oninput: changeQuantity,
        })}
        ${createElement(
          'button',
          {
            id: 'product-add-button',
            type: 'submit',
          },
          '추가'
        )}
        `
        )}
        
        ${createElement(
          'ul',
          null,
          `
            ${data.products.map(
              ({ product, price, quantity }) =>
                ` 
                  <li>
                    ${createElement('span', null, product)}
                    ${createElement('span', null, `${price}`)}
                    ${createElement('span', null, `${quantity}`)}
                  </li>
                `
            )}
          `
        )}
      `,
  });
};

export default productAddMenu;
