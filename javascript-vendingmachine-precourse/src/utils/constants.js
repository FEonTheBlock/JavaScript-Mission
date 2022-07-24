export const ERRORS = {
  PROD_ADD: {
    EMPTY_PROD_NAME: '상품명을 입력해주세요.',
    WRONG_PRICE_UNIT: '상품 가격은 10의 배수로 입력해주세요.',
    WRONG_QUANTITY: '상품 수량은 0보다 큰 값으로 입력해주세요.',
    DUPLICATE_PROD_NAME: '이미 등록된 상품입니다.',
  },
  CHANGE: {
    EMPTY_CHANGE_AMOUNT: '충전 금액은 0원보다 큰 값을 입력해주세요.',
    WRONG_CHANGE_UNIT: '충전 금액은 10의 배수로 입력해주세요.',
  },
  PURCHASE: {
    EMPTY_PRODUCT_LIST: '등록된 상품이 없습니다. 상품을 등록해주세요.',
    EMPTY_CHANGE: '잔돈이 부족해 상품을 구매할 수 없습니다. 잔돈을 충전해주세요.',
    LACK_INSERTED: '현재 투입된 금액으로 해당 상품을 구매할 수 없습니다.',
  },
};
