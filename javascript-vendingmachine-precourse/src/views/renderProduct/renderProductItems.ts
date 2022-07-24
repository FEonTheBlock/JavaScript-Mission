import models from '../../models'

const renderProductItems = () =>
  models
    .getProductNames()
    .map((productName) =>
      `<tr class="product-manage-item">
        ${Object.entries(models.getProductDetail(productName))
          .map(
            ([key, value]) => `<td class="product-manage-${key}">${value}</td>`
          )
          .join('')}
      </tr>`.trim()
    )
    .join('')

export default renderProductItems
