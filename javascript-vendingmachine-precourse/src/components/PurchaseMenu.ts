export const PurchaseMenu = (className = 'product-purchase-menu') => {
  const $purchaseMenu = document.createElement('div');
  $purchaseMenu.className = className;
  $purchaseMenu.innerHTML = `
  product-purchase-menu
  <form>
      <h2>상품 추가하기</h2>
      <input type="text" id="product-name-input" placeholder="상품명"/>
      <input type="number" id="product-price-input" placeholder="가격"/>
      <input type="number" id="product-quantity-input" placeholder="수량"/>
      <button id="product-add-button">추가하기</button>
    </form>
    <table class="products">
      <h2>상품 현황</h2>
      <thead>
        <tr>
          <th class="product-manage-name">상품명</th>
          <th class="product-manage-price">가격</th>
          <th class="product-manage-quantity">수량</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="product-manage-name">콜라</td>
          <td class="product-manage-price">222</td>
          <td class="product-manage-quantity">33</td>
        </tr>
      </tbody>
    </table>`;
  return $purchaseMenu;
};
