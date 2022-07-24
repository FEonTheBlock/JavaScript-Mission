import models from '../../models'

const renderPurchaseItems = () =>
  models
    .getProductNames()
    .map((productName) =>
      `
        <tr class="product-purchase-item"
        >${Object.entries(models.getProductDetail(productName))
          .map(
            ([key, value]) =>
              `<td class="product-purchase-${key}" data-product-${key}="${value}">${value}</td>`
          )
          .join('')}
          <td>
            <button type="button" class="purchase-button" data-name="${productName}">
              구매하기
            </button>
          </td>
        </tr>`.trim()
    )
    .join('')

export default renderPurchaseItems
