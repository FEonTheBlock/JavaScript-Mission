export const COIN_INIT = [
  { coinValue: 500, quantity: 0 },
  { coinValue: 100, quantity: 0 },
  { coinValue: 50, quantity: 0 },
  { coinValue: 10, quantity: 0 },
];

export const ERROR_MSG = {
  PRODUCT_MIN_PRICE: '상품 가격은 100원 이상이어야 합니다.',
  PRODUCT_MIN_PRICE_UNIT: '상품 가격은 10원으로 나누어떨어져야 합니다.',
  PRODUCT_MIN_QUANTITY: '상품 수량은 1개 이상 입력해야 합니다.',
  CHARGE_MIN_PRICE: '충전 금액은 100원 이상이어야 합니다.',
  CHARGE_MIN_PRICE_UNIT: '충전 금액은 10원으로 나누어떨어져야 합니다.',
  PURCHASE_MIN_PRICE: '투입 금액은 100원 이상이어야 합니다.',
  PURCHASE_MIN_PRICE_UNIT: '투입 금액은 10원으로 나누어떨어져야 합니다.',
  PRODUCT_PURCHASE: `투입 금액은 10원부터 시작하며, 10원으로 나누어 떨어져야 합니다.`,
};

export const TEMPLATES = {
  PRODUCT_ADD: `
  <h2>상품 추가하기</h2>
  <form>
    <input
      type="text"
      id="product-name-input"
      placeholder="상품명"
      required
    />
    <input
      type="number"
      id="product-price-input"
      placeholder="가격"
      required
    />
    <input
      type="number"
      id="product-quantity-input"
      placeholder="수량"
      required
    />
    <button type="submit" id="product-add-button">추가하기</button>
  </form>

  <h2>상품 현황</h2>
  <table>
    <tr>
      <th>상품명</th>
      <th>가격</th>
      <th>수량</th>
    </tr>
  </table>
`,
  MANAGE: `
<h2>자판기 동전 충전하기</h2>
<form>
  <input
    type="number"
    id="vending-machine-charge-input"
    placeholder="충전 금액"
    required
  />
  <button type="submit" id="vending-machine-charge-button">충전하기</button>
</form>
<p>보유 금액: <span id="vending-machine-charge-amount"></span></p>

<h2>동전 보유 현황</h2>
<table>
  <tr>
    <th>동전</th>
    <th>개수</th>
  </tr>
  <tr>
    <td>500원</td>
    <td id="vending-machine-coin-500-quantity"></td>
  </tr>
  <tr>
    <td>100원</td>
    <td id="vending-machine-coin-100-quantity"></td>
  </tr>
  <tr>
    <td>50원</td>
    <td id="vending-machine-coin-50-quantity"></td>
  </tr>
  <tr>
    <td>10원</td>
    <td id="vending-machine-coin-10-quantity"></td>
  </tr>
</table>
`,
  PRODUCT_PURCHASE: `
<h2>금액 투입</h2>
<form>
  <input
    type="number"
    id="charge-input"
    placeholder="투입 금액"
    required
  />
  <button type="submit" id="charge-button">투입하기</button>
</form>
<p>투입한 금액: <span id="charge-amount"></span>원</p>

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
  <tbody></tbody>
</table>

<h2>잔돈</h2>
<button id="coin-return-button">반환하기</button>
<table>
  <tr>
    <th>동전</th>
    <th>개수</th>
  </tr>
  <tr>
    <td>500원</td>
    <td id="coin-500-quantity"></td>
  </tr>
  <tr>
    <td>100원</td>
    <td id="coin-100-quantity"></td>
  </tr>
  <tr>
    <td>50원</td>
    <td id="coin-50-quantity"></td>
  </tr>
  <tr>
    <td>10원</td>
    <td id="coin-10-quantity"></td>
  </tr>
</table>
`,
};
