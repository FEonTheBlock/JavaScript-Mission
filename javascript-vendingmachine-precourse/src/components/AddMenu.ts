export const AddMenu = (className = 'product-add-menu') => {
  const $addMenu = document.createElement('div');
  $addMenu.className = className;
  $addMenu.innerHTML = `
  <h2>금액 투입</h2>
  <label>
    금액
    <input id="charge-input" type="number" placeholder="투입금액" />
  </label>
  <button id="charge-button">투입하기</button>

  투입한 금액: <span id="charge-amount"></span>

  <h2>구매할 수 있는 상품 현황</h2>
  <table>
    <thead>
      <tr>
        <th>상품명</th>
        <th>가격</th>
        <th>수량</th>
        <th>구매</th>
      </tr>
    </thead>
    <tbody>
      <tr class="product-purchase-item">
        <td class="product-purchase-name" data-product-name="코올라">
          코올라
        </td>
        <td class="product-purchase-price" data-product-price="1000000">
          1000000
        </td>
        <td
          class="product-purchase-quantity"
          data-product-quantity="111111"
        >
          111111
        </td>
        <td><button class="purchase-button">구매하기</button></td>
      </tr>
    </tbody>
  </table>

  <h2>잔돈</h2>
  <button id="coin-return-button">반환하기</button>
  <table>
    <thead>
      <tr>
        <th>동전</th>
        <th>개수</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>500원</th>
        <td id="coin-500-quantity"></td>
      </tr>
      <tr>
        <th>100원</th>
        <td id="coin-100-quantity"></td>
      </tr>
      <tr>
        <th>50원</th>
        <td id="coin-50-quantity"></td>
      </tr>
      <tr>
        <th>10원</th>
        <td id="coin-10-quantity"></td>
      </tr>
    </tbody>
  </table>`;
  return $addMenu;
};
