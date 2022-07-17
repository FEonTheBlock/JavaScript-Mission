const templates = [
  `<h2>상품 추가하기</h2>
    <form action="">
      <input type="text" id="product-name-input" placeholder="상품명" />
      <input type="number" id="product-price-input" placeholder="가격" />
      <input type="number" id="product-quantity-input" placeholder="수량" />
      <button id="product-add-button">추가하기</button>
    </form>
  <h2>상품 현황</h2>
  <table>
    <tr>
      <th>상품명</th>
      <th>가격</th>
      <th>수량</th>
    </tr>
    <tr class="product-manage-item">
      <th class="product-manage-name">콜라</th>
      <td class="product-manage-price">1500</td>
      <td class="product-manage-quantity">20</td>
    </tr>
  </table>`,
  `<h2>자판기 동전 추가하기</h2>
    <form action="">
      <input type="number" id="vending-machine-charge-input" />
      <button id="vending-machine-charge-button">충전하기</button>
    </form>
    <p>보유 금액:</p>
    <h2>동전 보유 현황</h2>
    <table class="vending-machine-charge-amount">
      <tr>
        <th>동전</th>
        <th>개수</th>
      </tr>
      <tr>
        <th>500원</th>
        <td class="vending-machine-coin-500-quantity"></td>
      </tr>
      <tr>
        <th>100원</th>
        <td class="vending-machine-coin-100-quantity"></td>
      </tr>
      <tr>
        <th>50원</th>
        <td class="vending-machine-coin-50-quantity"></td>
      </tr>
      <tr>
        <th>10원</th>
        <td class="vending-machine-coin-10-quantity"></td>
      </tr>
    </table>`,
  `<h2>금액 투입</h2>
    <form>
      <input type="number" id="charge-input" />
      <button id="charge-button">투입하기</button>
    </form>
    <p id="charge-amount">투입한 금액: <span>0</span>원</p>
    <h2>구매할 수 있는 상품 현황</h2>
    <table>
      <tr>
        <th>상품명</th>
        <th>가격</th>
        <th>수량</th>
        <th>구매</th>
      </tr>
      <tr class="product-purchase-item">
        <th class="product-purchase-name" data-product-name="콜라">콜라</th>
        <td class="product-purchase-price" data-product-price="1500">1500</td>
        <td class="product-purchase-quantity" data-product-quantity="0">0</td>
        <td>
          <button class="purchase-button">구매하기</button>
        </td>
      </tr>
      <tr>
        <th class="product-purchase-name" data-product-name="사이다">사이다</th>
        <td class="product-purchase-price" data-product-price="1000">1000</td>
        <td class="product-purchase-quantity" data-product-quantity="0">0</td>
        <td>
          <button class="purchase-button">구매하기</button>
        </td>
      </tr>
    </table>
    <h2>잔돈</h2>
    <button id="coin-return-button">반환하기</button>
    <table>
      <tr>
        <th>동전</th>
        <th>개수</th>
      </tr>
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
    </table>`,
];

export default templates;
